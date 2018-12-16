import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: { Authorization: "Client-ID ef661fd93eb001a125b0de90270c7e61c154dceba75eb26358d51b1919a5841e" }
});
