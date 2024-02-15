import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsSearchHeart } from 'react-icons/bs';
import { BiBuildingHouse } from 'react-icons/bi';

const Header = () => {
    const { currentUser } = useSelector((state) => state.user);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('searchTerm', searchTerm);
        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        if (searchTermFromUrl) {
            setSearchTerm(searchTermFromUrl);
        }
    }, [location.search]);
    return (
        <header className='bg-gray-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                {/* Logo */}
                <Link to='/'>
                    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap logo-font'>
                        <BiBuildingHouse className='text-gray-800' />
                        <span className='text-fuchsia-500 mt-1'>Realty</span>
                        <span className='text-gray-700 mt-1'>Rise</span>
                    </h1>
                </Link>
                {/* Search */}
                <form
                    onSubmit={handleSubmit}
                    className='bg-gray-100 p-3 rounded-lg flex items-center'
                >
                    <input
                        type='text'
                        placeholder='Search...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='bg-transparent focus:outline-none w-24 sm:w-64'
                    />
                    <button>
                        <BsSearchHeart className='text-gray-700' />
                    </button>
                </form>
                {/* Header Links */}
                <ul className='flex gap-4'>
                    <Link to='/'>
                        <li className='hidden sm:inline text-gray-700 hover:underline'>
                            Home
                        </li>
                    </Link>

                    <Link to='/about'>
                        <li className='hidden sm:inline text-gray-700 hover:underline'>
                            About
                        </li>
                    </Link>

                    <Link to='/profile'>
                        {currentUser ? (
                            <img
                                className='rounded-full h-8 w-8 object-cover'
                                src={currentUser.avatar}
                                alt='profile'
                            />
                        ) : (
                            <li className=' text-fuchsia-700 hover:underline'>
                                {' '}
                                Sign in
                            </li>
                        )}
                    </Link>
                </ul>
            </div>
        </header>
    );
};

export default Header;
