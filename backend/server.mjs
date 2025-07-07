import { createServer } from "http";
const server = createServer((req, res) => {
  res.end("Ciao a tutti");
});
server.listen(3000, "127.0.0.1", () => {
  console.log(
    "Il server sta funzionando sul http 127.0.0.1 e sulla porta 3000"
  );
});
