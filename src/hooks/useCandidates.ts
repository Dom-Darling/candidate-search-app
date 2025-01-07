import { useEffect, useState } from 'react';
import { Candidate } from '../types';

const useCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [acceptedCandidates, setAcceptedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      // Fetch candidates from an API or a local source
      const response = await fetch('/path/to/candidates'); // Replace with actual API endpoint
      const data = await response.json();
      setCandidates(data);
    };

    fetchCandidates();
  }, []);

  const acceptCandidate = () => {
    if (candidates[currentIndex]) {
      setAcceptedCandidates([...acceptedCandidates, candidates[currentIndex]]);
      loadNextCandidate();
    }
  };

  const rejectCandidate = () => {
    loadNextCandidate();
  };

  const loadNextCandidate = () => {
    if (currentIndex < candidates.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const saveAcceptedCandidates = () => {
    localStorage.setItem('acceptedCandidates', JSON.stringify(acceptedCandidates));
  };

  useEffect(() => {
    saveAcceptedCandidates();
  }, [acceptedCandidates]);

  return {
    currentCandidate: candidates[currentIndex],
    acceptCandidate,
    rejectCandidate,
    hasMoreCandidates: currentIndex < candidates.length - 1,
  };
};

export default useCandidates;