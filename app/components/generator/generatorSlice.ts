import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PieceType } from '../closet/clothes/clothesSlice'

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
        deletePiece: (state, action: PayloadAction<string>) => {
            let indexToDelete = -1;

            for (let i = 0; i < state.pieces.length; i++) {
                if (state.pieces[i].name === action.payload) {
                    indexToDelete = i;
                    break;
                }
            }

            if (indexToDelete > -1) {
                state.pieces.splice(indexToDelete, 1);
            }
        },
        clear: (state) => {
            state.pieces = [];
        },
    }
});

export const { addPiece, deletePiece, clear } = generatorSlice.actions;

export default generatorSlice.reducer;