'use client'
import styles from "./page.module.css";
import { setThemeColor, useAppDispatch, useAppSelector } from "store"
import { useThemeBroadcaster } from "./useThemeBroadcaster";
import { useThemeSync } from "./useThemeSync";



export default function Home() {
    useThemeBroadcaster(); // ✅ broadcast to parent
  useThemeSync(); 
  const dispatch = useAppDispatch()
  const { themeColor } = useAppSelector(store => store.theme)

  function getRandomHexColor(): string {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <button style={{
          backgroundColor: themeColor || 'pink',
          padding: "10px"
        }} onClick={() => {
          let randomColor = getRandomHexColor()
          dispatch(setThemeColor(randomColor)
          )
        }}>
          Change Theme to Blue
        </button>   
      </main>
 
    </div>
  );
}
