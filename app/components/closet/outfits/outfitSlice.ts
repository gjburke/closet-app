import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../store'
import { PieceType } from '../clothes/clothesSlice'

export interface OutfitType {
    name: string;
    pieces: Array<PieceType>;
};

export interface EditOutfitPayload {
    name: string;
    newOutfit: OutfitType;
}

interface OutfitState {
    outfits: Array<OutfitType>,
};

const initialState: OutfitState = {
    outfits: [],
};

export const outfitSlice = createSlice({
    name: 'outfits',
    initialState,
    reducers: {
        addOutfit: (state, action: PayloadAction<OutfitType>) => {
            state.outfits.push(action.payload);
        },
        editOutfit: (state, action: PayloadAction<EditOutfitPayload>) => {
            let indexToEdit = -1;

            for (let i = 0; i < state.outfits.length; i++) {
                if (state.outfits[i].name === action.payload.name) {
                    indexToEdit = i;
                    break;
                }
            }

            if (indexToEdit > -1) {
                state.outfits[indexToEdit] = action.payload.newOutfit;
            }
        },
    }
});

export const { addOutfit, editOutfit } = outfitSlice.actions;

export default outfitSlice.reducer;