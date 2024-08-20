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
            for (let i = 0; i < state.pieces.length; i++) {
                if (state.pieces[i].name === action.payload.name) {
                    return;
                }
            }
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
        setPieces: (state, action: PayloadAction<PieceType[]>) => {
           state.pieces = action.payload; 
        }
    }
});

export const { addPiece, deletePiece, clear, setPieces } = generatorSlice.actions;

export default generatorSlice.reducer;