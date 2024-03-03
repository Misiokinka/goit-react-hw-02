
import Options from "../Options/Options";
import css from "./Feedback.module.css"

const Feedback = ({ options, percentReviews }) => {
    const { good, neutral, bad } = options;

    return (
        <div>
            <ul className={css.reviewsList}>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {good + neutral + bad}</li>
                <li>Positive: {percentReviews}%</li>
            </ul>
        </div>)
}

export default Feedback;