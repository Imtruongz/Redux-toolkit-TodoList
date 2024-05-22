import { createSlice } from "@reduxjs/toolkit";
//create slice se khong can phai dung action.js nua ma se tu tao ra action creator
//redux toolkit se giup cho ta co the code mutation nhung ma hoat dong inmutation(gian tiep len obj chu khong code truc tiep len obj)
export default createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    searchTodo: (state, action) => {
      state.search = action.payload;
    },
    filterStatus: (state, action) => {
      state.status = action.payload;
    },
    filterPriority: (state, action) => {
      state.priority = action.payload;
    },
  },
});
