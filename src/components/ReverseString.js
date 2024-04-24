import React from 'react';

const ReverseString = () => {
    const reverseString = (str) => {
        let reversed = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        return reversed;
    };

    return (
        <div>
            <span>Input: "hello". Output: "{reverseString("hello")}"</span><br />
            <span>Input: "world". Output: "{reverseString("world")}"</span><br />
            <span>Input: "". Output: "{reverseString("")}"</span>
        </div>
    );
}

export default ReverseString;
