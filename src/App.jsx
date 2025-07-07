import { useEffect, useState } from 'react'
import WelcomeSection from './components/WelcomeSection'
import Question from './components/Question'
import { shuffleArr } from './utils/utils'

function App() {

    const [isQuizStarted, setIsQuizStarted] = useState(false)
    const [quizData, setQuizData ] = useState([])

    function startQuiz(){
        setIsQuizStarted(prev => !prev)
    }

    function selectAnswer(obj, answer){
        setQuizData(prevData => prevData.map( prevObj => {
            if(prevObj.question === obj.question){
                return({
                    ...prevObj,
                    selected_answer: answer
                })
            }
            return prevObj;
        }))
    }
    useEffect(()=>{
        console.log(quizData)
    },[quizData])
    //Fetch quiz data
    useEffect(()=>{
        const API_URL = 'https://opentdb.com/api.php?amount=5'

        fetch(API_URL)
        .then(response => {
            if(!response.ok) throw new Error(response.status)

                return response.json()
        })
        .then(data => setQuizData(data.results))
        .catch(err => console.error(err))

    },[])

    const questionElements = quizData.map((item, i) => {
        return(
            <Question key={i} data={item} selectAnswer={selectAnswer}/>
        )
    })

  return (
    <main>
        { !isQuizStarted ? <WelcomeSection startQuiz={startQuiz} />
          : (
            <section className="quiz-section">
                {questionElements}
                <div className="check-answer-btn-container">
                    <button className="check-answers-btn">Check Answers</button>
                </div>
            </section>
            )
        }

    </main>
  )
}

export default App
