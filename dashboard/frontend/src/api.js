import axios from "axios";

const API = "http://localhost:5000/api";

export const fetchPrices = (start, end) =>
  axios.get(`${API}/prices`, { params: { start, end } });

export const fetchEvents = () =>
  axios.get(`${API}/events`);

export const fetchChangePoints = () =>
  axios.get(`${API}/change-points`);
