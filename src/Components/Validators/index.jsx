const leasedValidator = (leasedStartDate) => {
  const startDate = "leasedStartDate";
  const actualDate = "actualDate";

  if (startDate > actualDate) {
    return true;
  } else {
    return "The start date of the leased must be earlier than the current date";
  }
};

export default leasedValidator;
