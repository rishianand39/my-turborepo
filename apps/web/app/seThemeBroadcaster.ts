// apps/web/hooks/useThemeBroadcaster.ts or apps/docs/hooks/useThemeBroadcaster.ts
'use client'
import { store } from 'store';
import { useEffect } from 'react';
import isEqual from 'lodash.isequal'; // install with `npm i lodash.isequal`

let prevTheme = store.getState().theme;

export const useThemeBroadcaster = () => {
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const currentTheme = store.getState().theme;

      if (!isEqual(currentTheme, prevTheme)) {
        prevTheme = currentTheme;
        window.parent.postMessage({
          type: 'UPDATE_THEME',
          payload: currentTheme
        }, '*');
      }
    });

    return () => unsubscribe();
  }, []);
};
