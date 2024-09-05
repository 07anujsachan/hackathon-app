import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { Link, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActiveHackathon } from "../store/hackathon.slice";
import { useEffect, useState } from "react";

export const Card = ({ cardData }: any) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });
  const [formattedDate, setFormattedDate] = useState("");
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  useEffect(() => {
    const start = new Date(cardData.startDate).getTime();
    const end = new Date(cardData.endDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      let difference;

      if (now < start) {
        // Countdown hasn't started yet
        difference = start - now;
      } else {
        // Countdown has started
        difference = end - now;
      }

      if (difference <= 0) {
        clearInterval(timerId);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      setTimeRemaining({ days, hours, minutes });
    };

    // Update the countdown every second
    const timerId = setInterval(updateCountdown, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timerId);
  }, [cardData]);

  const handleStatus = () => {
    const startDate = new Date(cardData.startDate);
    const endDate = new Date(cardData.endDate);
    const currentDate = new Date();
    if (startDate > currentDate) {
      setStatus("Upcoming");
    }
    if (endDate < currentDate) {
      setStatus("Past");
    }
    if (endDate > currentDate && startDate < currentDate) {
      setStatus("Active");
    }
  };
  const formatDate = () => {
    const date = new Date(cardData.endDate);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear().toString().slice(-2);
    const time = "09:00 PM";
    const formattedDate = `${day} ${month} '${year} ${time}`;
    setFormattedDate(formattedDate);
  };

  useEffect(() => {
    handleStatus();
    formatDate();
  }, [cardData]);

  return (
    <div className=" flex flex-col justify-center items-center w-96  rounded-2xl bg-white pb-16  shadow-lg shadow-gray-500/20">
      <img
        className="w-full rounded-t-2xl h-full"
        src={cardData?.image}
        alt="#"
      />
      <div className="px-8  flex flex-col justify-center items-center">
        <p
          className={`   px-3  rounded-lg inline-block my-7 ${
            status === "Upcoming"
              ? "bg-[#FDF1D3]"
              : status === "Active"
              ? "bg-[#D2E5D5] text-[#44924C]"
              : "bg-[#FFDED4] text-[#666666]"
          } `}
        >
          {status}
        </p>
        <h6 className="text-center  text-2xl font-medium"> {cardData?.name}</h6>
        <p className="mt-6 text-center text-lg font-normal my-2">
          {status === "Upcoming"
            ? "Starts in"
            : status === "Active"
            ? "Ends in"
            : "Ended on"}
        </p>
        {status === "Past" ? (
          <p className="text-xl font-semibold">{formattedDate}</p>
        ) : (
          <div className="flex space-x-4 items-center mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold">{timeRemaining.days}</div>
              <div className="text-sm">Days</div>
            </div>
            <p className="text-4xl text-center">:</p>
            <div className="text-center">
              <div className="text-2xl font-bold">{timeRemaining.hours}</div>
              <div className="text-sm">Hours</div>
            </div>
            <p className="text-4xl">:</p>
            <div className="text-center">
              <div className="text-2xl font-bold">{timeRemaining.minutes}</div>
              <div className="text-sm">Minutes</div>
            </div>
          </div>
        )}

        <Link to="/details">
          <button
            onClick={() => dispatch(setActiveHackathon(cardData))}
            className="bg-[#44924C] text-white py-2 rounded-lg px-4 mt-10"
          >
            <span>
              <FontAwesomeIcon icon={faSquareCheck} />
            </span>{" "}
            Participate Now
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};
