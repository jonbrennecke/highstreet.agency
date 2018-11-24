// @flow

export const log = async (message: string) => {
  // eslint-disable-next-line
  console.log(message);
};

export const logError = async (error: Error) => {
  // eslint-disable-next-line
  console.log(error);
};

export const logErrorMessage = async (errorMessage: string) => {
  // eslint-disable-next-line
  console.log(errorMessage);
};
