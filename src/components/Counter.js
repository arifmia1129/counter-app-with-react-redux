import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { decrementCounter, incrementCounter, resetCounter } from '../utilities/action/counterAction';

const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(incrementCounter());
    }
    const handleDecrement = () => {
        dispatch(decrementCounter());
    }
    const handleReset = () => {
        dispatch(resetCounter());
    }
    return (
        <div>
            <h1>Welcome to React Redux Counter App</h1>
            <h2>Count: {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Counter;