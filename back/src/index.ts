
import express from "express";
import mongoose from "mongoose";
import expenseRoutes from "./routes/expenseRoutes";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/expenses", {
});

app.use("/expenses", expenseRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});