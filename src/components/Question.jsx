import { decode } from 'he'
import { shuffleArr } from '../utils/utils';
import clsx from 'clsx';

function Question({data, selectAnswer , isDone}){

    const answerButtons = data.all_answers.map( answer => {
        const selected = data?.selected_answer === answer;
        const correct = data.correct_answer === answer

        const className = clsx({
            'answer-btn': true, 
            'selected-answer': selected && !isDone,
            'correct-answer': correct && isDone,
            'wrong-answer': selected && !correct && isDone
        })
        return (
            <button
                disabled={isDone}
                className={className}
                key={answer}
                onClick={()=>{selectAnswer(data,answer)}}
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
