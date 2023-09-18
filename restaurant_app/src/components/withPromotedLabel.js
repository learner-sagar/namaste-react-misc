const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute text-white bg-blue-900 p-2 rounded-lg z-50">
          promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default withPromotedLabel;
