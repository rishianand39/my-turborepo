import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  themeColor: 'pink',
  // other deeply nested values if any...
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeColor: (state, action: PayloadAction<string>) => {
      state.themeColor = action.payload;
    },
    setWholeTheme: (_, action: PayloadAction<typeof initialState>) => {
      return action.payload;
    }
  }
});

export const { setThemeColor, setWholeTheme } = themeSlice.actions;
export default themeSlice.reducer;
