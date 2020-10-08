import { Record as ImmutableRecord } from 'immutable';
/**
 * This factory will return an Immutable Record factory
 * function that will have the props you specify as well
 * as the loading props.
 *
 * Use this to make models that contain data from the server.
 */
const ServerRecord = props => {
  const Record = ImmutableRecord({
    isLoading: false,
    isUpdating: false,
    loadedDate: null,
    error: null,
    ...props,
  });

  Record.prototype.setLoading = function setLoading() {
    return this.merge({
      isLoading: true,
      isUpdating: false,
      loadedDate: null,
      error: null,
    });
  };

  Record.prototype.setLoaded = function setLoaded() {
    return this.merge({
      isLoading: false,
      isUpdating: false,
      loadedDate: new Date().getTime(),
      error: null,
    });
  };

  Record.prototype.unsetLoading = function unsetLoading() {
    return this.merge({
      isLoading: false,
      isUpdating: false,
      loadedDate: null,
      error: null,
    });
  };

  Record.prototype.setError = function setError(errorValue) {
    return new Record().merge({
      isLoading: false,
      isUpdating: false,
      error: errorValue,
    });
  };

  Record.prototype.clearError = function clearError() {
    return this.merge({
      isLoading: false,
      isUpdating: false,
      error: null,
    });
  };

  return Record;
};

export default ServerRecord;
