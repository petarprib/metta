export const formatTime = (dt) => {
  const dtFormat = new Intl.DateTimeFormat("en-GB", {
    timeStyle: "medium",
    timeZone: "UTC",
  });

  return dtFormat.format(new Date(dt * 1e3));
};

export const formatDate = (dt) => {
  const date = new Date(dt * 1000);

  return date.getDate() + "/" + (date.getMonth() + 1);
};
