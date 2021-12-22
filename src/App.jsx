import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Settings from "components/settings/settings.components";
import Results from "components/results/results.components";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          sx={{
            width: "450px",
            marginTop: 5,
            padding: 5,
          }}
          elevation={5}
        >
          <Settings />
          <Results />
        </Paper>
      </Box>
    </>
  );
};

export default App;
