import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "./Card";
import { Link } from "react-router-dom";
import {
  removeFilters,
  setLevelFilters,
  setStatusFilters,
} from "../store/hackathon.slice";

export const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.hackathon.hackathons);
  const statusFilters = useSelector(
    (state: any) => state.hackathon.statusFilters
  );
  const levelFilters = useSelector(
    (state: any) => state.hackathon.levelFilters
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [hackathon, setHackathon] = useState(data);
  const [sortingOrder, setSortingOrder] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSearch = (e: any) => {
    const query = e.target.value;
    const filtered = hackathon.filter((h: any) =>
      h.name.toLowerCase().includes(query.toLowerCase())
    );

    console.log(filtered);
    setHackathon(filtered);
  };

  const handleFilters = () => {
    let currentHackathons = [...hackathon];
    if (levelFilters.length > 0) {
      currentHackathons = currentHackathons.filter((h: any) => {
        for (const filter of levelFilters) {
          if (h.level.toLowerCase() === filter) {
            return true;
          }
        }
        return false;
      });
    }
    if (statusFilters && statusFilters.length > 0) {
      currentHackathons = currentHackathons.filter((h: any) => {
        let status = "";
        const startDate = new Date(h.startDate);
        const endDate = new Date(h.endDate);
        const currentDate = new Date();
        if (startDate > currentDate) {
          status = "upcoming";
        }
        if (endDate < currentDate) {
          status = "past";
        }
        if (endDate > currentDate && startDate < currentDate) {
          status = "active";
        }
        for (const filter of statusFilters) {
          if (status === filter) {
            return true;
          }
        }
        return false;
      });
    }
    if (sortingOrder === "new") {
      currentHackathons = currentHackathons.sort(
        (a: any, b: any) =>
          new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      );
    }
    if (sortingOrder === "old") {
      currentHackathons = currentHackathons.sort(
        (a: any, b: any) =>
          new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
      );
    }
    console.log(currentHackathons);
    setHackathon(currentHackathons);
  };
  useEffect(() => {
    handleFilters();
  }, [statusFilters, levelFilters, sortingOrder]);
  return (
    <>
      {/* hero section */}
      <section className="hero-sec bg-[#003145] py-32 px-52 flex relative">
        <div className="flex w-2/3 ">
          <div className="w-3 h-28 bg-[#FFCE5B] absolute left-32"></div>
          <div className="py-3">
            <h1 className="text-5xl font-bold text-white ">
              {" "}
              Accelerate Innovation <br /> with Global AI Challenges
            </h1>
            <p className="text-white my-8 mb-10 text-xl leading-7 w-3/4">
              AI Challenges at DPhi simulate real-word problems. It is a great
              place to put your AI/Data Science skills to test on diverse
              datasets allowing you to foster learning through hackathon.
            </p>
            <Link to="/form">
              {" "}
              <button className="bg-white rounded-lg px-4 py-2 text-xl font-semibold">
                {" "}
                Create Challenge
              </button>
            </Link>
          </div>
        </div>
        <figure>
          <img src="/media/icons/PicsArt_04-14-04.42 1.svg" alt="#" />
        </figure>
      </section>
      {/* about section */}
      <section className="bg-[#002A3B] py-20 px-52">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <figure className="mr-8">
              {" "}
              <img src="/media/icons/group 1000002515.svg" alt="#" />
            </figure>
            <div>
              <h3 className="text-white text-3xl font-bold"> 100K+</h3>
              <p className="text-white text-xl font-light">
                AI Model Submission
              </p>
            </div>
          </div>
          <div className="w-[1px] h-12 bg-white"></div>
          <div className="flex items-center ">
            <figure className="mr-8">
              {" "}
              <img src="/media/icons/group 1000002516.svg" alt="#" />
            </figure>
            <div>
              <h3 className="text-white text-3xl font-bold"> 50K+</h3>
              <p className="text-white text-xl font-light">Data Scientists</p>
            </div>
          </div>
          <div className="w-[1px] h-12 bg-white"></div>
          <div className="flex items-center">
            <figure className="mr-8">
              {" "}
              <img src="/media/icons/group 1000002518.svg" alt="#" />
            </figure>
            <div>
              <h3 className="text-white text-3xl font-bold"> 100+</h3>
              <p className="text-white text-xl font-light">
                AI Challenges Hosted
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* participate section */}
      <section className="py-20 px-52">
        <h1 className="text-center text-4xl font-semibold">
          Why Participate in
          <span className="text-[#44924C]">AI Challenges?</span>
        </h1>
        <div className="grid grid-cols-2 gap-10 my-12">
          <div className="bg-[#F8F9FD] py-12 px-10 rounded-2xl">
            <img src="/media/icons/carbon_notebook-reference.svg" alt="#" />
            <h3 className="text-2xl font-semibold my-4">Prove Your Skills</h3>
            <p className="text-[#64607D] text-lg font-normal">
              Gain substnital experience by solving real-wold problems and pit
              against others to come up with innovative solutions.
            </p>
          </div>
          <div className="bg-[#F8F9FD] py-12 px-10 rounded-2xl">
            <img src="/media/icons/Vector.svg" alt="#" />
            <h3 className="text-2xl font-semibold my-6">
              Learn From Community
            </h3>
            <p className="text-[#64607D] text-lg font-normal">
              One can look and analyze the solutions submitted by the other Data
              Scientist is the community and learn from them.
            </p>
          </div>
          <div className="bg-[#F8F9FD] py-12 px-10 rounded-2xl">
            <img src="/media/icons/Robot.svg" alt="#" />
            <h3 className="text-2xl font-semibold my-6">Challenge Yourself</h3>
            <p className="text-[#64607D] text-lg font-normal">
              There is nothing for you to lose by participating in a challenge.
              You can safe, learn out of the entire experience and bounce back
              harder.
            </p>
          </div>
          <div className="bg-[#F8F9FD] py-12 px-10 rounded-2xl">
            <img src="/media/icons/IdentificationCard.svg" alt="#" />
            <h3 className="text-2xl font-semibold my-6">Earn recognition</h3>
            <p className="text-[#64607D] text-lg font-normal">
              You will stand out from the crowd if you do well in AI challenges,
              it not only helps you shine in the community but also earns
              rewards.
            </p>
          </div>
        </div>
      </section>
      {/* Search & filter section */}
      <section className="bg-[#002A3B] py-20 px-52 relative ">
        <h3 className="text-white text-center text-3xl font-semibold">
          {" "}
          Explore Challenges
        </h3>
        <div className="flex mt-12 justify-between mx-auto">
          <div className="w-3/4">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder=" 🔍 search "
              className="px-4 py-4 w-full rounded-xl"
            />
          </div>
          <div className="w-[20%]">
            <button
              onClick={handleFilterToggle}
              className={` w-full text-left bg-white px-6    ${
                isFilterOpen
                  ? "rounded-b-none rounded-t-lg pt-4 pb-2 "
                  : "py-4 rounded-lg "
              }`}
            >
              Filter {isFilterOpen ? "▲" : "▼"}
            </button>
            {isFilterOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-10 z-10"
                onClick={handleFilterToggle}
              ></div>
            )}
            {isFilterOpen && (
              <div className=" z-10 absolute top-30  bg-white px-6 pb-4 rounded-b-lg shadow-lg shadow-gray-500/20 w-[252px]">
                {/* Status Checkboxes */}

                <div style={{ marginTop: "20px" }}>
                  <p className="text-[#8a8989] my-1">Sort by:</p>
                  <label className="block text-[#8a8989] my-1">
                    <input
                      className="mr-2"
                      type="checkbox"
                      value="easy"
                      checked={sortingOrder === "new"}
                      onChange={() => {
                        setSortingOrder("new");
                        handleFilterToggle();
                      }}
                    />
                    Newest first
                  </label>

                  <label className="block text-[#8a8989] my-1">
                    <input
                      className="mr-2"
                      type="checkbox"
                      value="hard"
                      checked={sortingOrder === "old"}
                      onChange={() => {
                        setSortingOrder("old");
                        handleFilterToggle();
                      }}
                    />
                    Oldest first
                  </label>
                </div>
                <div>
                  <hr />
                  <p className="my-2 text-[#8a8989]">Status:</p>
                  <label className="block text-[#8a8989] my-1 ">
                    <input
                      className="mr-2"
                      type="checkbox"
                      checked={statusFilters?.includes("all")}
                      onChange={() => {
                        dispatch(setStatusFilters("all"));
                        handleFilterToggle();
                      }}
                    />
                    All
                  </label>

                  <label className="block text-[#8a8989] my-1">
                    <input
                      className="mr-2"
                      type="checkbox"
                      value="pending"
                      checked={statusFilters?.includes("upcoming")}
                      onChange={() => {
                        dispatch(setStatusFilters("upcoming"));
                        handleFilterToggle();
                      }}
                    />
                    Upcoming
                  </label>

                  <label className="block text-[#8a8989] my-1">
                    <input
                      className="mr-2"
                      type="checkbox"
                      value="active"
                      checked={statusFilters?.includes("active")}
                      onChange={() => {
                        dispatch(setStatusFilters("active"));
                        handleFilterToggle();
                      }}
                    />
                    Active
                  </label>

                  <label className="block text-[#8a8989] my-1">
                    <input
                      className="mr-2"
                      type="checkbox"
                      value="past"
                      checked={levelFilters?.includes("past")}
                      onChange={() => {
                        dispatch(setLevelFilters("past"));
                        handleFilterToggle();
                      }}
                    />
                    Past
                  </label>
                </div>
                <hr className="mt-4" />
                <div style={{ marginTop: "20px" }}>
                  <p className="text-[#8a8989] my-1">Level:</p>
                  <label className="block text-[#8a8989] my-1">
                    <input
                      className="mr-2"
                      type="checkbox"
                      value="easy"
                      checked={levelFilters?.includes("easy")}
                      onChange={() => {
                        dispatch(setLevelFilters("easy"));
                        handleFilterToggle();
                      }}
                    />
                    Easy
                  </label>

                  <label className="block text-[#8a8989] my-1">
                    <input
                      className="mr-2"
                      type="checkbox"
                      value="hard"
                      checked={levelFilters?.includes("medium")}
                      onChange={() => {
                        dispatch(setLevelFilters("medium"));
                        handleFilterToggle();
                      }}
                    />
                    Medium
                  </label>

                  <label className="block text-[#8a8989] my-1">
                    <input
                      className="mr-2"
                      type="checkbox"
                      value="hard"
                      checked={levelFilters?.includes("hard")}
                      onChange={() => {
                        dispatch(setLevelFilters("hard"));
                        handleFilterToggle();
                      }}
                    />
                    Hard
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
        {levelFilters && (
          <ul className="grid mt-14 grid-cols-7 gap-10">
            {levelFilters?.map((f: string) => (
              <li className="bg-[#798F9A] rounded-3xl py-3 px-6 flex justify-between items-center">
                <span className="text-white">{f}</span>
                <button
                  onClick={() => dispatch(removeFilters(f))}
                  className="bg-white rounded-full w-5 h-5 text-[#798F9A] text-xs font-bold"
                >
                  x
                </button>
              </li>
            ))}
            {statusFilters &&
              statusFilters.map((f: string) => (
                <li className="bg-[#798F9A] rounded-3xl py-3 px-6 flex justify-between items-center">
                  <span className="text-white">{f}</span>
                  <button
                    onClick={() => dispatch(removeFilters(f))}
                    className="bg-white rounded-full w-5 h-5 text-[#798F9A] text-xs font-bold"
                  >
                    x
                  </button>
                </li>
              ))}
          </ul>
        )}
      </section>
      {/* card section */}
      <section className="py-20 pl-32 pr-20 bg-[#003145] grid grid-cols-3 gap-10">
        {hackathon.map((card: any) => (
          <Card cardData={card} />
        ))}
      </section>
    </>
  );
};
