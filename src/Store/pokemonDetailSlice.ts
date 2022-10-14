import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import {
  fetchPokemonDetailAPI,
  PokemonDetailType,
} from "../Service/pokemonService";

export const fetchPokemonDetail = createAsyncThunk(
  "pokemon/fetchPokemonDetail",
  async (name: string) => {
    const response = await fetchPokemonDetailAPI(name);
    return response;
  },
  {
    condition: (name, { getState }) => { // return값이 false일 때, fetch요청을 다시 보내지 않음 => 이미 불러와진 정보를 또 요청하지 않도록 해줌 
      const { pokemonDetail } = getState() as RootState;
      const pokemon = pokemonDetail.pokemonDetails[name];
      return !pokemon;
    },
  }
);

interface PokemonDetailState {
  pokemonDetails: Record<string, PokemonDetailType>;
}

const initialState = {
  pokemonDetails: {},
} as PokemonDetailState;

const pokemonDetailSlice = createSlice({
  name: "pokemonDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(
      fetchPokemonDetail.fulfilled,
      (state, action: PayloadAction<PokemonDetailType>) => {
        state.pokemonDetails = {
          ...state.pokemonDetails,
          [action.payload.name]: action.payload,
        };
      }
    );
  },
});

export const pokemonDetailReducer = pokemonDetailSlice.reducer;
