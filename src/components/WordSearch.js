import { useState } from "react";
import classes from "./styles/WordSearch.module.scss";

const WordSearch = (props) => {
  const [word, setWord] = useState("");
  const [header, setHeader] = useState(false);

  const inputHandler = (event) => {
    setWord(event.target.value);
  };

  const wordHandler = (event) => {
    event.preventDefault();
    setHeader(true);
    props.onWordSearch(word);
    setWord("");
  };

  return (
    <form onSubmit={wordHandler}>
      <div
        className={`${classes["search-form"]} ${
          header === true ? classes.header : ""
        }`}
      >
        <input
          type="text"
          placeholder="Search for any word"
          value={word}
          onChange={inputHandler}
          required
        />
        <button type="submit" />
      </div>
    </form>
  );
};

export default WordSearch;
