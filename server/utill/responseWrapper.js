const success = (statusCode, data) => {
  return {
    statusCode,
    data
  };
};

const error = (statusCode, msg) => {
  return {
    statusCode,
    msg
  };
};

export {
  success,
  error
}