import { formatDate } from "utils/date-time.utils";
import ForecastItemWrapper from "components/results/forecast-item-wrapper.components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "mui-image";

const DayForecast = ({ date }) => {
  const {
    dt,
    weather,
    temp: { day, min, max },
    pop,
  } = date;

  return (
    <ForecastItemWrapper>
      <Typography sx={{ minWidth: "40px" }}>{formatDate(dt)}</Typography>
      <Box>
        <Image
          src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
          alt={weather[0].description}
          width={50}
          duration={0}
        />
      </Box>
      <Typography sx={{ minWidth: "25px" }}>{Math.round(day)}°</Typography>
      <Typography sx={{ minWidth: "60px" }}>Max {Math.round(max)}°</Typography>
      <Typography sx={{ minWidth: "56px" }}>Min {Math.round(min)}°</Typography>
      <Typography sx={{ minWidth: "42px" }}>{Math.round(pop * 100)}%</Typography>
    </ForecastItemWrapper>
  );
};

export default DayForecast;
