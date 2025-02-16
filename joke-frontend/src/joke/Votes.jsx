import React from 'react';

function Votes({ votes, onVote }) {
  return (
    <div style={{ marginTop: '15px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
      {votes && votes.map((vote) => (
        <div
          key={vote.label}
          style={{
            cursor: 'pointer',
            fontSize: '1.5em',
            padding: '5px',
            borderRadius: '5px',
          }}
          onClick={() => onVote(vote.label)}
        >
          {vote.label} {vote.count}
        </div>
      ))}
    </div>
  );
}

export default Votes;