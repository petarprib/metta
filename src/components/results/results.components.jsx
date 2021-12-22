import { useSelector } from "react-redux";
import { useGetWeatherQuery } from "services/index.services";
import ForecastList from "components/results/forecast-list.components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ScaleLoader from "react-spinners/ScaleLoader";

const Results = () => {
  const lat = useSelector((state) => state.settings.lat);
  const lon = useSelector((state) => state.settings.lon);
  const exclude = useSelector((state) => state.settings.exclude);

  const { data, error, isFetching } = useGetWeatherQuery(
    { lat, lon, exclude },
    { skip: ![lat, lon, exclude].every(Boolean) }
  );

  let results = <Typography>Check the weather for the desired location and timeframe</Typography>;

  if (isFetching) {
    results = <ScaleLoader />;
  }
  if (error) {
    results = <Typography>{error.data.message}</Typography>;
  }
  if (data) {
    results = <ForecastList data={data} />;
  }

  return <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>{results}</Box>;
};

export default Results;
