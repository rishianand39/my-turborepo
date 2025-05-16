'use client';

import { useEffect, useState } from 'react';
import styles from "./page.module.css";

export default function Home() {
  const [controllerUrl, setControllerUrl] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');

  useEffect(() => {
    const isLocal = window.location.hostname === 'localhost';
    const controllerUrl = process.env.NEXT_PUBLIC_CONTROLLER_URL!;
    const previewUrl = process.env.NEXT_PUBLIC_PREVIEW_URL!;
    setControllerUrl(
      isLocal
        ? 'http://localhost:3001'
        : controllerUrl
    );
    setPreviewUrl(
      isLocal
        ? 'http://localhost:3000'
        : previewUrl
    );
  }, []);

  useEffect(() => {
    window.addEventListener('message', (event) => {
      if (event.data?.type === 'UPDATE_THEME') {
        const theme = event.data.payload;

        // Broadcast to all iframes
        document.querySelectorAll('iframe').forEach((iframe) => {
          iframe.contentWindow?.postMessage({
            type: 'SYNC_THEME',
            payload: theme,
          }, '*');
        });
      }
    });
  }, []);

  if (!controllerUrl || !previewUrl) return null; // Avoid SSR mismatch or hydration errors

  return (
    <div className={styles.left}>
      <iframe src={controllerUrl} style={{
        height: '100vh'
      }} />
      <iframe src={previewUrl} style={{
        height: '100vh'
      }} />
    </div>
  );
}
