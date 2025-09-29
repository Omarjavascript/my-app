import styles from "./StyleCell.module.css";

function StyleCell(props) {
  return <div className={styles["academy-card"]}>{props.children}</div>;
}
export default StyleCell;
