export default {
  plugins: {
    awesome: {
      options: {},
    },
  },
  qualityGate: {
    rules: [{
      maxFailures: 0,
      fastFail: true,
    }],
  },
};