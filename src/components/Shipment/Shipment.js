import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();
    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const haldleNameBlur = event => {
        setEmail(event.target.value);
    }
    const handlePAddressBlur = event => {
        setAddress(event.target.value);
    }
    const handlePhoneNumberdBlur = event => {
        setPhone(event.target.value);
    }
    const handleCreateUser = event => {
        event.preventDefault();

    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Shipping Information</h1>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={haldleNameBlur} type="text" name='name' id required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name='email' id required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Password</label>
                        <input onBlur={handlePAddressBlur} type="text" name='address' id='' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhoneNumberdBlur} type="text" name='phone' id='' required />
                    </div>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                    <p style={{ color: 'red' }}>{error}</p>
                </form>
            </div>
        </div>
    );
};

export default Shipment;