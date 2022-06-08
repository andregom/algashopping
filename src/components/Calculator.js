import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { subtract, sum } from '../store/Calculator/Calculator.actions';

function Calculator() {
    const dispatch = useDispatch();
    const result = useSelector(state => state.calculator);
    const [a, setA] = useState();
    const [b, setB] = useState();

    return <>
        <input
            type="text" 
            placeholder="a"
            value={a}
            onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) {event.preventDefault()}}}
            onChange={(e) => setA(Number(e.target.value))} 
        />

        <input
            type="text" 
            placeholder="b"
            value={b}
            onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) {event.preventDefault()}}}
            onChange={(e) => setB(Number(e.target.value))} 
        />

        <button
            onClick={() => {
                dispatch(sum(a, b))
            }}
        >Somar</button>
        <button
            onClick={() => {
                dispatch(subtract(a, b))
            }}
        >Subtrair</button>
        <div>
            { result }
        </div>
    </>
}

export default Calculator;