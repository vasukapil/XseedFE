import axios from 'axios';
import { BASE_URL } from '../api';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { username, password });
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const signup = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, { username, password });
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const fetchMoreContent = async (page) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
      const data = await response.json();  
      return data.map((post) => post.body);
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  