const os = require("os");
const fs = require("fs"); //modulo para archivos
const http = require("http");
const colors = require("colors");

/*console.log("Total Memomry: ", os.totalmem(), " bytes");
console.log("Total Memomry: ", os.totalmem() / 1024 / 1024, " Gigabytes");
*/
// Creando archivos (ruta/nombre.extension, contenido, callback)
/*fs.writeFile("./texto.txt", "Line One", (error) => {
  if (error) console.log(error);
  else console.log("Archivo creado correctamente");
});
console.log("ultima linea de codigo");
*/

//Leyendo archivos
/*fs.readFile("./texto.txt", (err, data) => {
  if (err) console.log(err);
  else console.log(data.toString());
});
*/

const handleServer = (req, res) => {
  res.writeHead(200, "Chido");
  res.write("<h1>Hola Mundo</h1>");
  res.end();
};
const server = http.createServer(handleServer);
server.listen(3000, () => {
  console.log("Server on Port 3000".magenta);
});
