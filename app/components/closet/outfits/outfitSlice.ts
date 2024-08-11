import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../store'
import { PieceType } from '../clothes/clothesSlice'

export interface OutfitType {
    name: string;
    pieces: Array<PieceType>;
};

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
        }
    }
});

export const { addOutfit } = outfitSlice.actions;

export default outfitSlice.reducer;