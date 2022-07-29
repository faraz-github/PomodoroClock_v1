import theme from "./MUI/theme";
import { Container, IconButton, ThemeProvider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

import Header from "./Components/Header";
import Timer from "./Components/Timer";

function App() {

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("work"); //work,break,null
  const [cycles, setCycles] = useState(1);
  const [title, setTitle] = useState("Work Time");


  const onChangeHandler = (e) => {
    if (e.target.value >= 1 && e.target.value <= 5) {
      setCycles(e.target.value);
    } else {
      return;
    }
  }

  useEffect(() => {
    if (cycles < 1) {
      setIsPaused(true);
      setMode("work");
      setCycles(1);
    }
  }, [cycles]);



  return (
    <ThemeProvider theme={theme}>

      <Header cycles={cycles} onChangeHandler={onChangeHandler} />

      <Container maxWidth="sm">
        <Timer isPaused={isPaused} mode={mode} setMode={setMode} cycles={cycles} setCycles={setCycles} setTitle={setTitle} />

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

      </Container>

    </ThemeProvider>
  )

}

export default App;
