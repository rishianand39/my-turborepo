import styles from "./page.module.css";

export default function Home() {
  return (
      <div className={styles.left}>
        <iframe
        src="https://my-turborepo-web-nu.vercel.app/"
      />
      <iframe
        src="https://my-turborepo-docs-lilac.vercel.app/"
      />
    </div>
  );
}
