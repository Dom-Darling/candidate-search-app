import React from 'react';
import './CandidateCard.css';

interface CandidateCardProps {
  candidate: any;
  onAccept: () => void;
  onReject: () => void;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, onAccept, onReject }) => {
  return (
    <div className="candidate-card">
      <div className="avatar">
        <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`} />
      </div>
      <h2>{candidate.name}</h2>
      <p>Username: {candidate.login}</p>
      <p>Location: {candidate.location}</p>
      <p>Email: {candidate.email}</p>
      <p>Company: {candidate.company}</p>
      <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
      <div className="buttons">
        <button className="accept" onClick={onAccept}>+</button>
        <button className="reject" onClick={onReject}>-</button>
      </div>
    </div>
  );
};

export default CandidateCard;