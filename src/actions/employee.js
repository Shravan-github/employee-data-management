import {  createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  async () => {
    const response = await axios.get('/mock/employee.json');
    console.log('response', response);
    return response.data;
  }
);