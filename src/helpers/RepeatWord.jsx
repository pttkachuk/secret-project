import React from "react";

const RepeatWord = ({ word, count }) => {
  const wordsArray = new Array(count).fill(word);
  const repeatedText = wordsArray.join("  ");
  return (
    <>
      <p>{repeatedText}</p>
    </>
  );
};

export default RepeatWord;
