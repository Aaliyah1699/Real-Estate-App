import { Link } from 'react-router-dom';
import { TiLocationOutline } from 'react-icons/ti';

const ListingItem = ({ listing }) => {
    return (
        <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
            <Link to={`/listing/${listing._id}`}>
                <img
                    src={
                        listing.imageUrls[0] ||
                        'https://images.pexels.com/photos/8482511/pexels-photo-8482511.jpeg?auto=compress&cs=tinysrgb&w=595&h=400&dpr=2'
                    }
                    alt='listing cover'
                    className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
                />
                <div className='p-3 flex flex-col gap-2 w-full'>
                    <p className='truncate text-lg font-semibold text-gray-800'>
                        {listing.name}
                    </p>
                    <div className='flex items-center gap-1'>
                        <TiLocationOutline className='h-4 w-4 text-fuchsia-700' />
                        <p className='text-sm text-gray-700 truncate w-full'>
                            {listing.address}
                        </p>
                    </div>
                    <p className='text-sm text-gray-700 line-clamp-2'>
                        {listing.description}
                    </p>
                    <p className='text-gray-700 mt-2 font-semibold '>
                        $
                        {listing.offer
                            ? listing.discountPrice.toLocaleString('en-US')
                            : listing.regularPrice.toLocaleString('en-US')}
                        {listing.type === 'rent' && ' / month'}
                    </p>
                    <div className='text-gray-700 flex gap-4'>
                        <div className='font-bold text-sm'>
                            {listing.bedrooms > 1
                                ? `${listing.bedrooms} beds `
                                : `${listing.bedrooms} bed `}
                        </div>
                        <div className='font-bold text-sm'>
                            {listing.bathrooms > 1
                                ? `${listing.bathrooms} baths `
                                : `${listing.bathrooms} bath `}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ListingItem;
