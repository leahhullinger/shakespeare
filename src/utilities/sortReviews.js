const sortReviews = reviews => {
  const sorted = reviews.sort((a, b) => {
    return new Date(b.publish_date) - new Date(a.publish_date);
  });
  return sorted;
};

export default sortReviews;
