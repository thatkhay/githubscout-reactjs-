import { createContext, useState } from "react";
import axios from 'axios';

const GithubContext = createContext();
const url = 'https://api.github.com';
const token = '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';

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${url}/users`, {
        headers: {
          Authorization: `token ${token}`
        }
      });
      console.log(response.data);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  

  return (
    <GithubContext.Provider value={{ users, loading, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
