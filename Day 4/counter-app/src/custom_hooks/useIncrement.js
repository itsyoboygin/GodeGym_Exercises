import { useState } from 'react';

function useIncrement(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    const increase = (addAmount) => {
        setCount((prev) => prev + addAmount);
    };

    return { count, increase };
}

export default useIncrement;
