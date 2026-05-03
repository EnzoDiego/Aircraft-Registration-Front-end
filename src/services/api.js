import axios from "axios";

const API = "http://localhost:8080/aeronaves";

export const getAeronaves = () => axios.get(API);

export const createAeronave = (data) => axios.post(API, data);

export const updateAeronave = (id, data) =>
  axios.put(`${API}/${id}`, data);

export const deleteAeronave = (id) =>
  axios.delete(`${API}/${id}`);