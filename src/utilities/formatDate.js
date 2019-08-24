const formatDate = date => {
  if (date === null) {
    return "date not available";
  }
  // TODO: look for javascript date func
  return date
    .substring(0, date.indexOf("T"))
    .replace(/(\d{4})-(\d{1,2})-(\d{1,2})/, function(match, y, m, d) {
      return m + "/" + d + "/" + y;
    });
};
export default formatDate;
