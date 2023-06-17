import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../../../config/variables-env";

export const signUpFetch = createAsyncThunk("signup/signUpFetch", async ({ email, password }) => {
    try {
        console.log(email, password);

        const res = await axios.post(`${API_URL}reg/api/v1/register/ `, {
            email, password
        })


        return await res.data
    } catch (error) {
        return error

    }
})