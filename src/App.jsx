import { useEffect, useState } from 'react'
import WelcomeSection from './components/WelcomeSection'
import Question from './components/Question'
import { shuffleArr } from './utils/utils'
import { fetchQuizData, API_URL } from './utils/api'

function App() {

    const [isQuizStarted, setIsQuizStarted] = useState(false)
    const [quizData, setQuizData ] = useState([])
    const [isDone, setIsDone] = useState(false)

    const correctAnswerCount = quizData.filter(item =>{
        if(item.selected_answer === item.correct_answer){
            return item;
        }
        return null;
    }).length

    function checkAnswers(){
        setIsDone(prev => !prev)
    }

    function startQuiz(){
        setIsQuizStarted(prev => !prev)
    }

    function selectAnswer(questionObj, selected){
        setQuizData(prev => prev.map(item =>{
            if(item.question === questionObj.question){
                return{
                    ...item,
                    selected_answer: selected
                }
            }
            return item
        }))
    }

    useEffect(()=>{
        fetch(API_URL)
            .then((response) => {
                if (!response.ok) throw new Error(response.status);

                return response.json();
            })
            .then((data) => {
                const modified = data.results.map((item) => {
                    const arrCopy = item.incorrect_answers.slice();
                    arrCopy.push(item.correct_answer);
                    //new arr with all answers
                    return {
                        ...item,
                        all_answers: shuffleArr(arrCopy),
                        selected_answer: null,
                    };
                });
                setQuizData(modified);
            })
            .catch((err) => console.error(err)); 
    },[])

    const questionElements = quizData.map((item, i) => {
        return(
            <Question key={i} data={item} selectAnswer={selectAnswer} isDone={isDone}/>
        )
    })

    async function newGame(){
        try{
            const data = await fetchQuizData(API_URL)
            setQuizData(data)

            setIsDone(prev => !prev)
        }catch(err){
            console.error(err)
        }
        
    }

  return (
    <main>
        { !isQuizStarted ? <WelcomeSection startQuiz={startQuiz} />
          : (
            <section className="quiz-section">
                {questionElements}
                <div className="check-answer-btn-container">
                {!isDone ? (
                    <button 
                        onClick={checkAnswers}
                        className="check-answers-btn"
                    >
                        Check Answers
                    </button>
                ) : (
                    <>
                        <p>You scored {correctAnswerCount}/{quizData.length} correct answers</p>
                        <button onClick={newGame}>Play again!</button>
                    </>
                )}
                </div>
            </section>
            )
        }

    </main>
  )
}

export default App