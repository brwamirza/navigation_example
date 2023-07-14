import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://suretoshops-backend.onrender.com/api/commonnew/getColorList`,
        headers: {
            'Content-type': 'application/json'
        },
        // params: {
        //   ...query
        // },
      };

      const fetchData = async () => {
        setIsLoading(true);

        try{
            const response = await axios.request
            (options);
            setData(response.data.data);
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

export default useFetch