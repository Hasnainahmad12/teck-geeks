import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    admin: null,
};

const AdminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setAdmin: (state, action) => {
            state.admin = action.payload;
        },
        emptyAdmin: (state, action) => {
            state.admin = null;
        }
    },
});

export const { setAdmin, emptyAdmin } = AdminSlice.actions;

export default AdminSlice.reducer;

export const selectAdmin = (state) => state?.auth?.admin;
