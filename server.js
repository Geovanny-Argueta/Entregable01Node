const { app } = require("./app");
const { db } = require("./utils/database.utils");

const startServer = async () => {
  try {
    await db.authenticate();
    await db.sync();

    //Set Server to Listes
    const PORT = 4000;
    app.listen(PORT, () => {
      console.log("The Server is running well");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
