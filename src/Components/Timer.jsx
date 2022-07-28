import { useState, useEffect } from "react";

function Timer({ isPaused, mode, setMode, cycles, setCycles }) {

    const workTime = 25;
    const breakTime = 5;
    const [timeInSeconds, setTimeInSeconds] = useState(mode === "work" ? workTime * 60 : breakTime * 60);
    const [title, setTitle] = useState(mode === "work" ? "Keep working" : "Take a break");

    const tick = () => {
        setTimeInSeconds(timeInSeconds - 1);
    }

    const switchMode = () => {
        mode === "work" ? setMode("break") : setMode("work");
        mode === "work" ? setTitle("Take a break") : setTitle("Keep working");
        mode === "work" ? setTimeInSeconds(breakTime * 60) : setTimeInSeconds(workTime * 60);
    }

    const switchCycles = () => {
        if (mode === "break") {
            setCycles(cycles - 1);
        } else {
            return;
        }
    }

    useEffect(() => {
        const timerInterval = setInterval(() => {
            if (isPaused) {
                return
            } else if (isPaused === false) {
                tick();
                if (timeInSeconds === 0) {
                    switchMode();
                    switchCycles();
                }
            }
        }, 1000);

        return () => clearInterval(timerInterval);
    })

    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    return (
        <div>
            <center><h5>{title}</h5></center>
            <center>
                {minutes + " : " + seconds}
            </center>
        </div>
    )
}

export default Timer;