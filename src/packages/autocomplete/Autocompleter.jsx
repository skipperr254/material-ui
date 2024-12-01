import { Typography, TextField, Autocomplete } from "@mui/material"

const top100films = [
    "Batman begins",
    "Interstellar",
    "Mission Impossible II",
    "Mile 22",
    "The Terminator: Dark Fate",
    "Rise of the Skywalker"
]

const Autocompleter = () => {
    return (
        <Autocomplete
            options={top100films}
            renderInput={params => <TextField {...params} label="Movie" />}
            sx={{ width: 300 }}
        />
    )
}

export default Autocompleter