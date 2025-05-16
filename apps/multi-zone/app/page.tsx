import styles from "./page.module.css";

export default function Home() {
  return (
      <div className={styles.left}>
        <iframe
        src="http://localhost:3001"
      />
      <iframe
        src="http://localhost:3000"
      />
    </div>
  );
}
