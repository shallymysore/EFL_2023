import React, { useState, useEffect, useRef } from 'react';
//import Countdown from 'react-countdown';

export default function Timer({duration}) {
    const [timer, setTimer] = useState(duration)
    const timerId = useRef()

    useEffect(() => {
        timerId.current = setInterval(() => {
            setTimer(timer => timer - 1)
        },1000)
        return () => clearInterval(timerId.current)
    }, [])

    useEffect(() =>{
        if (timer <= 0) {
            clearInterval(timerId.current)
            console.log('SOLD')
        }
    }, [timer])

    return (
        <h1>Time Remaining: {timer}</h1>
    );
}