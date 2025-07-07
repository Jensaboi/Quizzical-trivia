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

    useEffect(()=>{
        console.log(quizData)
    },[quizData])


    const questionElements = quizData.map((item, i) => {

    const allAnswers = shuffleArr([...item.incorrect_answers, item.correct_answer])

        return(
            <Question key={i} question={item.question} answers={allAnswers}/>
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
