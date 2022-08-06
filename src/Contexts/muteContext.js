import { createContext, useContext, useState } from "react";

const MuteContext = createContext();

export const useMute = () => {
    return useContext(MuteContext);
}

export const MuteProvider = ({ children }) => {

    const [mute, setMute] = useState(true);

    return (
        <MuteContext.Provider value={{ mute, setMute }}>
            {children}
        </MuteContext.Provider>
    )

}