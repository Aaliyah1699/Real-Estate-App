import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';

const SignUp = () => {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);

            // Send to api
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            console.log(data);
            if (data.success === false) {
                setLoading(false);
                setError(data.message);
                return;
            }
            setLoading(false);
            setError(null);
            navigate('/sign-in');
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };

    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-4xl text-center font-bold my-7 title-font '>
                Sign Up
            </h1>
            {/* Form */}
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                {/* Input */}
                <input
                    type='text'
                    placeholder='Username'
                    className='border p-3 rounded-lg'
                    id='username'
                    onChange={handleChange}
                />
                <input
                    type='email'
                    placeholder='Email'
                    className='border p-3 rounded-lg'
                    id='email'
                    onChange={handleChange}
                />
                <input
                    type='password'
                    placeholder='Password'
                    className='border p-3 rounded-lg'
                    id='password'
                    onChange={handleChange}
                />

                {/* Button */}
                <button
                    className='bg-gray-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Sign Up'}
                </button>
                {/* Sign up with google */}
                <OAuth />
            </form>

            {/* Sign In */}
            <div className='flex gap-2 mt-5'>
                <p className=''>Have an account?</p>
                <Link to='/sign-in'>
                    <span className='text-sky-950'>Sign In</span>
                </Link>
            </div>
            {/* Error */}
            {error && <p className='text-red-600 mt-5'>{error}</p>}
        </div>
    );
};

export default SignUp;
