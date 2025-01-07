const fetchCandidates = async () => {
  try {
    const response = await fetch('https://api.example.com/candidates'); // Replace with actual API endpoint
    if (!response.ok) {
      throw new Error('Failed to fetch candidates');
    }
    const candidates = await response.json();
    return candidates;
  } catch (error) {
    console.error('Error fetching candidates:', error);
    return [];
  }
};

export { fetchCandidates };