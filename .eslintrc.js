{
    "extends": "airbnb",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    },
    "env": {
        "browser": true,
        "node": true
    },
    "globals": {
      "expect": true,
      "jest": true,
      "it": true,
      "describe": true,
      "beforeAll": true,
      "afterAll": true,
      "alertify": true,
      "beforeEach": true
    },
    "parser": "babel-eslint",
    "plugins": [
        "import",
        "jsx-a11y",
        "react",
        "jest-async"
    ],
    "rules": {
      "react/sort-prop-types": [2, {
        "ignoreCase": false,
        "callbacksLast": false,
      }],
      "react/sort-comp": [2, {
        "order": [
          "lifecycle",
          "/^handle.+$/",
          "/^get.+$/",
          "everything-else",
          "/^render.+$/",
          "render"
        ],
        "groups": {
          "lifecycle": [
            "constructor",
            "displayName",
            "state",
            "contextTypes",
            "childContextTypes",
            "props",
            "propTypes",
            "defaultProps",
            "static-methods",
            "componentWillMount",
            "componentDidMount",
            "componentWillReceiveProps",
            "shouldComponentUpdate",
            "componentWillUpdate",
            "componentDidUpdate",
            "componentWillUnmount"
          ]
        }
      }],
      "wrap-iife": [2, "inside"],
      "react/jsx-uses-react": 2,
      "react/jsx-uses-vars": 2,
      "react/react-in-jsx-scope": 2,
      "quotes": [2, "single"],
      "jsx-quotes": ["error", "prefer-double"],
      "comma-dangle": ["error", "never"],
      "camelcase": [0],
      "import/prefer-default-export": [0, "never"],
      "strict": [2, "never"],
      "arrow-body-style": [0, "never"],
      "jest-async/expect-return": "error",
      "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.spec.js", "**/*.spec.jsx"]}]
    }
}
