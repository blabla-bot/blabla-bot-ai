const presets = [
  [
    "@babel/env",
    {
      targets: {
        ie: 11
      },
      useBuiltIns: false
    }
  ]
];

module.exports = {
  presets
};