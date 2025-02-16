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

export const updateJokeVotes = async (id, emoji) => {
  try {
    const response = await fetch(new URL(`api/joke/${id}`, BACKEND_URL), {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ emoji }), // Send the selected emoji to the backend
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Assuming the backend returns the updated joke
    return data;
  } catch (error) {
    console.error("Failed to update votes:", error);
    throw error;
  }
};