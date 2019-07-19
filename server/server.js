const express = require("express")
const app = express()
const PORT = 3333
const userCtrl = require("./userCtrl")

app.use(express.json())
app.listen(PORT, () => console.log(`${PORT} is watching you`))

app.get("/api/geneticmaterial", userCtrl.getInitialLib)
app.post("/api/geneticmaterial", userCtrl.addData)
app.delete("/api/geneticmaterial/:id", userCtrl.deleteData)
app.put("/api/geneticmaterial/:id", userCtrl.editName)

app.get("/api/geneticmaterialname", userCtrl.search)