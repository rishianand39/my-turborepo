'use client'
import styles from "./page.module.css";
import { setThemeColor, useAppDispatch, useAppSelector } from "store";
import { useThemeBroadcaster } from "./seThemeBroadcaster";
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
        <button onClick={() => {
          let randomColor = getRandomHexColor()
          dispatch(setThemeColor(randomColor)
          )
        }}
          style={{
            backgroundColor: themeColor,
            border: '1px solid red',
            padding : '5px'
          }}>change teme</button>

      </main>

    </div>
  );
}
