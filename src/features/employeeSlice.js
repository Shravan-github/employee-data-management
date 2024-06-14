import { createSlice } from '@reduxjs/toolkit';
import { fetchEmployees } from '../actions/employee';

export const employeeSlice = createSlice({
  name: 'employees',
  initialState: {
    originalList: [],
    list: [],
    status: null,
    searchText: '',
  },
  reducers: {
    addEmployee: (state, action) => {
      state.list.push(action.payload);
      state.originalList.push(action.payload);  // Add to originalList as well
    },
    updateEmployee: (state, action) => {
      const index = state.list.findIndex((emp) => emp.EmployeeId === action.payload.EmployeeId);
      const originalIndex = state.originalList.findIndex((emp) => emp.EmployeeId === action.payload.EmployeeId);
      if (index !== -1) {
        state.list[index] = action.payload;
        state.originalList[originalIndex] = action.payload;  // Update in originalList as well
      }
    },
    deleteEmployee: (state, action) => {
      state.list = state.list.filter((emp) => emp.EmployeeId !== action.payload);
      state.originalList = state.originalList.filter((emp) => emp.EmployeeId !== action.payload);  // Delete from originalList as well
    },
    onSearchByEmployee: (state, action) => {
      state.searchText = action.payload;
      state.list = state.originalList.filter((emp) =>
        emp.EmpName.includes(action.payload)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.originalList = action.payload.data;
        state.list = action.payload.data;
      })
      .addCase(fetchEmployees.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { addEmployee, updateEmployee, deleteEmployee, onSearchByEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;

