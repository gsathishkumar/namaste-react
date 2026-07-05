const Shimmer = () => {
  const totalShimmers = 20;

  return (
    <div className="shimmer-container flex flex-wrap">
      {Array.from({ length: totalShimmers }).map((_, index) => (
        <div
          key={index}
          className="m-5 rounded-lg w-50 h-70 bg-gray-200 border border-solid"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
