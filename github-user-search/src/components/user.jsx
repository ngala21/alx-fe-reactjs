import React, { useState } from 'react';
import { fetchGitHubUser } from '../services/githubApi';

const User = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchGitHubUser(username);
      setUserData(data);
    } catch (error) {
      console.error('Error fetching the user data:', error);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Enter GitHub username" 
      />
      <button onClick={handleSearch}>Search</button>

      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
        </div>
      )}
    </div>
  );
};

export default User;
