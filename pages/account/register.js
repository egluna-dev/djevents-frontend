import Layout from '@/components/Layout';
import Link from 'next/link';
import styles from '@/styles/AuthForm.module.css';
import { FaUser } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect, useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';

export default function registerPage() {
    const [username, setUsername ] = useState('');
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const [passwordConfirm, setPasswordConfirm ] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        
        if(password !== passwordConfirm) {
            toast.error('Passwords do not match!')
            return
        }

        console.log({username, password})
    }

    return (
        <Layout title='User Registration'>
            <div className={styles.auth}>
                <h1>
                    <FaUser /> Register
                </h1>
                <ToastContainer />
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input
                            type='text' 
                            id='username' 
                            value={username} 
                            onChange={event => setUsername(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Email Address</label>
                        <input 
                            type='email' 
                            id='email' 
                            value={email} 
                            onChange={event => setEmail(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input 
                            type='password' 
                            id='password' 
                            value={password} 
                            onChange={event => setPassword(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='passwordConfirm'>Confirm Password</label>
                        <input 
                            type='password' 
                            id='passwordConfirm' 
                            value={passwordConfirm} 
                            onChange={event => setPasswordConfirm(event.target.value)}
                        />
                    </div>
                    <input type='submit' value='login' className='btn'/>
                </form>
                <p>Already have an account? &nbsp;<Link href='/account/login'>Log In Here</Link></p>
            </div>
        </Layout>
    )
}
