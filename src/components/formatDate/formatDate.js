const formatDate = date => {
  const dateTransform = () =>
    date
      .substring(0, date.indexOf("T"))
      .replace(/(\d{4})-(\d{1,2})-(\d{1,2})/, function(match, y, m, d) {
        return m + "/" + d + "/" + y;
      });

  if (date === null) {
    return "date not available";
  } else {
    return dateTransform();
  }
};
export default formatDate;
