const Config = {
  contentful: {
    messages: {
      space: '',
      accessToken: '',
      environment: '',
    },
  },
};
if (typeof window !== 'undefined' && window.config) {
  Object.assign(Config, window.config);
}
export { Config };
