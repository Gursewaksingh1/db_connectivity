const sql = require("mssql");
const config = {
  user: "hari",
  password: "12345",
  server: "localhost",
  database: "test",
  trustServerCertificate: true,
  options: {
    port: 1434,
  },
};
async function a() {
  try {
    await sql.connect(config);

    var request = new sql.Request();
    request.query("select * from usee", function (err, recordset) {
      if (err) console.log(err);

      // responce in console
      console.log(recordset);
    });
    
  } catch (err) {
    console.log(err);
  }
}
a();
