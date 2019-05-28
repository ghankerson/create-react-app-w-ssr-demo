import express from "express";
import serverRenderer from "./middleware/renderer";
import Loadable from "react-loadable";

const PORT = 4000;
const path = require("path");

const app = express();
const router = express.Router();

router.use("^/$", serverRenderer);

router.use(
  express.static(path.resolve(__dirname, "..", "build"), { maxAge: "30d" })
);

app.use(router);

Loadable.preloadAll().then(() => {
  app.listen(PORT, error => {
    if (error) {
      return console.log("An error happened", error);
    }

    console.log(`Listening on port ${PORT}`);
  });
});
