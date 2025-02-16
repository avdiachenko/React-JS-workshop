import React, { useState, useEffect, useCallback } from 'react';
import * as JokeService from '../backend_api/jokeService';
import Votes from './Votes';

function JokeDisplay() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [jokeCount, setJokeCount] = useState(0); // Track the number of jokes fetched

  // useCallback to memoize the fetchJoke function
  const fetchJoke = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await JokeService.fetchJoke(); // Use the imported function
      setJoke(data);
      setJokeCount(prevCount => prevCount + 1);
    } catch (e) {
      setError(e.message);
      console.error("Failed to fetch joke:", e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchJoke(); // Initial fetch when the component mounts
  }, [fetchJoke]); // Dependency array includes fetchJoke

  const handleNextJoke = () => {
    fetchJoke(); // Fetch a new joke when the button is clicked
  };

  const handleVote = async (emoji) => {
    if (!joke || !joke._id) {
      console.warn("Joke or joke ID is missing.");
      return;
    }

    try {
      const updatedJoke = await JokeService.updateJokeVotes(joke._id, emoji);
      setJoke(updatedJoke); // Update the joke with the new vote counts
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading joke...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!joke) {
    return <div>No joke to display.</div>;
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px', margin: '20px auto' }}>
      <h2 style={{ color: '#9a9', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>Joke #{jokeCount}</h2>
      <p style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#555' }}>Question: {joke.question}</p>
      <p style={{ fontSize: '1.1em', color: '#777' }}>Answer: {joke.answer}</p>
      <Votes votes={joke.votes} onVote={handleVote} />
      <button onClick={handleNextJoke} style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Next Joke
      </button>
    </div>
  );
}

export default JokeDisplay;