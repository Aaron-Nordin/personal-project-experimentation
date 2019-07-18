const express = require("express")
const app = express()
const PORT = 3333
const someCtrl = require("./someCtrl")

app.use(express.json())
app.listen(PORT, () => console.log(`${PORT} is watching you`))

app.get("/api/geneticmaterial", someCtrl.getInitialLib)
app.post("/api/geneticmaterial", someCtrl.addData)
app.delete("/api/geneticmaterial/:id", someCtrl.deleteData)
app.put("/api/geneticmaterial/:id", someCtrl.editName)