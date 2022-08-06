import { ThemeProvider } from "@mui/material";
import theme from "./MUI/theme";

import { ClockProvider } from "./Contexts/clockContext"
import { MuteProvider } from "./Contexts/muteContext";

import Header from "./Components/Header";
import Clock from "./Pages/Clock";

function App() {

  return (
    <ThemeProvider theme={theme}>

      <ClockProvider>
        <MuteProvider>

          <Header />
          <Clock />

        </MuteProvider>
      </ClockProvider>

    </ThemeProvider>
  )

}

export default App;
