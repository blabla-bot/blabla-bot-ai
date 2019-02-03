import * as React from "react";

const HtmlTemplate: React.FC = ({ children }) => (
  <html>
    <head>
      <title>Blabla-bot</title>
    </head>
    <body>
      <div id="react-app">{children}</div>
      <script src="/static/dist/client.js" />
    </body>
  </html>
);

export default HtmlTemplate;
