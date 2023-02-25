import { useState } from "react";
import WordSearch from "./components/WordSearch";
import DefList from "./components/DefList"

const App = () => {
  const [wordInSearch, setWordInSearch] = useState("");

  const wordHandler = (word) => {
    setWordInSearch(word);
  };

  return (
    <div>
      <WordSearch onWordSearch={wordHandler} />
      {wordInSearch !== "" && <DefList displayData={wordInSearch}/>}
    </div>
  );
};
export default App;

