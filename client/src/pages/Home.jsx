import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import image from '../assist/home.jpg';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row gap-6 p-6 lg:p-28 max-w-6xl mx-auto w-full">
        <div className="flex flex-col gap-4 lg:w-1/2">
          <h1 className="text-slate-700 font-bold text-3xl md:text-5xl lg:text-6xl">
            Search and Book <span className="text-slate-500">Affordable</span>
            <br />
            Hostels and Flats for Rent
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm">
            Residence Navigator is the best place to find your next perfect place to live.
            <br />
            We have a wide range of properties for you to choose from.
          </p>
          <button
            className="bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded max-w-xs"
            onClick={() => {
              window.location.href = '/search';
            }}
          >
            Get Started
          </button>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <img src={image} alt="Home" className="h-[300px] md:h-[400px] lg:h-[400px] w-full object-cover rounded-lg" />
        </div>
      </div>

      {/* Swiper Section */}
      <div className="max-w-6xl mx-auto w-full px-3">
        <Swiper navigation>
          {offerListings && offerListings.length > 0 &&
            offerListings.map((listing) => (
              <SwiperSlide key={listing._id}>
                <div
                  style={{
                    background: `url(${listing.imageUrls[0]}) center no-repeat`,
                    backgroundSize: 'cover',
                  }}
                  className="h-[300px] sm:h-[400px] md:h-[500px] rounded-lg"
                ></div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* Listing Section */}
      <div className="max-w-6xl mx-auto w-full p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div>
            <div className="my-3 flex justify-between">
              <h2 className="text-2xl font-semibold text-slate-600">Recent offers</h2>
              <Link className="text-sm text-blue-800 hover:underline" to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div>
            <div className="my-3 flex justify-between">
              <h2 className="text-2xl font-semibold text-slate-600">Recent places for rent</h2>
              <Link className="text-sm text-blue-800 hover:underline" to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div>
            <div className="my-3 flex justify-between">
              <h2 className="text-2xl font-semibold text-slate-600">Recent places for sale</h2>
              <Link className="text-sm text-blue-800 hover:underline" to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8 mt-auto w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Company</h3>
              <ul className="space-y-2">
                <li><Link to="about">About Us</Link></li>
                <li><Link to="create-listing">Add Property</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Connect</h3>
              <ul className="space-y-2">
                <li><Link to="support">Email-Us</Link></li>
                <li><Link to="#">Facebook</Link></li>
                <li><Link to="#">Instagram</Link></li>
                <li><Link to="support">Help & Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Head Office</h3>
              <p>Defence View phase 2, Karachi, Pakistan.</p>
              <p>Monday To Sunday 9AM To 6PM</p>
            </div>
          </div>
          <div className="mt-4 text-sm text-center">
            <p>&copy; Copyright 2024 - 2024 RNC.com All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
