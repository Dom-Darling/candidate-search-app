import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users';

const searchGithubUser = async (username: string) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/${username}`, {
      headers: {
        Authorization: `token ${process.env.VITE_GITHUB_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    return null;
  }
};

export default searchGithubUser;