import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserData() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getDataFromDatabase = () => {
        axios.get('http://localhost:1879/userData'
        ).then(data => {
            console.log(data, "came from user data...")
        })
    }

    // setInterval(() => getDataFromDatabase(), 1000)

    useEffect(() => {
        getDataFromDatabase();
    }, [])

    return (
        <div className='container'>
            <table className="table table-hover my-4">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col" className='w-15'>
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
                    <tr>
                        <th scope="row">
                            <input type="checkbox" name="" id="" />
                        </th>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <td>lastseen</td>
                        <td>registered</td>
                        <td>Active</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

export default UserData;