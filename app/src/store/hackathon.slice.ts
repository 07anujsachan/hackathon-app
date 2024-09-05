import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface hackathonData {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  image: string | null;
  level: string;
}

const initialState = {
  activeHackathon: {},
  editableHackathon: null,
  statusfilters: [],
  levelFilters: [],
  hackathons: [
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      name: "Travel Insurance Claim Prediction",
      description: "Identify the class to which each butterfly belongs to",
      startDate: "2024-08-10",
      endDate: "2024-08-29",
      image: "./media/cardimage/Group 1000002466.png",
      level: "Medium",
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      name: "Data Science Bootcamp- Graded Datathon",
      description: "Identify the class to which each butterfly belongs to",
      startDate: "2024-09-11",
      endDate: "2024-09-25",
      image: "./media/cardimage/Group 1000002771.png",
      level: "Medium",
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      name: "Data Sprint 72- Butterfly Identification",
      description: "Identify the class to which each butterfly belongs to",
      startDate: "2024-09-11",
      endDate: "2024-09-28",
      image: "./media/cardimage/Group 1000002766.png",
      level: "Easy",
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      name: "Data Sprint 71- Weather Recognition ",
      description: "Identify the class to which each butterfly belongs to",
      startDate: "2024-08-11",
      endDate: "2024-09-21",
      image: "./media/cardimage/Group 1000002767.png",
      level: "Medium",
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      name: "Data Sprint 70- Airline Passenger Satisfaction",
      description: "Identify the class to which each butterfly belongs to",
      startDate: "2024-08-11",
      endDate: "2024-09-21",
      image: "./media/cardimage/Group 1000002772.png",
      level: "Hard",
    },
    {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      name: "Engineeniring Graduates Employment Outcomes",
      description: "Identify the class to which each butterfly belongs to",
      startDate: "2024-08-11",
      endDate: "2024-08-21",
      image: "./media/cardimage/Group 1000002773.png",
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
    setActiveHackathon: (state: any, action: PayloadAction<hackathonData>) => {
      state.activeHackathon = action.payload;
    },
    setEditableHackathon: (
      state: any,
      action: PayloadAction<hackathonData>
    ) => {
      state.editableHackathon = action.payload;
    },
    setStatusFilters: (state: any, action: PayloadAction<string>) => {
      state.statusfilters = [...state.statusfilters, action.payload];
    },
    setLevelFilters: (state: any, action: PayloadAction<string>) => {
      state.levelFilters = [...state.levelFilters, action.payload];
    },
    removeFilters: (state: any, action: PayloadAction<string>) => {
      state.filters = state.filters.filter((f: string) => f !== action.payload);
    },
    removeHackathon: (state: any, action: PayloadAction<string>) => {
      state.hackathons = state.hackathons.filter(
        (h: any) => h.name !== action.payload
      );
    },
    editHackathon: (state: any, action: PayloadAction<hackathonData>) => {
      const index = state.hackathons.findIndex(
        (h: any) => h.id === action.payload.id
      );
      if (index !== -1) {
        state.hackathons[index] = {
          ...state.hackathons[index],
          ...action.payload,
        };
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addHackathon,
  setActiveHackathon,
  setEditableHackathon,
  setLevelFilters,
  setStatusFilters,
  removeFilters,
  removeHackathon,
  editHackathon,
} = hackathonSlice.actions;

export default hackathonSlice.reducer;
