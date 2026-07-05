import { CDN_URL } from '../utils/constants';

const RestaurantCard = props => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData;

  return (
    <div className="res-card m-4 p-4 w-50 rounded-lg bg-gray-100 hover:bg-gray-300 cursor-pointer">
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="text-sm">🍕 {cuisines.join(', ')}</h4>
      <p className="py-2 text-sm">
        {avgRating}⭐ - {costForTwo}
      </p>
      <h4 className="text-sm">⌛ {sla.deliveryTime} minutes</h4>
    </div>
  );
};

// Higher Order Function
export const withPromotedLabel = RestaurantCard => {
  return props => {
    return (
      <div>
        <label className="absolute bg-gray-800 text-white mx-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard resData={props.resData} />
      </div>
    );
  };
};

export default RestaurantCard;
