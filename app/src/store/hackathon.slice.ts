import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface hackathonData {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  image: string | null;
  level: string;
}

const initialState = {
  hackathons: [
    {
      name: "Data Science Bootcamp- Graded Datathon",
      description: "fygigtdeyuyh",
      startDate: "2024-09-11",
      endDate: "2024-09-25",
      image: "./media/cardimage/Group 1000002771.png",
      level: "Medium",
    },
    {
      name: "Data Sprint 72- Butterfly Identification",
      description: "fygigtdeyuyh",
      startDate: "2024-09-11",
      endDate: "2024-09-28",
      image: "./media/cardimage/Group 1000002766.png",
      level: "Medium",
    },
    {
      name: "Data Sprint 71- Weather Recognition ",
      description: "fygigtdeyuyh",
      startDate: "2024-08-11",
      endDate: "2024-09-21",
      image: "./media/cardimage/Group 1000002767.png",
      level: "Medium",
    },
    {
      name: "Data Sprint 70- Airline Passenger Satisfaction",
      description: "fygigtdeyuyh",
      startDate: "2024-08-11",
      endDate: "2024-09-21",
      image: "./media/cardimage/Group 1000002772.png",
      level: "Medium",
    },
    {
      name: "Engineeniring Graduates Employment Outcomes",
      description: "fygigtdeyuyh",
      startDate: "2024-08-11",
      endDate: "2024-08-21",
      image: "./media/cardimage/Group 1000002773.png",
      level: "Medium",
    },
    {
      name: "Travel Insurance Claim Prediction",
      description: "fygigtdeyuyh",
      startDate: "2024-08-10",
      endDate: "2024-08-29",
      image: "./media/cardimage/Group 1000002466.png",
      level: "Medium",
    },
  ],
};

export const hackathonSlice = createSlice({
  name: "hackathon",
  initialState,
  reducers: {
    addHackathon: (state: any, action: PayloadAction<hackathonData>) => {
      console.log("added");
      state.hackathons = [...state.hackathons, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addHackathon } = hackathonSlice.actions;

export default hackathonSlice.reducer;
