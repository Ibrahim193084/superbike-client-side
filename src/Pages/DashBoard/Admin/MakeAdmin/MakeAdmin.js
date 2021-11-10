import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const handleEmail = e =>{
        
        const adminEmail= e.target.value
        setEmail(adminEmail)
    }
    const handleAdmin = e =>{
        const user = { email };
        fetch('https://arcane-hamlet-67437.herokuapp.com/user/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount>0) {
                    // console.log(data);
                    alert('Admin make successfully')
                }
            })

        e.preventDefault()
    }
    return (
        <div className="text-center mt-5">
            <h2 className="text-primary">
                Make An Admin
            </h2>
            <form onSubmit={handleAdmin}>
                <input className="p-1 w-50" onBlur={handleEmail} type="email" label="email" />
                <input className='btn btn-primary ms-2' type="submit" value="Make Admin" />

            </form>
        </div>
    );
};

export default MakeAdmin;