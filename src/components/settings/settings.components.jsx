import { useDispatch, useSelector } from "react-redux";
import { handleCoordinates, handleForecast } from "redux/slices/settings.slice";
import cityList from "data/city-list.json";
import forecastType from "data/forecast-type.json";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

const Settings = () => {
  const dispatch = useDispatch();
  const selectedCity = useSelector((state) => state.settings.selectedCity);
  const selectedForecast = useSelector((state) => state.settings.selectedForecast);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" sx={{ margin: "0 auto", marginBottom: 4 }}>
        Weather App
      </Typography>
      <FormControl
        fullWidth
        sx={{
          marginBottom: 2,
        }}
      >
        <InputLabel id="city-select-label">City</InputLabel>
        <Select
          labelId="city-select-label"
          id="city-select"
          value={selectedCity}
          label="City"
          onChange={(event) => {
            dispatch(handleCoordinates(event.target.value));
          }}
        >
          {cityList.map((city) => (
            <MenuItem key={city.id} value={city}>
              {city.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <ToggleButtonGroup
        value={selectedForecast}
        exclusive
        fullWidth
        onChange={(event, value) => {
          if (value !== null) {
            dispatch(handleForecast(value));
          }
        }}
        size="small"
        aria-label="forecast-timeframe"
      >
        {forecastType.map((forecast) => (
          <ToggleButton key={forecast.id} value={forecast}>
            <Typography>{forecast.name}</Typography>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
};

export default Settings;
