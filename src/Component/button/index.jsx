import React, { useState} from 'react'

const Button = () => {
    const [counts, setCounts] = useState(100);

    function handleincrement() {
        setCounts( counts + 10)
    }
    
    return <button onClick={handleincrement}> counts is {counts} </button>           
    
}
export default Button;