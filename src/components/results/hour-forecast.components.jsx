import { formatTime } from "utils/date-time.utils";
import ForecastItemWrapper from "components/results/forecast-item-wrapper.components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "mui-image";

const HourForecast = ({ hour }) => {
  const { dt, weather, temp, feels_like, pop } = hour;

  return (
    <ForecastItemWrapper>
      <Typography sx={{ minWidth: "42px" }}>{formatTime(dt).slice(0, -3)}</Typography>
      <Box>
        <Image
          src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
          alt={weather[0].description}
          width={50}
          duration={0}
        />
      </Box>
      <Typography sx={{ minWidth: "25px" }}>{Math.round(temp)}°</Typography>
      <Typography sx={{ minWidth: "100px" }}>Feels like {Math.round(feels_like)}°</Typography>
      <Typography sx={{ minWidth: "42px" }}>{Math.round(pop * 100)}%</Typography>
    </ForecastItemWrapper>
  );
};

export default HourForecast;
