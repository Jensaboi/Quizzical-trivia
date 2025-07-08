import { decode } from 'he'
import { shuffleArr } from '../utils/utils';

function Question({data, selectAnswer }){

    const answerButtons = data.all_answers.map( answer => {
        let styles = {
            backgroundColor: data?.selected === answer ? '#D6DBF5' : ''
        }

        return (
            <button
                style={styles}
                key={answer}
                onClick={()=>{selectAnswer(data,answer)}}
                className='answer-btn'
            >
                {decode(answer)}
            </button>
        )
    })

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
