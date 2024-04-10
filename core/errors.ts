export const withErrorHandling = async <T>(delegate: () => Promise<T>, config?: { logError: boolean }): Promise<T> => {
  try {
    return await delegate();
  } catch (e) {
    if (config?.logError) {
      console.log(e);
    }

    throw e;
  }
};
