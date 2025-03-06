import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const signup = async (userData) => {
    return await axios.post(`${API_URL}/api/auth/signup/`, userData);
};

export const login = async (credentials) => {
    return await axios.post(`${API_URL}api/auth/login/`, credentials);
};

export const googleLogin = (token) => 
    axios.post(`${API_URL}api/auth/google/`, { access_token: token });
