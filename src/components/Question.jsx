import { decode } from 'he'
import { shuffleArr } from '../utils/utils';

function Question({data, selectAnswer}){

    const allAnswers = shuffleArr([...data.incorrect_answers, data.correct_answer])
    const answerButtons = allAnswers.map( answer => (

        <button
            key={answer}
            onClick={()=>{selectAnswer(data, answer)}}
            className='answer-btn'
        >
            {decode(answer)}
        </button>
    ))

    return(
        <article className="question-article">
            <p className="question-text">{decode(data.question)}</p>
            <div className="answer-btns-container">
                {answerButtons}
            </div>
            <hr />
        </article>
    )
}

export default Question;
