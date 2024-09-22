import React, {useState} from 'react';
import fetchUserData from '../services/githubService';

const Search =() => {
  const [username, setUsername] =useState ('');
  const [userData, setUserData] = useState(null);
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] =useState([]);
  const [error, setError] =useState ('');
  const handleSubmit = async(e) =>{
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData(null);

   
    try {
        const response = await axios.get(`https://api.github.com/search/users`, {
          params: {
            q: `${username} location:${location} repos:>=${minRepos}`,
          },
        });
      
         setResults(users);

        if (response.data.items.length > 0) {
          setUserData(response.data.items[0]);
        } else {
          setError('No users found');
          setUserData(null);
        }
      } catch (err) {
        setError('Failed to fetch user data');
        setUserData(null);
      } finally {
        setLoading(false);
      }
  
  };


return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
    <h1 className="text-2xl font-semibold text-red-500 mb-4">GitHub User Search</h1>

     <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
     <div className="mb-4">
        <label htmlFor="minRepos" className="block text-gray-700 text-sm font-bold mb-2">
            User Name
          </label>
         <input
              type="text"
              name="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter username"
         />

         </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
            Location
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter location (optional)"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="minRepos" className="block text-gray-700 text-sm font-bold mb-2">
            Minimum Repositories
          </label>
          <input
            id="minRepos"
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter minimum number of repositories (optional)"
          />
        </div>


        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
     </form>

       
      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the user</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
          <p>Name: {userData.name}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}

<div>
        {results.length > 0 ? (
          <ul className="space-y-4">
            {results.map((user) => (
              <li key={user.id} className="border p-4 rounded shadow">
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {user.login}
                </a>
                <p>ID: {user.id}</p>
                <p>Type: {user.type}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>


     </div>
);

};

export default Search;
