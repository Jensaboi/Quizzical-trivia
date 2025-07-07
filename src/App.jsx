import { useEffect, useState } from 'react'
import WelcomeSection from './components/WelcomeSection'
import QuizSection from './components/QuizSection'

function App() {
    const API_URL = 'https://opentdb.com/api.php?amount=5'
    const [isQuizStarted, setIsQuizStarted] = useState(false)
    const [quizData, setQuizData ] = useState([])

    function startQuiz(){
        setIsQuizStarted(prev => !prev)
    }

    useEffect(()=>{
        fetch(API_URL)
        .then(response => {
            if(!response.ok) throw new Error(response.status)
                return response.json()
        })
        .then(data => {
            console.log(data)
            return setQuizData(data.results)
        })
        .catch(err => console.error(err))

    },[])


  return (
    <main>
        {
        !isQuizStarted ? <WelcomeSection startQuiz={startQuiz} />
        : <QuizSection />
        }

    </main>
  )
}

export default App
