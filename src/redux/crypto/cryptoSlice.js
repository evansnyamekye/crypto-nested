import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cryptoData: [],
  isLoading: true,
  selectedCoin: null,
};

const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '18',
    offset: '0',
  },
  headers: {
    'X-RapidAPI-Key': 'd151e55606msheb247bbe0459faep193018jsn1d746aada157',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  },
};

export const fetchSingleCoin = createAsyncThunk(
  'coin/fetchSingleCoin',
  async (uuid, thunkAPI) => {
    try {
      const response = await axios.get(`https://coinranking1.p.rapidapi.com/coin/${uuid}`, options);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

export const fetchCoins = createAsyncThunk(
  'coin/fetchCoins',
  async (thunkAPI) => {
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cryptoData = action.payload.data.coins;
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchSingleCoin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSingleCoin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedCoin = action.payload.data.coin;
      })
      .addCase(fetchSingleCoin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: cryptoReducer } = cryptoSlice;

export default cryptoSlice.reducer;
