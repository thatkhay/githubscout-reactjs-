import React, { useEffect, useState } from 'react'
import axios from 'axios';

function UserResults() {
const url = 'https://api.github.com'
const token = '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'
const [users, setUsers] = useState([])
   const [loading, setLoading] = useState(true)
useEffect(() => {
    
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${url}/users`, {
          headers: {
            Authorization: `token ${token}`
          }
        });
        console.log(response.data);
        setUsers(response.data);
        setLoading(false)

      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

if (!loading){
return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>{users.map((user) => (
        <h3 key={user.id}>{user.login}</h3>
    ))}</div>
  )
}else {
    return <h3>Loading...</h3>
}
  
}

export default UserResults