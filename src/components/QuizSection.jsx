import Question from "./Question";

function QuizSection({quizData}){
    return(
        <section className="quiz-section">
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
        </section>
    )
}

export default QuizSection;
