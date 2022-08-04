const formatDate = (date) => {
  const yyyyMMDD = date.split("T");
  return yyyyMMDD[0].replace(/-/gi, ".");
};

export default formatDate;
