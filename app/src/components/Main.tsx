import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card";
import { Link } from "react-router-dom";

export const Main = () => {
  const hackathon = useSelector((state: any) => state.hackathon.hackathons);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [status, setStatus] = useState<string[]>([]);
  const [level, setLevel] = useState<string[]>([]);

  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setStatus([...status, value]);
    } else {
      setStatus(status.filter((item) => item !== value));
    }
  };

  const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setLevel([...level, value]);
    } else {
      setLevel(level.filter((item) => item !== value));
    }
  };
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
              datasets allowing you to foster learning through competitions.
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
          <div className="bg-[#F8F9FD] py-14 px-10 rounded-2xl">
            <img src="/media/icons/carbon_notebook-reference.svg" alt="#" />
            <h3 className="text-2xl font-semibold my-6">Prove Your Skills</h3>
            <p className="text-[#64607D]">
              Gain substnital experience by solving real-wold problems and pit
              against others to come up with innovative solutions.
            </p>
          </div>
          <div className="bg-[#F8F9FD] py-14 px-10 rounded-2xl">
            <img src="/media/icons/Vector.svg" alt="#" />
            <h3 className="text-2xl font-semibold my-6">Prove Your Skills</h3>
            <p className="text-[#64607D]">
              Gain substnital experience by solving real-wold problems and pit
              against others to come up with innovative solutions.
            </p>
          </div>
          <div className="bg-[#F8F9FD] py-14 px-10 rounded-2xl">
            <img src="/media/icons/Robot.svg" alt="#" />
            <h3 className="text-2xl font-semibold my-6">Prove Your Skills</h3>
            <p className="text-[#64607D]">
              Gain substnital experience by solving real-wold problems and pit
              against others to come up with innovative solutions.
            </p>
          </div>
          <div className="bg-[#F8F9FD] py-14 px-10 rounded-2xl">
            <img src="/media/icons/IdentificationCard.svg" alt="#" />
            <h3 className="text-2xl font-semibold my-6">Prove Your Skills</h3>
            <p className="text-[#64607D]">
              Gain substnital experience by solving real-wold problems and pit
              against others to come up with innovative solutions.
            </p>
          </div>
        </div>
      </section>
      {/* Search & filter section */}
      <section className="bg-[#002A3B] py-20 px-52">
        <h3 className="text-white text-center text-3xl font-semibold">
          {" "}
          Explore Challenges
        </h3>
        <div className="flex mt-12 justify-around">
          <div className="w-2/3">
            <input
              type="search"
              placeholder=" 🔍 search "
              className="px-4 py-2 w-full rounded-lg"
            />
          </div>
          <div>
            <button
              onClick={handleFilterToggle}
              className=" bg-white px-4 py-2  rounded-lg ml-6"
            >
              Filter {isFilterOpen ? "▲" : "▼"}
            </button>

            {isFilterOpen && (
              <div style={{ marginTop: "10px" }}>
                {/* Status Checkboxes */}
                <div>
                  <p>Status:</p>
                  <label>
                    <input
                      type="checkbox"
                      value="all"
                      checked={status.includes("all")}
                      onChange={handleStatusChange}
                    />
                    All
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      value="pending"
                      checked={status.includes("pending")}
                      onChange={handleStatusChange}
                    />
                    Pending
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      value="active"
                      checked={status.includes("active")}
                      onChange={handleStatusChange}
                    />
                    Active
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      value="past"
                      checked={status.includes("past")}
                      onChange={handleStatusChange}
                    />
                    Past
                  </label>
                </div>

                {/* Level Checkboxes */}
                {status.length > 0 && (
                  <div style={{ marginTop: "20px" }}>
                    <p>Level:</p>
                    <label>
                      <input
                        type="checkbox"
                        value="easy"
                        checked={level.includes("easy")}
                        onChange={handleLevelChange}
                      />
                      Easy
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        value="hard"
                        checked={level.includes("hard")}
                        onChange={handleLevelChange}
                      />
                      Medium
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        value="hard"
                        checked={level.includes("hard")}
                        onChange={handleLevelChange}
                      />
                      Hard
                    </label>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="p-56 bg-[#003145] grid grid-cols-3 gap-10">
        {hackathon.map((card: any) => (
          <Card cardData={card} />
        ))}
      </section>
    </>
  );
};
