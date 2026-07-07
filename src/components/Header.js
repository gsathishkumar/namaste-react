import { LOGO_URL } from '../utils/constants';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState('Login');
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  //console.log(loggedInUser);

  // Subscribing to the store using a Selector
  const cartItems = useSelector(store => store.cart.items);
  //console.log(cartItems);

  // useEffect(() => {
  //   console.log('>>>>>>>>>>>>>> Header.useEffect() rendered');
  // }, [btnNameReact]);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
      <div className="logo-container">
        <img className="w-50" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4 gap-5">
          <li>Online Status {onlineStatus ? '✅' : '🔴'}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === 'Login'
                ? setBtnNameReact('Logout')
                : setBtnNameReact('Login');
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 ">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
