import { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { fetchCoins } from '../redux/crypto/cryptoSlice';

function Home() {
  const { cryptoData, isLoading } = useSelector((cryptos) => cryptos.crypto);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Name');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  const filteredCryptoData = cryptoData?.filter((currency) => {
    const currencyName = currency.name.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();
    return currencyName.includes(searchTermLower);
  }).sort((a, b) => {
    if (selectedFilter === 'Name') {
      return a.name.localeCompare(b.name);
    } if (selectedFilter === 'Price') {
      return b.price - a.price;
    } if (selectedFilter === 'Rank') {
      return a.rank - b.rank;
    } if (selectedFilter === 'Market') {
      return a.marketCap - b.marketCap;
    } return a.name.localeCompare(b.name);
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <span className="h-screen loading loading-bars loading-lg" />
      </div>
    );
  }

  return (
    <>
      <div className="w-full px-6 text-darkGray join py-5 grid grid-cols-2 gap-5">
        <div>
          <input
            className="rounded-none w-full p-2"
            placeholder="Search"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
        <div>
          <select
            className="rounded-none w-full p-2"
            value={selectedFilter}
            onChange={(event) => setSelectedFilter(event.target.value)}
          >
            <option disabled value="" hidden>Filter</option>
            <option value="Name">Name</option>
            <option value="Price">Price</option>
            <option value="Rank">Rank</option>
            <option value="Market">Market Cap</option>
          </select>
        </div>
      </div>
      <hr className="h-0.5 border-t-0 mt-2 bg-neutral-100" />
      <div
        className="bg-brightBlue dark:bg-newLightRed mx-auto p-5 w-full flex flex-row justify-around items-center"
      >
        <img src="https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg" alt="Bitcoin" className="w-28 py-3 mx-auto first:m-0" />
        <div className="">
          <p className="text-3xl font-bold">Bitcoin</p>
          <p className="font-bold text-lg">29.2K</p>
        </div>
      </div>
      <div className="bg-brightBlueSupDark dark:bg-newDarkRed py-2 px-6 uppercase  font-bold sticky top-16 z-20">
        <span>Stats By </span>
        <span>{selectedFilter}</span>
      </div>
      {filteredCryptoData?.length > 0 ? (
        <div className="grid grid-cols-2 w-full overflow-hidden">
          {filteredCryptoData?.map((currency, index) => (
            <div
              key={currency.uuid}
              className={`mx-auto ${
                (index + 1) % 4 === 2 || (index + 1) % 4 === 3 ? 'bg-brightBluedDark dark:bg-newDarkRed' : 'bg-brightBlueSupLight dark:bg-newRed'
              } py-5 w-full flex flex-col justify-center items-center`}
            >
              <Link
                className="self-end px-5"
                key={currency.uuid}
                to={`/crypto/${currency.uuid}`}
              >
                <ArrowRightCircleIcon className="cursor-pointer place-self-end h-6 w-6" aria-hidden="true" />
              </Link>
              <img src={currency.iconUrl} alt={currency.name} className="w-16 py-3 mx-auto first:m-0" />
              <p className="w-6/12 text-center text-2xl font-bold">{currency.name}</p>
              <p className="font-bold text-lg">{millify(currency.price)}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-4 h-screen">No results found.</p>
      )}
    </>
  );
}

export default Home;
