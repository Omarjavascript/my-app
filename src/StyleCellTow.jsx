import styles from "./StyleCellTow.module.css";

function StyleCellTow(props) {
  return <div className={styles["top-right-box"]}>{props.children}</div>;
}
export default StyleCellTow;
