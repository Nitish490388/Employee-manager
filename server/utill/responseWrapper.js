const success = (statusCode, data) => {
  return {
    statusCode,
    data
  };
};

const error = (statusCode, msg) => {
  return {
    statusCode,
    error
  };
};

export {
  success,
  error
}