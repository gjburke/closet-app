import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PieceType } from './clothesSlice'

interface GeneratorState {
    pieces: Array<PieceType>,
};

const initialState: GeneratorState = {
    pieces: [],
};

export const generatorSlice = createSlice({
    name: 'generator',
    initialState,
    reducers: {
        addPiece: (state, action: PayloadAction<PieceType>) => {
            state.pieces.push(action.payload);
        },
        clear: (state) => {
            state.pieces = [];
        },
    }
});

export const { addPiece, clear } = generatorSlice.actions;

export default generatorSlice.reducer;