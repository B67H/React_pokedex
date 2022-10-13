import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { POKEMON_IMAGE_TYPE } from "../Constants/index";

export type PokemonImageKeyType =
  typeof POKEMON_IMAGE_TYPE[keyof typeof POKEMON_IMAGE_TYPE];

export interface ImageTypeState {
  type: PokemonImageKeyType;
}

const initialState: ImageTypeState = {
  type: POKEMON_IMAGE_TYPE.OFFICIAL_ARTWORK,
};

export const imageTypeSlice = createSlice({
  // slice는 action + reducer
  name: "imageType",
  initialState, // 기본값 설정
  reducers: {
    changeImageType: (state, action: PayloadAction<ImageTypeState>) => {
      state.type = action.payload.type;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeImageType } = imageTypeSlice.actions;

export const imageTypeReducer = imageTypeSlice.reducer;
