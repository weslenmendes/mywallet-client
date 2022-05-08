import axios from "axios";

const BASE_URL = "https://api-mywalletproject.herokuapp.com";

export function createConfig(token) {
  return { headers: { authorization: `Bearer ${token}` } };
}

export async function signIn(data) {
  try {
    return await axios.post(`${BASE_URL}/`, data);
  } catch (e) {
    console.error(e.response.data);
  }
}

export async function signUp(data) {
  try {
    return await axios.post(`${BASE_URL}/sign-up`, data);
  } catch (e) {
    console.error(e.response.data);
  }
}
