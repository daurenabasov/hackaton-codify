import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../../../config/variables-env";

export const signInFetch = createAsyncThunk("login/signInFetch", async ({ email, password }) => {
    try {
        const res = await axios.post(`${API_URL}reg/api/v1/login/`, {
            email, password
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            }
        })
        const { token, userData, message } = res.data
        return { token, userData, message }
    } catch (error) {
        return console.log(error);
    }
})