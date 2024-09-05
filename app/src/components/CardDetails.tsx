import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  setActiveHackathon,
  setEditableHackathon,
  removeHackathon,
} from "../store/hackathon.slice";
import { getActiveElement } from "@testing-library/user-event/dist/utils";

export const Details = () => {
  const data = useSelector((state: any) => state.hackathon.activeHackathon);
  const dispatch = useDispatch();
  const [formattedDate, setFormattedDate] = useState("");

  const formatDate = () => {
    const date = new Date(data.endDate);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear().toString().slice(-2);
    const time = "09:00 PM";
    const formattedDate = `${day} ${month} '${year} ${time}`;
    setFormattedDate(formattedDate);
  };
  useEffect(() => {
    formatDate();
  }, [data]);
  return (
    <div>
      <div className="bg-[#003145] py-24 px-52 ">
        <span className="bg-[#FFCE5B] text-xl p-2 rounded-lg">
          <FontAwesomeIcon icon={faClock} className="mx-4" />
          Starts on {formattedDate} (Indian Standard Time)
        </span>
        <h1 className="text-white text-5xl my-8">{data?.name}</h1>
        <h3 className="text-white text-xl my-8">{data?.description}</h3>
        <div className=" bg-white inline-block py-2 px-6 rounded-lg">
          <img
            className="inline mx-2"
            src="/media/icons/carbon_skill-level-basic.svg"
            alt="#"
          />
          {data?.level}
        </div>
      </div>
      <div className="flex justify-between px-52 py-4 shadow-lg shadow-gray-600/20">
        <h2 className="text-2xl font-semibold border-b-4 border-[#44924C]">
          Overview
        </h2>
        <div>
          <Link to="/form">
            <button
              onClick={() => dispatch(setEditableHackathon(data))}
              className="bg-[#44924C] py-2 px-8 text-white text-lg rounded-xl font-semibold mr-4 "
            >
              Edit
            </button>
          </Link>
          <Link to="/">
            <button
              onClick={() => dispatch(removeHackathon(data.name))}
              className="border-2 border-red-500 py-1 px-6 text-red-500 text-lg rounded-xl font-semibold"
            >
              Delete
            </button>
          </Link>
        </div>
      </div>
      <div className="py-12 px-52">
        <p className="my-4 leading-7 text-[#64607D] text-xl w-3/4 text-bold">
          Butterflies are the adult flying stage of certain insects belonging to
          an order or group called Lepidoptera. The word "Lepidoptera" means
          "scaly wings" in Greek. This name perfectly suits the insects in this
          group because their wings are covered with thousands of tiny scales
          overlapping in rows.
        </p>
        <p className="my-4 leading-7 text-[#64607D] text-xl w-3/4 text-bold">
          An agency of the Governmental Wildlife Conservation is planning to
          implement an automated system based on computer vision so that it can
          identify butterflies based on captured images. As a consultant for
          this project, you are responsible for developing an efficient model.
        </p>
        <p className="my-4 leading-7 text-[#64607D] text-xl w-3/4 text-bold">
          Your Task is to build an Image Classification Model using CNN that
          classifies to which class of weather each image belongs to.
        </p>
      </div>
    </div>
  );
};
