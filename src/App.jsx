import { useEffect, useState } from 'react'
import WelcomeSection from './components/WelcomeSection'
import QuizSection from './components/QuizSection'

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
  return (
    <main>
        {
        !isQuizStarted ? <WelcomeSection startQuiz={startQuiz} />
        : <QuizSection quizData={quizData}/>
        }

    </main>
  )
}

export default App
