// apps/web/hooks/useThemeSync.ts or apps/docs/hooks/useThemeSync.ts
'use client'
import { useEffect } from "react";
import { useAppDispatch } from "store";
import { setWholeTheme } from "store";

export const useThemeSync = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const listener = (event: MessageEvent) => {
      if (event.data?.type === 'SYNC_THEME') {
        dispatch(setWholeTheme(event.data.payload));
      }
    };

    window.addEventListener('message', listener);
    return () => window.removeEventListener('message', listener);
  }, [dispatch]);
};
