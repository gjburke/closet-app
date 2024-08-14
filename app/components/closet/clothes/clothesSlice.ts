import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../store'

export interface PieceType {
    name: string;
    type: string; 
    size: string;
    color: string;
    image_uri?: string;
};

export interface EditPiecePayload {
    name: string;
    newPiece: PieceType;
}

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
        editPiece: (state, action: PayloadAction<EditPiecePayload>) => {
            let indexToEdit = -1;

            for (let i = 0; i < state.pieces.length; i++) {
                if (state.pieces[i].name === action.payload.name) {
                    indexToEdit = i;
                    break;
                }
            }

            if (indexToEdit > -1) {
                state.pieces[indexToEdit] = action.payload.newPiece;
            }
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
        }
    },
});

export const { addPiece, editPiece, deletePiece } = clothesSlice.actions;

export default clothesSlice.reducer;