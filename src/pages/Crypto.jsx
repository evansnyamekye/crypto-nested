import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import millify from 'millify';
import { fetchSingleCoin } from '../redux/crypto/cryptoSlice';
import Card from '../components/Card';

function Crypto() {
  const cryptoId = useParams();
  const dispatch = useDispatch();
  const { selectedCoin, isLoading, error } = useSelector((state) => state.crypto);

  useEffect(() => {
    dispatch(fetchSingleCoin(cryptoId.uuid));
  }, [dispatch, cryptoId.uuid]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <span className="h-screen loading loading-bars loading-lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <>
      { selectedCoin && (
        <>
          <div className="bg-brightBlueSupDark dark:bg-newDarkRed py-2 px-6 uppercase  font-bold sticky top-16 z-20">
            <p>Stats By Coin</p>
          </div>
          <div
            className="bg-brightBlue dark:bg-newLightRed mx-auto p-5 w-full flex flex-row justify-around items-center"
          >
            <img src={selectedCoin.iconUrl} alt="Bitcoin" className="w-28 py-3 mx-auto first:m-0" />
            <div className="">
              <p className="text-3xl font-bold">
                {selectedCoin.name}
                <span> (</span>
                { selectedCoin.symbol }
                <span>)</span>
              </p>
              <p className="font-bold text-lg text-end">{millify(selectedCoin.price)}</p>
            </div>
          </div>
          <div className="sticky top-16 z-20 text-xl bg-brightBlueSupDark dark:bg-newDarkRed py-2 px-6 uppercase  font-bold">
            <span>{ selectedCoin.name }</span>
            <span> Live Details</span>
          </div>
          <div className="flex flex-col w-full">
            <div className="bg-brightBlueSupLight dark:bg-newRed px-5 py-10 flex flex-row justify-between items-center">
              <p>{selectedCoin.description}</p>
            </div>
            <Card title="Coin Rank" details={selectedCoin.rank.toString()} />
            <Card title="Total Market Cap" details={millify(selectedCoin.marketCap)} />
            <Card title="24h Volume" details={millify(selectedCoin['24hVolume'])} />
            <Card title="All Time Hight" details={millify(selectedCoin.allTimeHigh.price)} />
            <Card title="Circulating" details={millify(selectedCoin.supply.circulating)} />
          </div>
        </>
      )}
    </>
  );
}

export default Crypto;
