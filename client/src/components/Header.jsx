import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
import { BsSearchHeart } from 'react-icons/bs';

const Header = () => {
    return (
        <header className='bg-gray-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                {/* Logo */}
                <Link to='/'>
                    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap logo-font'>
                        <span className='text-gray-500'>Realty</span>
                        <span className='text-gray-700'>Rise</span>
                    </h1>
                </Link>
                {/* Search */}
                <form className='bg-gray-100 p-3 rounded-lg flex items-center'>
                    <input
                        type='text'
                        placeholder='Search...'
                        className='bg-transparent focus:outline-none w-24 sm:w-64'
                    />
                    <button>
                        <BsSearchHeart className='text-gray-600' />
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
                        {/* <img className=''/> */}
                        <li className='text-gray-700 hover:underline'>
                            Sign In
                        </li>
                    </Link>
                </ul>
            </div>
        </header>
    );
};

export default Header;
