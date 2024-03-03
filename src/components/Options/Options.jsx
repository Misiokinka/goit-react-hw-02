import css from "./Options.module.css"


const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {

    return (
        <div className={css.btnWraapper}>
            <button onClick={() => updateFeedback("good")}>Good</button>
            <button onClick={() => updateFeedback("neutral")}>Neutral</button>
            <button onClick={() => updateFeedback("bad")}>Bad</button>
            {totalFeedback ? <button onClick={() => resetFeedback("reset")}>Reset</button> : null}
        </div>
    )
}

export default Options;
