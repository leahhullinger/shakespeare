import formatDate from "../utilities/formatDate";

describe("formatDate Component", () => {
  test("date is formatted", () => {
    expect(formatDate("2016-09-05T23:25:47.642350Z")).toBe("09/05/2016");
  });
  test("date is null", () => {
    expect(formatDate(null)).toBe("date not available");
  });
});
