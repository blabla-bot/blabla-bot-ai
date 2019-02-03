import * as express from "express";
import * as React from "react";
import * as path from "path";
import { renderToString } from "react-dom/server";
import App from "shared/components/App";
import { StaticRouter } from "react-router";
import HtmlTemplate from "./htmlTemplate";

const app = express();
const port = 3000;

app.use("/static", express.static(path.resolve(__dirname, "../static")));

app.get("/*", (req, res) => {
  res.send(
    renderToString(
      <HtmlTemplate>
        <StaticRouter location={req.url} context={{}}>
          <App />
        </StaticRouter>
      </HtmlTemplate>
    )
  );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
