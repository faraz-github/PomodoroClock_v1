import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';

import Rounds from "./Rounds";

export default function ButtonAppBar({ cycles, onChangeHandler }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0}>
                <Container disableGutters>
                    <Toolbar>
                        <Typography variant="h6" color={"secondary"} component="div" sx={{ flexGrow: 1 }}>
                            Pomodoro Clock
                        </Typography>
                        <Rounds cycles={cycles} onChangeHandler={onChangeHandler} />
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
