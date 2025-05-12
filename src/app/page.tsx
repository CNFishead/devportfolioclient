import Home from "@/views/home/Home.view";
import styles from "./page.module.scss";

export default function Page() {
  return (
    <div className={styles.page}>
      <Home />
    </div>
  );
}
