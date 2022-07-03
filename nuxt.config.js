const pkg = require("./package"); // eslint-disable-line

module.exports = {
  // eslint-disable-line
  mode: "universal",
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  loading: { color: "#3b8070" },
  modules: [],
  build: {
    extend(config, ctx) {}
  }
};
