import { Link } from 'react-router-dom';
import './Home.scss';
import { useRecoilValue } from 'recoil';
import Header from '@/components/common/Header';
import loginState from '@/recoil/atoms/LoginState';

export default function Home() {
  const account = useRecoilValue(loginState.account);
  const accessToken = useRecoilValue(loginState.accessToken);
  return (
    <div className="landing">
      <Header />
      <div className="landing__main">
        <div className="landing__scroll1">
          <h1 className="landing__h1__right">
            A New Way to Capture Your Favorite Restaurants
          </h1>

          <img
            className="landing__illustration1"
            src="/images/Landing1.png"
            alt="landing illustration"
            width={400}
            height={400}
          />
        </div>
        <h1 className="landing__h1-left">Scan and Receive Super Cool SBTs</h1>
        <div className="landing__scroll2">
          <img
            className="landing__illustration3"
            src="/images/Landing3.png"
            alt="landing illustration"
            width={400}
            height={400}
          />

          <img
            className="landing__illustration2"
            src="/images/Landing2.png"
            alt="landing illustration"
            width={400}
            height={400}
          />
        </div>
        <div className="landing__scroll3">
          <h1 className="landing__h1-center">It is THIS easy</h1>
          <div className="landing__scroll3-1">
            <h2 className="landing__h2-1">1. Open Camera</h2>
            <h2 className="landing__h2-2">2. Scan QR code</h2>
            <h2 className="landing__h2-3">3. Get SBTs!</h2>
            <div className="landing__emoji1">
              <img
                src="/images/emoji1.png"
                alt="camera"
                width={30}
                height={30}
              />
            </div>
            <div className="landing__emoji2">
              <img
                className="landing__emoji2"
                src="/images/emoji2.png"
                alt="QR code"
                width={30}
                height={30}
              />
            </div>
            <div className="landing__emoji3">
              <img
                className="landing__emoji3"
                src="/images/emoji3.png"
                alt="NFT"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
        <div className="landing__scroll4">
          <h1 className="landing__h1-center">Collect SBTs like these</h1>
          <div className="landing__nft">
            <img
              className="landing__poap"
              src="/images/NFT1.png"
              width={70}
              height={70}
              alt="NFT"
            />
            <img
              className="landing__poap"
              src="/images/NFT2.png"
              width={70}
              height={70}
              alt="NFT"
            />
            <img
              className="landing__poap"
              src="/images/NFT3.png"
              width={70}
              height={70}
              alt="NFT"
            />
            <img
              className="landing__poap"
              src="/images/NFT4.png"
              width={70}
              height={70}
              alt="NFT"
            />
            <img
              className="landing__poap"
              src="/images/NFT5.png"
              width={70}
              height={70}
              alt="NFT"
            />
            <img
              className="landing__poap"
              src="/images/NFT6.png"
              width={70}
              height={70}
              alt="NFT"
            />
            <img
              className="landing__poap"
              src="/images/NFT7.png"
              width={70}
              height={70}
              alt="NFT"
            />
            <img
              className="landing__poap"
              src="/images/NFT8.png"
              width={70}
              height={70}
              alt="NFT"
            />
            <img
              className="landing__poap"
              src="/images/NFT9.png"
              width={70}
              height={70}
              alt="NFT"
            />
          </div>
        </div>
        <div className="landing__scroll5">
          {account && accessToken ? (
            <Link to="/users">
              <button type="button" className="landing__getStarted">
                get started
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button type="button" className="landing__getStarted">
                get started
              </button>
            </Link>
          )}

          <Link to="/admin" className="landing__shopOwner">
            are you a shop owner?
          </Link>
        </div>
      </div>
    </div>
  );
}
