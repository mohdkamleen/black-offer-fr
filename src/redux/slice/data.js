import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';  
import axios from '../../axios/index';

export const authenticateUser = createAsyncThunk(
    'auth/authenticateUser',
    async (payload, { rejectWithValue }) => {
        const { method, endpoint, data } = payload;
        try {
            const res = await axios[method](`${endpoint}`, data && { ...data });
            res.data?.message && alert(res.data?.message);
            return res.data;
        } catch (error) {
            if (!error.response) throw error;
             alert(error.response.data.message);
            return rejectWithValue(error.response.data);
        }
    }
);

const initialState = {
    loading: false,
    data: null
};

export const dataSlice = createSlice({
    name: 'Authentication',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
            .addCase(authenticateUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(authenticateUser.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload || null;

            })
            .addCase(authenticateUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
            });
    },
});

export const FetchData = (data) => authenticateUser({ method: 'get', endpoint: '/', data }); 

export default dataSlice.reducer;  
export const {  } = dataSlice.actions