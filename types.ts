export interface Feedback {
    name: string;
    feedback: string;
  }
  module.exports = {
    // ... other configurations
    module: {
      rules: [
        // ... other rules
        {
          test: /\.worker\.ts$/,
          use: { loader: 'worker-loader' },
        },
      ],
    },
  };