import React, { useEffect, useState } from 'react'

const ListSection = () => {
const [user,setUser]= useState([])
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('https://dummyjson.com/users');
                const data = await response.json(); // Parse JSON response
                const shuffledUsers = data.users.sort(() => Math.random() - 0.5);
                setUser(shuffledUsers.slice(0,5))
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
    
        fetchUser(); // Call the function inside useEffect
    }, []);
    


  return (
    <div className='container-fluid p-4'>
        {user.map((user)=>(
            <div key={user.id} className="row">
            <div className="col-3 list-section-image">
                <img src={user.image}  />
            </div>
            <div className="col-9 d-flex flex-column justify-content-center align-items-start">
              <h5>{user.firstName}{user.lastName}</h5>
              <p>{user.phone}</p>
            </div>
          </div>
        ))}
      
    
    </div>
  )
}

export default ListSection
