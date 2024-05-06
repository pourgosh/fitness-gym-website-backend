import app from "./app";

const _PORT = process.env.PORT || 5005;

app.listen(_PORT, async () => {
  try {
    console.log("connected to port 5005");
  } catch (err) {
    console.error(err);
  }
});
