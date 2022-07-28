import { Container } from "@mui/system";
import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Timer({ isPaused, mode, setMode, cycles, setCycles, setTitle }) {

    const workColor = '#00ADB5';
    const breakColor = '#FF2E63';

    const workTime = 25 * 60;
    const breakTime = 5 * 60;
    const [timeInSeconds, setTimeInSeconds] = useState(mode === "work" ? workTime : breakTime);


    const tick = () => {
        setTimeInSeconds(timeInSeconds - 1);
    }

    const switchMode = () => {
        mode === "work" ? setMode("break") : setMode("work");
        mode === "work" ? setTitle("Break Time") : setTitle("Work Time");
        mode === "work" ? setTimeInSeconds(breakTime) : setTimeInSeconds(workTime);
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
    });

    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    const totalTime = mode === "work" ? workTime : breakTime;
    const percentage = Math.round(timeInSeconds / totalTime * 100);

    return (
        <Container sx={{p:1}}>
            <CircularProgressbar
                value={percentage}
                text={`${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`}
                styles={buildStyles({
                    textColor: mode === 'work' ? workColor : breakColor,
                    pathColor: mode === 'work' ? workColor : breakColor,
                    tailColor: 'rgba(255,255,255,.2)',
                })}
            />
        </Container>
    )
}

export default Timer;