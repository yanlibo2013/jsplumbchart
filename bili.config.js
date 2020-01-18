import { uglify } from "rollup-plugin-uglify";
// const uglify =require("rollup-plugin-uglify");
module.exports = {
  banner: true,
  output: {
    dir: "lib"
  },
  plugins: {
    vue: {
      css: true
    }
  }
  // extractCSS: true,
  // minify: true,
  // RollupConfig: {
  //   outputConfig: {},
  //   plugins: [uglify()]
  // }
  // plugins: [
  //   {
  //     vue: {
  //       css: true
  //     }
  //   },
  //   uglify()
  // ]
};
