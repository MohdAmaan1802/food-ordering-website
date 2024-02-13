//import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
//import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  //console.log(resData);

  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData;

  // const { loggedInUser } = useContext(UserContext);
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 "
    >
      <img
        className="rounded-lg h-56 w-56"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      {/* <h4 >{resData.info.costForTwo / 100} FOR TWO</h4> */}
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
      {/* <h4>User : {loggedInUser}</h4> */}
    </div>
  );
};
export const withPromatedLabel = (RestaurantCard) => {
  return (props) => (
    <div>
      <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
        Veg
      </label>
      <RestaurantCard {...props} />
    </div>
  );
};

export default RestaurantCard;
