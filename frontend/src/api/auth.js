import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api/auth/";
const apiUrl = process.env.REACT_APP_API_URL;

export const obtainToken = async (username, password) => {
  const response = await fetch(`${apiUrl}/api/token/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  return await response.json();
};

export const refreshToken = async (refresh) => {
  const response = await fetch(`${apiUrl}/api/token/refresh/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refresh }),
  });
  return await response.json();
};

export const registerUser = async (username, email, password1) => {
  const response = await fetch(`${apiUrl}/api/auth/registration/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password1}),
  });
  return await response.json();
};

export const loginUser = async (username, password) => {
  const response = await fetch(`${apiUrl}/api/auth/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  return await response.json();
};

export const fetchTransactions = async (accessToken) => {
  const response = await fetch(`${apiUrl}/api/transactions/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
  });
  return await response.json();
};

export const fetchGoals = async (accessToken) => {
  const response = await fetch(`${apiUrl}/api/goals/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
  });
  return await response.json();
};

export const fetchExpenseSplits = async (accessToken) => {
  const response = await fetch(`${apiUrl}/api/expensesplit/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
  });
  return await response.json();
};

export const fetchDues = async (accessToken) => {
  const response = await fetch(`${apiUrl}/api/dues/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
  });
  return await response.json();
};

export const fetchLoans = async (accessToken) => {
  const response = await fetch(`${apiUrl}/api/loans/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
  });
  return await response.json();
};

export const fetchAuthorizedUser = async (accessToken) => {
  const response = await fetch(`${apiUrl}/api/users/authorized/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
  });
  return await response.json();
};

export const getGoogleAuthUrl = () => {
  return `${apiUrl}/api/auth/google/`;
};

export const signup = async (userData) => {
    return await axios.post(`${apiUrl}signup/`, userData);
};

export const login = async (credentials) => {
    return await axios.post(`${apiUrl}login/`, credentials);
};

export const googleLogin = (token) => axios.post(`${apiUrl}google/`, { access_token: token });
