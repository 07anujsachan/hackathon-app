export const Card = ({ cardData }: any) => {
  return (
    <div className=" flex flex-col justify-center items-center w-96 bg-white rounded-2xl pb-16 shadow-lg shadow-gray-500/20">
      <img className="w-full" src={cardData?.image} alt="#" />
      <div className="px-8 flex flex-col justify-center items-center">
        <p className="bg-[#FDF1D3]  px-3  rounded-lg inline-block my-7">
          Upcoming
        </p>
        <h6 className="text-center  text-2xl font-medium"> {cardData?.name}</h6>
        <p className="mt-6 text-center">Starts in</p>
        <div className="flex space-x-4 items-center mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold">00</div>
            <div className="text-sm">Days</div>
          </div>
          <p className="text-4xl text-center">:</p>
          <div className="text-center">
            <div className="text-2xl font-bold">10</div>
            <div className="text-sm">Hours</div>
          </div>
          <p className="text-4xl">:</p>
          <div className="text-center">
            <div className="text-2xl font-bold">06</div>
            <div className="text-sm">Minutes</div>
          </div>
        </div>
        <button className="bg-[#44924C] text-white py-2 rounded-lg px-4 mt-10">
          Participate Now
        </button>
      </div>
    </div>
  );
};
