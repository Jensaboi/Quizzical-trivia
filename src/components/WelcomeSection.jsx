function WelcomeSection({startQuiz}){
    return(
        <section className="welcome-section">
            <h1>Quizzical</h1>
            <p>Some description text if needed</p>

            <button onClick={startQuiz}>Start quiz</button>
        </section>
    )
}

export default WelcomeSection;
