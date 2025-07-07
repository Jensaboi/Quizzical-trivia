
function Question({question, answers}){

    let answerButtons = answers.map(answer => (

        <button
            className="answer-btn"
            key={answer}
        >
            {answer}
        </button>
    ))
    return(
        <article className="question-article">
            <p className="question-text">{question}</p>
            <div className="answer-btns-container">
                {answerButtons}
            </div>
            <hr />
        </article>
    )
}

export default Question;
