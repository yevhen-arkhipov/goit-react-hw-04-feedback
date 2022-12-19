import { useState } from 'react';

import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

import { GlobalStyle } from './GlobalStyle';
import { Container } from './App.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = type => {
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        new Error('The type not found');
    }
  };

  const total = good + neutral + bad;
  const positivePercentage = Math.floor((good / total) * 100);
  const options = Object.keys({ good, neutral, bad });

  return (
    <>
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
        </Section>
        <Section title={'Statistics'}>
          {!!total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
      <GlobalStyle />
    </>
  );
};

export default App;
