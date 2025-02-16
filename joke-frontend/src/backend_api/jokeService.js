import { BACKEND_URL } from "../config";

export const fetchJoke = async () => {
  try {
    const response = await fetch(new URL("api/joke", BACKEND_URL));
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch joke:", error);
    throw error; // Re-throw the error so the component can handle it
  }
};