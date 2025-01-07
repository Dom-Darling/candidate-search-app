import React from 'react';
import CandidateCard from './CandidateCard';
import NoMoreCandidates from './NoMoreCandidates';
import useCandidates from '../hooks/useCandidates';

const CandidateList: React.FC = () => {
  const { candidates, currentIndex, acceptCandidate, rejectCandidate, hasMoreCandidates } = useCandidates();

  const handleAccept = () => {
    acceptCandidate(currentIndex);
  };

  const handleReject = () => {
    rejectCandidate(currentIndex);
  };

  if (!hasMoreCandidates) {
    return <NoMoreCandidates />;
  }

  return (
    <div>
      <CandidateCard candidate={candidates[currentIndex]} />
      <div>
        <button onClick={handleAccept}>+</button>
        <button onClick={handleReject}>-</button>
      </div>
    </div>
  );
};

export default CandidateList;