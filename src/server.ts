import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import parserRoutes from "./routes/parser.route";
const app = express();

app.use(
  bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 100 })
);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
initialiseRoutes();

// Start Server: Main point of entry
app.listen(8080, async () => {
  try {
    console.log(`Application listening on port 8080`, {
      timestamp: Date.now(),
    });
  } catch (e) {
    process.exit(1);
  }
});

process.on("SIGINT", async () => {
  console.log("exit process");
  process.exit();
});

process.on("SIGTERM", async () => {
  console.log("terminate process");
  process.exit(0);
});

function initialiseRoutes() {
  app.use("/api", parserRoutes);
}
