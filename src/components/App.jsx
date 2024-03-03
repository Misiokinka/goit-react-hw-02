import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import "modern-normalize";
import Description from "./Description/Description"
import Feedback from "./Feedback/Feedback"
import Options from "./Options/Options"
import Notification from "./Notification/Notification"

const App = () => {
  const [options, setOptions] = useState(window.localStorage.getItem("saved-options") ? JSON.parse(window.localStorage.getItem("saved-options")) : {
    good: 0,
    neutral: 0,
    bad: 0
  })

  const { good, neutral, bad } = options

  const totalFeedback = good + neutral + bad;

  const updateFeedback = feedbackType => {
    setOptions(prevOptions => ({
      ...prevOptions,
      [feedbackType]: prevOptions[feedbackType] + 1
    }));
  }

  useEffect(() => {

    window.localStorage.setItem("saved-options", JSON.stringify(options));

  }, [good, neutral, bad]);


  const resetFeedback = () => {
    setOptions({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }

  const percentReviews = Math.round(((good + neutral) / totalFeedback) * 100)
  return (
    <div className='mainContainer'>
      <Description />

      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback} resetFeedback={resetFeedback} />

      {totalFeedback ? <Feedback
        options={options}
        updateFeedback={updateFeedback}
        percentReviews={percentReviews} /> : <Notification />}
    </div>
  );
};

export default App


