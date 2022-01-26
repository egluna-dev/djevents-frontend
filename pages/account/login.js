import Layout from '@/components/Layout';
import Link from 'next/link';
import styles from '@/styles/AuthForm.module.css';
import { FaUser } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect, useContext } from 'react';
import AuthContext from '@/context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';

export default function loginPage() {
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');

    const {login, error} = useContext(AuthContext);

    useEffect(() => error && toast.error(error))

    const handleSubmit = event => {
        event.preventDefault();
        login({email, password})
    }

    return (
        <Layout title='User Login'>
            <div className={styles.auth}>
            <h1>
                <FaUser /> Log In
            </h1>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
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
                <input type='submit' value='login' className='btn'/>
            </form>
            <p>Don&apos;t have an account? &nbsp;<Link href='/account/register'>Register here.</Link></p>
            </div>
            
        </Layout>
    )
}
