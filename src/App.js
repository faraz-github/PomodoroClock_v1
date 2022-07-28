import { Button, Container, FormControl, IconButton, InputLabel, MenuItem, Paper, Select, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

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

  const resetEverything = () => {
    window.location.reload();
  }

  useEffect(() => {
    if (cycles < 1) {
      setIsPaused(true);
      setMode("work");
      setCycles(1);
    }
  }, [cycles]);



  return (
    <Container maxWidth="sm" sx={{ pt: 4 }}>

      <Typography variant="h4" textAlign="center" gutterBottom sx={{
        fontFamily: 'Saira'
      }}>
        Pomodoro Clock
      </Typography>
      <Timer isPaused={isPaused} mode={mode} setMode={setMode} cycles={cycles} setCycles={setCycles} setTitle={setTitle} />

      <Typography variant="h5" gutterBottom textAlign={"center"} sx={{
        fontFamily: 'Saira'
      }}>
        {title}
      </Typography>

      <Paper variant="outlined" sx={{ p: 2, backgroundColor: "#EEEEEE", border: "5px solid #393E46", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
        <FormControl>
          <InputLabel sx={{
            fontFamily: 'Saira'
          }}>
            Rounds
          </InputLabel>
          <Select
            value={cycles}
            label="Rounds"
            onChange={onChangeHandler}
            sx={{ fontFamily: 'Saira' }}
          >
            <MenuItem value={1} sx={{ fontFamily: 'Saira' }}>One</MenuItem>
            <MenuItem value={2} sx={{ fontFamily: 'Saira' }}>Two</MenuItem>
            <MenuItem value={3} sx={{ fontFamily: 'Saira' }}>Three</MenuItem>
            <MenuItem value={4} sx={{ fontFamily: 'Saira' }}>Four</MenuItem>
            <MenuItem value={5} sx={{ fontFamily: 'Saira' }}>Five</MenuItem>
          </Select>
        </FormControl>

        <IconButton onClick={() => setIsPaused(!isPaused)} sx={{ width: "100px", height: "100px", border: "2px dashed #393E46" }}>
          {
            isPaused ? <PlayArrowIcon sx={{ fontSize: 100 }} /> : <PauseIcon sx={{ fontSize: 90 }} />
          }
        </IconButton>

        <Button variant="outlined" color="error" onClick={resetEverything} sx={{ fontFamily: 'Saira' }}>RESET</Button>
      </Paper>


    </Container>
  )

}

export default App;
