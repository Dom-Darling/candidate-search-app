import React, { useState, useEffect } from 'react';
import CandidateCard from '../components/CandidateCard';
import NoMoreCandidates from '../components/NoMoreCandidates';
//import searchGithubUser from '../services/github';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [candidates, setCandidates] = useState<any[]>([]);
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);

  useEffect(() => {
    const fetchCandidates = async () => {
      const usernames = ['octocat', 'torvalds', 'gaearon']; // Example usernames
      const fetchedCandidates = await Promise.all(usernames.map(username => searchGithubUser(username)));
      setCandidates(fetchedCandidates);
    };

    fetchCandidates();
  }, []);

  const handleAccept = () => {
    const candidate = candidates[currentCandidateIndex];
    const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    savedCandidates.push(candidate);
    localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
    loadNextCandidate();
  };

  const handleReject = () => {
    loadNextCandidate();
  };

  const loadNextCandidate = () => {
    if (currentCandidateIndex < candidates.length - 1) {
      setCurrentCandidateIndex(currentCandidateIndex + 1);
    } else {
      setCurrentCandidateIndex(-1); // No more candidates
    }
  };

  if (currentCandidateIndex === -1) {
    return <NoMoreCandidates />;
  }

  const currentCandidate = candidates[currentCandidateIndex];

  return (
    <div className="home-page">
      {currentCandidate && (
        <CandidateCard
          candidate={currentCandidate}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      )}
    </div>
  );
};

export default HomePage;