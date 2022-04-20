const http = require("http");
require("dotenv").config();

const requestHandler = (request, response) => {
  console.log(request.url);
  if (request.url === "/") {
    response.end(
      `I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY}, and I love ${process.env.MY_LANGUAGE}`
    );
  }
};
const server = http.createServer(requestHandler);
server.listen(`${process.env.SERVER_PORT}`, (err) => {
  if (err) {
    console.error("somthings bad happend");
  } else {
    console.log(`server is listening on ${process.env.SERVER_PORT}`);
  }
});
