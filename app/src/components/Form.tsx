import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addHackathon } from "../store/hackathon.slice";

export const Form = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [endDate, setEndDate] = useState("");
  const [imageData, setImageData] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedDate = event.target.value;
    if (selectedDate) {
      setStartDate(selectedDate);
    }
  };
  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = event.target.value;
    if (selectedDate) {
      setEndDate(selectedDate);
    }
  };

  const handleButtonClickFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result && typeof reader.result === "string") {
          setImageData(file);
          setImageURL(reader.result); // reader.result is guaranteed to be a string here
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div>
        <button style={{ float: "right" }}>✖</button>
        <div className="px-20 py-6 bg-[#F8F9FD]">
          <h1 className="text-2xl ">Challenge Details</h1>
        </div>
        <div className="px-20 py-6 ">
          <div>
            <label className="block text-xl" htmlFor="challengeName">
              Challenge Name
            </label>
            <input
              className="border-[1px] border-gray-400 rounded-lg p-2 my-4 w-1/3"
              type="text"
              id="challengeName"
              name="challengeName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="">
            <p className="block text-xl">Start Date</p>
            {/* <label
              htmlFor="date-picker"
              className={`absolute left-3 top-2 text-gray-500 transition-transform transform ${
                startDate || isFocused ? "translate-y-[-0.75rem] scale-75" : ""
              }`}
            >
              Add Start Date
            </label> */}
            <input
              id="startDate"
              name="startDate"
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={startDate}
              onChange={handleStartDateChange}
              required
              type="date"
              className="border-[1px] p-2 my-4 w-1/3 border-gray-400 rounded-lg px-4 py-2 text-gray-500 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="">
            <p className="block text-xl">End Date</p>

            <input
              id="EndDate"
              name="EndDate"
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={endDate}
              onChange={handleEndDateChange}
              required
              type="date"
              className="border-[1px] p-2 my-4 w-1/3 border-gray-400 rounded-lg px-4 py-2 text-gray-500 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-xl" htmlFor="description">
              Description:
            </label>
            <textarea
              className="border-[1px] border-gray-400 rounded-lg p-2 my-4"
              id="description"
              name="description"
              rows={10}
              cols={90}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="w-64">
            <label className="block text-xl" htmlFor="image">
              Upload Image
            </label>
            <button
              onClick={handleButtonClickFile}
              className="bg-[#F4F4F4] py-3 w-full my-3 rounded-md"
            >
              {" "}
              Upload Image{" "}
              <span>
                <img
                  className="inline"
                  src="/media/icons/bxs_cloud-upload.svg"
                  alt="#"
                />
              </span>
            </button>
            <input
              className="border-[1px] border-gray-400 rounded-lg p-2 my-4 "
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleFileChange}
            />
            {imageURL && (
              <div>
                <img
                  src={imageURL}
                  alt="Selected"
                  style={{ width: "300px", height: "auto" }}
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-xl" htmlFor="level">
              Level
            </label>
            <select
              className="border-[1px] border-gray-400 rounded-lg p-2 my-4 w-64"
              id="level"
              name="level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              required
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <button
            onClick={() =>
              dispatch(
                addHackathon({
                  name: name,
                  description: description,
                  startDate: startDate,
                  endDate: endDate,
                  image: imageURL,
                  level: level,
                })
              )
            }
            className="bg-[#44924C] text-white py-2 rounded-lg px-4 mt-10"
          >
            Create Challenge
          </button>
        </div>
      </div>
    </>
  );
};
