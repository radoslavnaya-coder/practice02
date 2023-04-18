import React, {useState} from 'react';

export default function Switcher(){
    function ptSwitcher(){
        if(count === 1){
            setCount(count - 1);
        }
        else{
            setCount(count + 1);
        }
    }
    const [count, setCount] = useState(0);
    return(
    <>
        <h1>Welcome!<br />
        {count}
        </h1>
        <button onClick={ptSwitcher}>Click</button>
    </>
    );
}