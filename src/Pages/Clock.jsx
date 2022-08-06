import { useEffect } from "react";

import { Box, Container, IconButton, Typography } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

import { useClock } from "../Contexts/clockContext";

import Timer from "../Components/Timer";

function Clock() {

    const { isPaused, setIsPaused, setMode, cycles, setCycles, title } = useClock();

    useEffect(() => {
        if (cycles < 1) {
            setIsPaused(true);
            setMode("work");
            setCycles(1);
        }
    }, [cycles, setIsPaused, setMode, setCycles]);

    return (
        <Container maxWidth="xs" className="viewportContainer" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box sx={{ width: "100%" }}>
                <Timer />

                <Typography variant="h5" color={"common.white"} textAlign={"center"} gutterBottom>
                    {title}
                </Typography>

                <center>
                    <IconButton color="primary" size="large" onClick={() => setIsPaused(!isPaused)}>
                        {
                            isPaused ? <PlayArrowIcon fontSize="inherit" /> : <PauseIcon fontSize="inherit" />
                        }
                    </IconButton>
                </center>

                <center>
                    <Typography variant="caption" color={"secondary"}>Copyright © Faraz</Typography>
                </center>
            </Box>


        </Container>
    )
}

export default Clock;