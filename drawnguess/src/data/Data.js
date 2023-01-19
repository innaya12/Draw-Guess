import { useEffect, useState } from "react";
import axios from "axios";


const Data = () => {
    const [data, setData] = useState(null);
    
    const sendData = async () => {
    const { data } = await axios.post('http://localhost:9000/users');
    setData(data);
    console.log('data', data)
    };
    
    useEffect(() => {
        sendData();
    }, []);
    
  return 'a';
}

export default Data;

// const Data = () => {
//     const [data, setData] = useState(null);
    
//     const getData = async () => {
//     const { data } = await axios.get('http://localhost:9000/users');
//     setData(data);
//     console.log('data', data)
//     };
    
//     useEffect(() => {
//         getData();
//     }, []);
    
//   return 'a';
// }

// export default Data;
