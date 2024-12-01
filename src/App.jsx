import { Link as RouterLink, Routes, Route} from "react-router-dom"
import { CssBaseline, Button } from "@mui/material"

import Autocompleter from "./packages/autocomplete/Autocompleter"

function App() {
  return (
    <>
      <CssBaseline />
      <Button component={RouterLink} to="/">Home</Button>
      <Button component={RouterLink} to="/autocomplete">Autocomplete</Button>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/autocomplete" element={<Autocompleter/>} />
      </Routes>
    </>
  )
}

export default App
