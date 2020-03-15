module.exports = {
  extends: [
    "stylelint-config-standard",
  ],


  rules: {
    "indentation": 4,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "extend",
        ],
      },
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: [
          "global",
        ]
      }
    ]
  }
};