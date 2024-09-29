const express = require("express");
const authRouter = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
