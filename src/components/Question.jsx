import { decode } from 'he'

function Question({question, answers}){

    let answerButtons = answers.map(answer => (

        <button
            className="answer-btn"
            key={answer}
        >
            {decode(answer)}
        </button>
    ))
    return(
        <article className="question-article">
            <p className="question-text">{decode(question)}</p>
            <div className="answer-btns-container">
                {answerButtons}
            </div>
            <hr />
        </article>
    )
}

export default Question;
