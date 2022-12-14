import { FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";

import { useClock } from "../Contexts/clockContext";

function Rounds() {

    const { cycles, setCycles } = useClock();

    const onChangeHandler = (e) => {
        if (e.target.value >= 1 && e.target.value <= 5) {
            setCycles(e.target.value);
        } else {
            return;
        }
    }

    return (
        <FormControl size="small">
            <InputLabel color="secondary">
                <Typography variant="button" color="secondary">
                    Rounds
                </Typography>
            </InputLabel>
            <Select
                value={cycles}
                color="secondary"
                label="Rounds"
                onChange={onChangeHandler}
            >
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
                <MenuItem value={4}>Four</MenuItem>
                <MenuItem value={5}>Five</MenuItem>
            </Select>
        </FormControl>
    )
}

export default Rounds;