import { useEffect, useState } from "react";
import axios from "axios";

/// This component is for futute use - to get/send data from server 

const Data = () => {
    const [data, setData] = useState(null);
    
    const getData = async () => {
    const { data } = await axios.get('http://localhost:9000/users');
    setData(data);
    console.log('data', data)
    };
    
    useEffect(() => {
        getData();
    }, []);
    
}

export default Data;
