import { useState, useEffect } from "react";
import axios from "axios";

const addColor = (colors) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

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

      const fetchData = async () => {
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

      useEffect(()=> {
        fetchData();
      },[]);

      const refetch = () => { //if data is not loaded properly
        setIsLoading(true);
        fetchData();
      }

      return {data, isLoading, error, refetch}
}

export default addColor