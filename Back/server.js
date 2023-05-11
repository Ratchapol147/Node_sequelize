const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

const options = {
  cors: {
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  },
  // path: "/tasana/socketio/socket.io"
};

app.use(cors(options));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ message: "welcome to ratchapol application." });
});

// database
const db = require("./app/models");


// db.sequelize.sync().then(()=>{
//   console.log("เชื่อมต่อสำเร็จ sync . . . . . .");
//   initial();
// })  /mnt/Storage/Dockerfile

// force: true will drop the table if it already exists

db.sequelize.sync({ alter: true }).then(() => {
  console.log("เชื่อมต่อสำเร็จ { alter: true }");
});





const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server in running on PORT ${PORT}`);
});

