import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../store'

export interface PieceType {
    name: string;
    type: string; 
    size: string;
    color: string;
};

interface ClothesState {
    pieces: Array<PieceType>,
};

const initialState: ClothesState = {
    pieces: [],
};

export const clothesSlice = createSlice({
    name: 'clothes',
    initialState,
    reducers: {
        addPiece: (state, action: PayloadAction<PieceType>) => {
            state.pieces.push(action.payload)
        },
    },
});

export const { addPiece } = clothesSlice.actions;

export default clothesSlice.reducer;