import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

function UserData({isAuth, setIsAuth}) {
    console.log(isAuth)
    const [users, setUsers] = useState([]);

    const getDataFromDatabase = () => {
        axios.get('http://localhost:1879/userData'
        ).then(data => {
            console.log(data.data, "came from user data...")
            setUsers(data.data)
        })
    }

    // setInterval(() => getDataFromDatabase(), 1000)

    useEffect(() => {
        getDataFromDatabase();
    }, [])

    if(!isAuth)
        return (
            <div className='container'>
                {users.length > 0 ?    
                    <table className="table table-hover my-4 border">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">
                                    <input type="checkbox" name="" id="all" />
                                </th>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Last Seen</th>
                                <th scope="col">Reg. time</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => 
                                <tr key={user}>
                                    <td>
                                        <input type="checkbox" name="" id="" />
                                    </td>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>last seen</td>
                                    <td>{user.registrationTime}</td>
                                    <td>{user.status} </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    : <h1>No users in database</h1>
                }
            </div>
        ) 
    else {
        return(<>
            <h1>ERROR 403! Forbidden access</h1>
            <Link to='/'>
                <button className="btn btn-primary">Go Home</button>
            </Link>
        </>)
    }
}

export default UserData;