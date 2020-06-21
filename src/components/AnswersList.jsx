import React from 'react';
import Answer from './Answer';

const AnswersList = (props) => {
  const { answers } = props;
  return (
    <div className="c-grid__answer">
      {answers.map((value, index) => {
        return <Answer content={value.content} key={index.toString()} />;
      })}
    </div>
  );
};

export default AnswersList;
