import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0); // Default value: 0

    const incrementCount = () => {
        if (count < 40) {
            setCount(count + 1);
        }
    };

    const decrementCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    );
}

export default Counter;
