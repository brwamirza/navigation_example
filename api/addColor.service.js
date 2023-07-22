import { useState, useEffect } from "react";
import axios from "axios";

const addColor = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

      const sendData = async (colors) => {

        const options = {
          method: 'POST',
          url: `https://suretoshops-backend.onrender.com/api/commonnew/inscolor`,
          headers: {
              'Content-type': 'application/json'
          },
          data: {
            ...colors
          },
  
        };

        setIsLoading(true);

        try{
            const response = await axios.request(options);
            setData(response.data);
            setIsLoading(false);
        }
        catch (error){
          console.log(error)
            setError(error);
            alert('There is an error')
        } finally {
            setIsLoading(false);
        }
      }

      return {data, isLoading, error,sendData}
}

export default addColor