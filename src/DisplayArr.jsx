import React, { useContext, useEffect } from 'react';
import { Context } from './App';

function DisplayArr(props) {

    const {arr,setArr} = useContext(Context)
    useEffect(()=>setArr(currArr => [...currArr,5]),[])
    console.log(arr)

    return (
        <div>
            
        </div>
    );
}

export default DisplayArr;