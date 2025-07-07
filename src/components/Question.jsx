function Question({props}){
    return(
        <article className="question-article">
            <p className="question-text">How would one say goodbye in Spanish?</p>
            <div className="answer-btns-container">
                <button className="answer-btn">Adios</button>
                <button className="answer-btn">hola</button>
                <button className="answer-btn">Au Revoir</button>
                <button className="answer-btn">Salir</button>
            </div>
            <hr />
        </article>
    )
}

export default Question;
