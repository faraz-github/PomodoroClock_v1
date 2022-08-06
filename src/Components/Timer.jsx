import { useState, useEffect } from "react";

import { Container } from "@mui/material";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { useClock } from "../Contexts/clockContext";
import { useMute } from "../Contexts/muteContext";

function Timer() {

    const { isPaused, mode, setMode, cycles, setCycles, setTitle } = useClock();
    const { mute } = useMute();

    const workColor = '#00ADB5';
    const breakColor = '#FF2E63';

    const workTime = 25 * 60;
    const breakTime = 5 * 60;
    const [timeInSeconds, setTimeInSeconds] = useState(mode === "work" ? workTime : breakTime);

    const [tickingSound, setTickingSound] = useState("tick");

    const tick = () => {
        if (!mute) {
            if (tickingSound === "tick") {
                const tick = new Audio("assets/sounds/tick.mp3");
                tick.play();
                setTickingSound("tock");
            } else if (tickingSound === "tock") {
                const tock = new Audio("assets/sounds/tock.mp3");
                tock.play();
                setTickingSound("tick");
            }
        }

        setTimeInSeconds(timeInSeconds - 1);
    }

    const switchMode = () => {
        if (!mute) {
            const whistle = new Audio("assets/sounds/whistle.mp3");
            whistle.play();
        }
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
        <Container disableGutters sx={{ pb: 2 }}>
            <CircularProgressbar
                value={percentage}
                text={`${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`}
                styles={buildStyles({
                    textColor: mode === 'work' ? workColor : breakColor,
                    pathColor: mode === 'work' ? workColor : breakColor,
                })}
            />
        </Container>
    )
}

export default Timer;