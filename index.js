const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

//clean-co
//el41nfrd9LEhDqb8

const uri =
  "mongodb+srv://clean-co:el41nfrd9LEhDqb8@cluster0.toib1.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run() {
  try {
    await client.connect();
    const servicesCollection = client.db("clean-co").collection("service");

    app.get("/service", async (req, res) => {
      const services = await servicesCollection.find({}).toArray();
      console.log(services);
      res.send(services);
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Running is Server");
});

app.listen(port, () => {
  console.log("CRUD Server is running");
});
