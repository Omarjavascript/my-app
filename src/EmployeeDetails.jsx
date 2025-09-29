import StyleCell from "./StyleCell";
import styles from "./StyleCell.module.css";

function EmployeeDetails(props) {
  const postNumber = 20;
  const numberOfPost = postNumber || "Post 3";
  console.log(props);
  return (
    <>
      <header className={styles["main-header"]}>Tarmeez Acadmey</header>
      <StyleCell>
        <div>
          <h1>{numberOfPost}</h1>
          <h1>اكادمية ترميز</h1>
          <hr></hr>
          <p>اكادمية مخصصه لتعليم البرمجه </p>
        </div>
      </StyleCell>
    </>
  );
}
export default EmployeeDetails;
