import { configureStore } from '@reduxjs/toolkit'
import clothesReducer from './components/clothesSlice'
import outfitReducer from './components/outfitSlice'
import generatorReducer from './components/generatorSlice';

export const store = configureStore({
  reducer: {
    clothes: clothesReducer,
    outfits: outfitReducer,
    generator: generatorReducer,
  },
});

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
