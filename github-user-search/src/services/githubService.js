import axios from 'axios';

const buildQuery = ({ username, location, minRepos }) => {
    let query = username ? `${username}` : '';
  
    if (location) {
      query += `+location:${location}`;
    }
    
    if (minRepos) {
      query += `+repos:>${minRepos}`;
    }
  
    return query;
  };
  

const fetchUserData = async ({username, location, minRepos}) => {
    const query = buildQuery({ username, location, minRepos});
    try {
    const response = await axios.get("https://api.github.com/search/users?q");
    return response.data.items;
    } catch(error) {
        console.error('Error fetching GitHub users:',error);
        throw error;
    }
};

export default fetchUserData;