import Question from "./Question";
import { shuffleArr } from "../utils/utils";

function QuizSection({quizData}){

    const questionElements = quizData.map((questionObj, i) => {

    const allAnswers = shuffleArr([...questionObj.incorrect_answers, questionObj.correct_answer])

        return(
            <Question key={i} question={questionObj.question} answers={allAnswers}/>
        )
    })
    return(
        <section className="quiz-section">
            {questionElements}
            <div className="check-answer-btn-container">
                <button className="check-answers-btn">Check Answers</button>
            </div>
        </section>
    )
}

export default QuizSection;
