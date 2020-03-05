import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    // baseURL: 'https://alans-app.herokuapp.com/api/adv',
    baseURL: 'http://localhost:8000/api/adv',
    headers: {
      Authorization: `Token ${token}`
    }
  });
};
