import axios from "axios";


let url = "http://localhost:5000";

export async function ShortenUrl(text) {  
    const requestBody = {
      url: text,
    };
    try {
      const response = await axios.post(`${url}/shorten`, JSON.stringify(requestBody), {
        headers: {
        'Content-Type': 'application/json'
        }
      });
      //console.log('Login successful:', response.data);
      return response.data; 
    } catch (error) {
      return(error.response.data);
    }
  }


  export async function GetShortenUrl(text) {  
    try {
      const response = await axios.get(`${url}/shorten/${text}`, {
        headers: {
        'Content-Type': 'application/json'
        }
      });
      //console.log('Login successful:', response.data);
      return response.data; 
    } catch (error) {
      return(error.response.data);
    }
  }


  export async function DeleteShortenUrl(text) {  
    try {
      const response = await axios.delete(`${url}/shorten/${text}`, {
        headers: {
        'Content-Type': 'application/json'
        }
      });
      console.log('delete response:', response.data);
      return response.data; 
    } catch (error) {
      return(error.response.data);
    }
  }


  export async function GetStats(text) {  
    try {
      const response = await axios.get(`${url}/stats/${text}`, {
        headers: {
        'Content-Type': 'application/json'
        }
      });
      //console.log('delete response:', response.data);
      return response.data; 
    } catch (error) {
      return(error.response.data);
    }
  }