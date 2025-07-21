const { PORT } = require("./config/env");
const connectDB = require("./config/db");
const app = require("./app");

connectDB();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
