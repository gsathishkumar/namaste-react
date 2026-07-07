import { useEffect, useState } from 'react';
import { MENU_API } from '../utils/constants';
import mockRestaurantData from '../assets/mock-restaurant.json';

const useRestaurantMenu = resId => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    // console.log('useRestaurantMenu::useEffect() invoked ');
    fetchData();
  }, []);

  const fetchData = async () => {
    // try {
    //   const response = await fetch(MENU_API + resId);
    //   const json = await response.json();
    //   setResInfo(json.data);
    // } catch (error) {
    //   console.log('Error Message 🔥🔥🔥🔥 ' + error);
    //   setResInfo(null);
    // }
    setResInfo(mockRestaurantData);
  };

  return resInfo;
};

export default useRestaurantMenu;
