/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListingItem from '../components/ListingItem';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';


const Home = () => {
    const [offerListings, setOfferListings] = useState([]);
    const [saleListings, setSaleListings] = useState([]);
    const [rentListings, setRentListings] = useState([]);
    SwiperCore.use([Navigation]);

    useEffect(() => {
        const fetchOfferListings = async () => {
            try {
                const res = await fetch('/api/listing/get?offer=true&limit=3');
                const data = await res.json();
                setOfferListings(data);
                fetchRentListings();
            } catch (error) {
                console.log(error);
            }
        };

        const fetchRentListings = async () => {
            try {
                const res = await fetch('/api/listing/get?type=rent&limit=3');
                const data = await res.json();
                setRentListings(data);
                fetchSaleListings();
            } catch (error) {
                console.log(error);
            }
        };

        const fetchSaleListings = async () => {
            try {
                const res = await fetch('/api/listing/get?type=sale&limit=3');
                const data = await res.json();
                setSaleListings(data);
            } catch (error) {
                log(error);
            }
        };
        fetchOfferListings();
    }, []);
    return (
        <div>
            {/* top */}
            <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
                <h1 className='text-gray-700 font-bold text-3xl lg:text-5xl title-font'>
                    Discover your{' '}
                    <span className='text-fuchsia-500'>dream </span>
                    <br />
                    home effortlessly
                </h1>
                <div className='text-gray-500 text-md sm:text-md'>
                    Whether seeking a cozy apartment, a spacious house, or a
                    luxurious villa, our listings cover it all.
                    <br />
                    Explore our diverse selection of properties and embark on
                    your journey to find the perfect place to call home.
                </div>
                <Link
                    to={'/search'}
                    className='text-lg sm:text-md text-fuchsia-800 font-bold hover:underline'
                >
                    Begin your search today...
                </Link>
            </div>

            <div className='img'></div>

            {/* swiper */}
            {/* <Swiper navigation>
                {offerListings &&
                    offerListings.length > 0 &&
                    offerListings.map((listing) => (
                        <SwiperSlide>
                            <div
                                key={listing._id}
                                style={{
                                    background: `url(${listing.imageUrls[0]}) center no-repeat`,
                                    backgroundSize: 'cover',
                                }}
                                className='h-[500px]'
                            ></div>
                        </SwiperSlide>
                    ))}
            </Swiper> */}

            {/* listing results for offer, sale and rent */}

            <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
                {offerListings && offerListings.length > 0 && (
                    <div className=''>
                        <div className='my-3'>
                            <h2 className='text-2xl font-semibold text-gray-600'>
                                Recent offers
                            </h2>
                            <Link
                                className='text-md text-fuchsia-800 hover:underline'
                                to={'/search?offer=true'}
                            >
                                Show more offers
                            </Link>
                        </div>
                        <div className='flex flex-wrap gap-4'>
                            {offerListings.map((listing) => (
                                <ListingItem
                                    listing={listing}
                                    key={listing._id}
                                />
                            ))}
                        </div>
                    </div>
                )}
                {/* rent */}
                {rentListings && rentListings.length > 0 && (
                    <div className=''>
                        <div className='my-3'>
                            <h2 className='text-2xl font-semibold text-gray-600'>
                                Recent places for rent
                            </h2>
                            <Link
                                className='text-md text-fuchsia-800 hover:underline'
                                to={'/search?type=rent'}
                            >
                                Show more places for rent
                            </Link>
                        </div>
                        <div className='flex flex-wrap gap-4'>
                            {rentListings.map((listing) => (
                                <ListingItem
                                    listing={listing}
                                    key={listing._id}
                                />
                            ))}
                        </div>
                    </div>
                )}
                {/* sale */}
                {saleListings && saleListings.length > 0 && (
                    <div className=''>
                        <div className='my-3'>
                            <h2 className='text-2xl font-semibold text-gray-600'>
                                Recent places for sale
                            </h2>
                            <Link
                                className='text-md text-fuchsia-800 hover:underline'
                                to={'/search?type=sale'}
                            >
                                Show more places for sale
                            </Link>
                        </div>
                        <div className='flex flex-wrap gap-4'>
                            {saleListings.map((listing) => (
                                <ListingItem
                                    listing={listing}
                                    key={listing._id}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
