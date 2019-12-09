let userJutsu = [];
let id = 0;

module.exports = {
    createJu: (req, res) => {
        const {sealOne, sealTwo, sealThree, sealFour, sealFive, sealSix, jutsuName} = req.body;
        console.log(req.body);
        userJutsu.push({
            id: id, 
            sealOne,
            sealTwo,
            sealThree,
            sealFour,
            sealFive,
            sealSix,
            jutsuName
        })
        id++;
        res.status(200).json(userJutsu);
    },

    getJu: (req, res) => {
        res.status(200).json(userJutsu);
    },

    modifyJu: (req, res) => {
        const {sealOne, sealTwo, sealThree, sealFour, sealFive, sealSix, jutsuName} = req.body;
        const updateJutsuID = req.params.id;
        const jutsuIndex = userJutsu.findIndex(jutsu => jutsu.id == updateJutsuID);
        let jutsu = userJutsu[jutsuIndex];

        userJutsu[jutsuIndex] = {
            id: jutsu.id,
            sealOne: sealOne || jutsu.sealOne,
            sealTwo: sealTwo || jutsu.sealTwo,
            sealThree: sealThree || jutsu.sealThree,
            sealFour: sealFour || jutsu.sealFour,
            sealFive: sealFive || jutsu.sealFive,
            sealSix: sealSix || jutsu.sealSix,
            jutsuName: jutsuName || jutsu.jutsuName

        }
        res.status(200).json(userJutsu)
    },

    deleteJu: (req, res) => {
        const {id} = req.params;
        console.log(id);
        const index = userJutsu.findIndex(val => {
            if(val.id == true) {
                return true;
            }
        });
        userJutsu.splice(index, 1);
        res.status(200).json(userJutsu);
    }
}