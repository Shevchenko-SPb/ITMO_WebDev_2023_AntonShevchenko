module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "single"],
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  "vue/max-attributes-per-line": ["error",
    {
  "singleline": {
    "max": 1
  },
  "multiline": {
    "max": 1
  },
}]


  }
}