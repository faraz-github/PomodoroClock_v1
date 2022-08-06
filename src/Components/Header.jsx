import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

import { useMute } from '../Contexts/muteContext';

import Rounds from "./Rounds";

export default function ButtonAppBar() {

    const { mute, setMute } = useMute();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0}>
                <Container disableGutters>
                    <Toolbar>
                        <Typography variant="h6" color={"secondary"} component="div" sx={{ flexGrow: 1 }}>
                            Pomodoro Clock
                        </Typography>
                        <IconButton color={mute ? 'default' : 'secondary'} sx={{ mx: 1 }} onClick={() => setMute(!mute)}>
                            {
                                mute
                                    ? <VolumeOffIcon />
                                    : <VolumeUpIcon />
                            }
                        </IconButton>
                        <Rounds />
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
