import DefDisplay from "./DefDisplay";
import NotFound from "./NotFound";
import classes from "./styles/DefList.module.scss";
import { useEffect, useState } from "react";

const DefList = (props) => {
  const [notFound, setNotFound] = useState("");
  const [word, setWord] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${props.displayData}`
    )
      .then((res) => {
        if (!res.ok) {
          setWord([]);
          setNotFound(props.displayData);
          return;
        } else {
          setNotFound("");
          return res.json();
        }
      })
      .then((data) => {
        setWord(data);
        console.log(data);
      });
  }, [props.displayData]);

  return (
    <div className={classes.list}>
      <header />
      <div className={classes["bg-image"]} />
      <NotFound notFound={notFound} />
      {word !== undefined &&
        word.map((info) => (
          <DefDisplay
            key={Math.random()}
            word={info.word}
            phonetics={info.phonetics}
            definition={info.meanings}
          />
        ))}
      <footer />
    </div>
  );
};

export default DefList;
