import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');
  const { loggedInUser, setUserName } = useContext(UserContext);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  // console.log('Body Rendered ');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING',
    );
    const json = await data.json();
    // Optional Chaining
    setListOfRestraunt(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    // console.log(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants,
    // );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline. Please check your internet connection</h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-2 p-2">
          <input
            type="text"
            data-testid="searchInput"
            className="search-box border border-solid border-black"
            value={searchText}
            onChange={e => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn px-4 py-2 bg-green-100 m-4 cursor-pointer rounded-lg"
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter(res =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-2 p-2 flex items-center">
          <button
            className="filter-btn px-4 py-2 bg-gray-100 m-4 cursor-pointer rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                res => res.info.avgRating > 4,
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={e => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.length === 0 ? (
          <span>No Restaurants Found</span>
        ) : (
          filteredRestaurant.map(restaurant => (
            <Link
              key={restaurant?.info?.id}
              to={'/restaurants/' + restaurant?.info?.id}
            >
              {restaurant?.info?.promoted ? (
                <RestaurantCardPromoted resData={restaurant?.info} />
              ) : (
                <RestaurantCardPromoted resData={restaurant?.info} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
