// IMPORT
const express = require("express");
const app = express();
const path = require("path");
const adminRouter = require("./routes/admin.js");
const shopRouter = require("./routes/shop.js");

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "notFound.html"));
});

app.listen(3000, () => {
  console.log("server is running on PORT : 3000");
});
