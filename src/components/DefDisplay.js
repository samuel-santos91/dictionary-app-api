import classes from "./styles/DefDisplay.module.scss";

const DefDisplay = (props) => {
  const audio = (audio) => {
    new Audio(audio).play();
  };

  //FILTER ARRAYS THEY MAY COME WITH MORE THAN 2 OBJECTS
  const filteredAudio = props.phonetics.filter(
    (item) => item.audio.includes("uk") || item.audio.includes("us")
  );

  return (
    <div className={classes["def-area"]}>
      {props.definition.map((item) => (
        <div className={classes["def-display"]} key={Math.random()}>
          <section
            className={classes["word-definition"]}
            style={
              props.word === "" ? { display: "none" } : { display: "block" }
            }
          >
            <h1>{props.word}</h1>

            <div className={classes["part-of-speech"]}>
              <p>
                <i>{item.partOfSpeech}</i>
              </p>
            </div>

            <div className={classes.phonetics}>
              {filteredAudio.map((item) =>
                item.hasOwnProperty("text") ? (
                  item.audio !== "" ? (
                    <div className={classes.phonetic} key={Math.random()}>
                      {item.audio.includes("uk") ? <p>UK</p> : <p>US</p>}
                      <button
                        onClick={() => audio(item.audio)}
                        type="button"
                      ></button>
                      <p className={classes.text}>{item.text}</p>
                    </div>
                  ) : null
                ) : null
              )}
            </div>
            <hr />

            <div className={classes.def}>
              <ul>
                {item.definitions.map((def) => (
                  <li key={Math.random()}>
                    <strong>{def.definition}</strong> <br />
                    <br />
                    {def.example !== undefined && (
                      <ul className={classes.example}>
                        <li>{def.example}</li>
                      </ul>
                    )}
                    <hr />
                  </li>
                ))}
              </ul>
            </div>
            <hr />
          </section>
        </div>
      ))}
    </div>
  );
};

export default DefDisplay;
