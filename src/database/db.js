import mongoose from "mongoose";

const connectDatabase = () => {
  console.log("wait connecting to the database");

  mongoose
    .connect(
      "mongodb+srv://jackson:031019maepai@cluster0.d0nfwjz.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB atlas Connectd"))
    .catch((erro) => console.error(erro.message));
};
export default connectDatabase;
