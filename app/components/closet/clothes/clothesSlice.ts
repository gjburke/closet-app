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
            const edittedPiece = state.pieces.filter((piece) => piece.name === action.payload.name);
            if (edittedPiece.length > 0) {
                edittedPiece[0] = action.payload.newPiece;
            }
        },
    },
});

export const { addPiece, editPiece } = clothesSlice.actions;

export default clothesSlice.reducer;