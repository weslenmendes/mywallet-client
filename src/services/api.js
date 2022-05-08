import axios from "axios";

const BASE_URL = "https://api-mywalletproject.herokuapp.com";

export function createConfig(token) {
  return { headers: { authorization: `Bearer ${token}` } };
}

export async function singIn(data) {
  try {
    return await axios.post(`${BASE_URL}/`, data);
  } catch (e) {
    console.error(e);
  }
}
