import HourForecast from "components/results/hour-forecast.components";
import DayForecast from "components/results/day-forecast.components";
import Box from "@mui/material/Box";

const ForecastList = ({ data }) => {
  return (
    <Box sx={{ width: "100%" }}>
      {data.hourly?.slice(0, 24).map((hour) => (
        <HourForecast key={hour.dt} hour={hour} />
      ))}
      {data.daily?.slice(0, 7).map((date) => (
        <DayForecast key={date.dt} date={date} />
      ))}
    </Box>
  );
};

export default ForecastList;
