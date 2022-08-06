import { createContext, useContext, useState } from "react";

const ClockContext = createContext();

export const useClock = () => {
    return useContext(ClockContext);
}

export const ClockProvider = ({ children }) => {

    const [isPaused, setIsPaused] = useState(true);
    const [mode, setMode] = useState("work"); //work,break,null
    const [cycles, setCycles] = useState(1);
    const [title, setTitle] = useState("Work Time");

    return (
        <ClockContext.Provider value={{ isPaused, setIsPaused, mode, setMode, cycles, setCycles, title, setTitle }}>
            {children}
        </ClockContext.Provider>
    )
}