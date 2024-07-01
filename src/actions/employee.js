import {  createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  async () => {
    /* this method takes the data from the backend to client */
    const response = await axios.get('/mock/employee.json');  
    console.log('response', response);
    return response.data;
  }
);