import React, { useEffect, useState } from 'react';
import './SavedCandidatesPage.css';

const SavedCandidatesPage: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<any[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(saved);
  }, []);

  if (savedCandidates.length === 0) {
    return <div className="empty-state">🕵️‍♂️ No saved candidates.</div>;
  }

  return (
    <div className="saved-candidates-page">
      <h1>Reviewing tech talent, one profile at a time!</h1>
      {savedCandidates.map(candidate => (
        <div key={candidate.login} className="candidate-card">
          <div className={`avatar ${candidate.location.toLowerCase()}`}>
            <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`} />
            <span className="badge">★</span>
          </div>
          <h2>{candidate.name}</h2>
          <p>Username: {candidate.login}</p>
          <p>Location: {candidate.location}</p>
          <p>Email: {candidate.email}</p>
          <p>Company: {candidate.company}</p>
          <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          <div className="buttons">
            <button className="accept">+</button>
            <button className="reject">-</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedCandidatesPage;