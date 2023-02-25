import classes from "./styles/NotFound.module.scss"

const NotFound = (props) => {
  return (
    <section
      className={classes["not-found"]}
      style={props.notFound === "" ? { display: "none" } : { display: "flex" }}
    >
      <p>
        No results found for &nbsp; <strong>{props.notFound}</strong>
      </p>
    </section>
  );
};

export default NotFound;
