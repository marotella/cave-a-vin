//wines


//Route logic

const getWine = (req,res) => {
    res.send("getWine")
}

const createWine = (req,res) => {
    res.send("createWine")
}

module.exports = {
    getWine,
    createWine
}