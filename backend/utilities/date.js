const getDate = () => {
  const date = new Date();

  return date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
};

const getTime = () => {
  const date = new Date();

  return date.toLocaleTimeString("en-US", {hour: "numeric", minute: "numeric"});
};

module.exports = {getDate, getTime};
