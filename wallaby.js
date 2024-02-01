module.exports = () => ({
  autoDetect: ['vitest'],
  debug: true,
  env: { type: 'node' },
  testFramework: {
    configFile: 'vitest.config.mts',
  },
});
