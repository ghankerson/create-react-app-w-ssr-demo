require("ignore-styles");

require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: ["@babel/preset-env", "react-app"],
  plugins: [
    "@babel/syntax-dynamic-import",
    "dynamic-import-node",
    "react-loadable/babel"
  ]
});

require("./index");
