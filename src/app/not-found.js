import Link from "next/link";
import styles from "../../Styles/404.module.css";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className={styles.error}>
      <h1 className="flex justify-center items-center gap-1">
        <FaExclamationTriangle />
        404
      </h1>
      <h4>Sorry, there is nothing here</h4>
      <Link href="/">Go back home</Link>
    </div>
  );
};

export default NotFoundPage;
