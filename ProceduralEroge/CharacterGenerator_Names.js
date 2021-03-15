class CharacterFirstNames {
    constructor(possessiveForm, canBeFirstName, canBeNickname){
        this.possessive = possessiveForm
        this.canBeFirstName = canBeFirstName
        this.canBeNickname = canBeNickname
        this.linkedNicknames = []
        this.linkedFirstNames = []
    }
}

class CharacterLastNames {
    constructor(lastName, associatedFirstName){
        this.lastName = lastName
        this.associatedFirstName = associatedFirstName
    }
}

var femaleStandardNames = []
var maleStandardNames = []
var lastNames = [
    "Akron",
    "Arcturus",
    "Black",
    "Bloom",
    "Brenton",
    "Carver",
    "Castelli",
    "Chatnam",
    "Cherish",
    "Clearing",
    "Collins",
    "Cranston",
    "Crawley",
    "Donner",
    "Dubois",
    "Emerson",
    "Foster",
    "Fust",
    "Green",
    "Greenland",
    "Griffin",
    "Harris",
    "Hauser",
    "Island",
    "Kern",
    "Koch",
    "Leighton",
    "Masters",
    "Michaels",
    "Miller",
    "Nabakova",
    "Norris",
    "Novak",
    "Oslo",
    "Perkins",
    "Platter",
    "Rosen",
    "Richards",
    "Schwarz",
    "Smith",
    "Sommers",
    "Sussman",
    "Templeton",
    "Tennison",
    "Thompson",
    "Trent",
    "Vance",
    "Vennman",
    "Wallace",
    "Walker",
    "Warren",
]

var femaleNameDatabase = {
    "Adria": {
        "possessive": "Adria's",
        "canBeFirstName": true,
        "canBeNickname": true,
        "linkedNicknames": ["Dri"],
        "linkedFirstNames": ["Adriana"],
    },
    "Adriana": {
        "possessive": "Adriana's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Adria", "Dee", "Dri"],
        "linkedFirstNames": [],
    },
    "Al": {
        "possessive": "Al's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Alessandra", "Alexa", "Allie"],
    },
    "Alessa": {
        "possessive": "Alessa's",
        "canBeFirstName": true,
        "canBeNickname": true,
        "linkedNicknames": ["Al", "Allie", "Lessa"],
        "linkedFirstNames": ["Alessandra"],
    },
    "Alessandra": {
        "possessive": "Alessandra's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Al", "Alessa", "Allie", "Lessa", "Sandie", "Sandra"],
        "linkedFirstNames": [],
    },
    "Alexa": {
        "possessive": "Alexa's",
        "canBeFirstName": true,
        "canBeNickname": true,
        "linkedNicknames": ["Allie", "Lexa", "Lexie"],
        "linkedFirstNames": ["Alexandra"],
    },
    "Allie": {
        "possessive": "Allie's",
        "canBeFirstName": true,
        "canBeNickname": true,
        "linkedNicknames": ["Al"],
        "linkedFirstNames": ["Alessandra", "Alexa", "Alexandra"],
    },
    "Amanda": {
        "possessive": "Amanda's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Ames", "Amy", "Mandy"],
        "linkedFirstNames": [],
    },
    "Ames": {
        "possessive": "Ames'",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Amanda"],
    },
    "Amy": {
        "possessive": "Amy's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Amanda"],
    },
    "Andie": {
        "possessive": "Andie's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Andrea"],
    },
    "Andrea": {
        "possessive": "Andrea's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Andie", "Drea"],
        "linkedFirstNames": [],
    },
    "Angelica": {
        "possessive": "Angelica's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Angie"],
        "linkedFirstNames": [],
    },
    "Angelina": {
        "possessive": "Angelina's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Angie", "Gina", "Lina"],
        "linkedFirstNames": [],
    },
    "Angie": {
        "possessive": "Angie's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": ["Angelica", "Angelina"],
        "linkedFirstNames": [],
    },
    "Ann": {
        "possessive": "Ann's",
        "canBeFirstName": true,
        "canBeNickname": true,
        "linkedNicknames": ["Annie"],
        "linkedFirstNames": ["Anna", "Anne"],
    },
    "Anna": {
        "possessive": "Anna's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Ann", "Annie"],
        "linkedFirstNames": [],
    },
    "Anne": {
        "possessive": "Anne's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Annie"],
        "linkedFirstNames": [],
    },
    "Annie": {
        "possessive": "Annie's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Anna", "Anne"],
    },
    "Ari": {
        "possessive": "Ari's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": ["Ariana"],
        "linkedFirstNames": [],
    },
    "Ariana": {
        "possessive": "Ariana's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": [],
        "linkedFirstNames": ["Ari", "Riana"],
    },
    "Ash": {
        "possessive": "Ash's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": ["Ashley"],
        "linkedFirstNames": [],
    },
    "Ashley": {
        "possessive": "Ashley's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": [],
        "linkedFirstNames": ["Ash"],
    },
    "Beth": {
        "possessive": "Beth's",
        "canBeFirstName": true,
        "canBeNickname": true,
        "linkedNicknames": ["Bettie"],
        "linkedFirstNames": ["Bethany", "Elizabeth"],
    },
    "Bethany": {
        "possessive": "Bethany's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Beth", "Bettie"],
        "linkedFirstNames": [],
    },
    "Bettie": {
        "possessive": "Bettie's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Bethany", "Elizabeth"],
    },
    "Camila": {
        "possessive": "Camila's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Cammie", "Mila"],
        "linkedFirstNames": [],
    },
    "Cammie": {
        "possessive": "Cammie's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": ["Camila"],
        "linkedFirstNames": [],
    },
    "Carla": {
        "possessive": "Carla's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Carlie"],
        "linkedFirstNames": [],
    },
    "Carlie": {
        "possessive": "Charlie's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Carla"],
    },
    "Charlotte": {
        "possessive": "Charlotte's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": [],
        "linkedFirstNames": ["Charlie", "Lottie"],
    },
    "Charlie": {
        "possessive": "Charlie's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": ["Charlotte"],
        "linkedFirstNames": [],
    },
    "Dee": {
        "possessive": "Dee's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Adriana"],
    },
    "Drea": {
        "possessive": "Drea's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": [],
        "linkedFirstNames": ["Andrea"],
    },
    "Dri": {
        "possessive": "Dri's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Adriana"],
    },
    "Eliza": {
        "possessive": "Eliza's",
        "canBeFirstName": true,
        "canBeNickname": true,
        "linkedNicknames": ["Liza"],
        "linkedFirstNames": ["Elizabeth"],
    },
    "Elizabeth": {
        "possessive": "Elizabeth's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": [],
        "linkedFirstNames": ["Beth", "Bettie", "Libbie", "Liza"],
    },
    "Gina": {
        "possessive": "Gina's",
        "canBeFirstName": true,
        "canBeNickname": true,
        "linkedNicknames": ["Angelina"],
        "linkedFirstNames": [],
    },
    "Lessa": {
        "possessive": "Lessa's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Alessandra"],
    },
    "Lexa": {
        "possessive": "Lexa's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Alexa", "Alexandra"],
    },
    "Lexie": {
        "possessive": "Lexie's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Alexa", "Alexandra"],
    },
    "Libbie": {
        "possessive": "Libbie's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Elizabeth", "Liberty"],
    },
    "Liberty": {
        "possessive": "Liberty's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Libbie"],
        "linkedFirstNames": [],
    },
    "Lina": {
        "possessive": "Lina's",
        "canBeFirstName": true,
        "canBeNickname": true,
        "linkedNicknames": ["Angelina"],
        "linkedFirstNames": [],
    },
    "Liza": {
        "possessive": "Liza's",
        "canBeFirstName": true,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Eliza", "Elizabeth"],
    },
    "Lottie": {
        "possessive": "Lottie's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": ["Charlotte"],
        "linkedFirstNames": [],
    },
    "Mandy": {
        "possessive": "Mandy's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Amanda"],
    },
    "Mila": {
        "possessive": "Mila's",
        "canBeFirstName": true,
        "canBeNickname": true,
        "linkedNicknames": ["Camila"],
        "linkedFirstNames": [],
    },
    "Riana": {
        "possessive": "Riana's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": ["Ariana"],
        "linkedFirstNames": [],
    },
    "Sandie": {
        "possessive": "Sandie's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Alessandra", "Sandra"],
    },
    "Sandra": {
        "possessive": "Sandra's",
        "canBeFirstName": true,
        "canBeNickname": true,
        "linkedNicknames": ["Sandie"],
        "linkedFirstNames": ["Alessandra"],
    },
    "Tori": {
        "possessive": "Tori's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedLastNames": [],
        "linkedFirstNames": ["Victoria"],
    },
    "Vicky": {
        "possessive": "Vicky's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedLastNames": [],
        "linkedFirstNames": ["Victoria"],
    },
    "Victoria": {
        "possessive": "Victoria's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedLastNames": ["Tori", "Vicky"],
        "linkedFirstNames": [],
    },
}
var maleNameDatabase = {
    "Abe": {
        "possessive": "Abe's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Abraham"],
    },
    "Abraham": {
        "possessive": "Abraham's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": [],
        "linkedFirstNames": ["Abe"],
    },
    "Al": {
        "possessive": "Al's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Alan", "Albert", "Alberto"],
    },
    "Alan": {
        "possessive": "Alan's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Al"],
        "linkedFirstNames": [],
    },
    "Albert": {
        "possessive": "Albert's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Al", "Bert"],
        "linkedFirstNames": [],
    },
    "Alberto": {
        "possessive": "Alberto's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Al", "Beto"],
        "linkedFirstNames": [],
    },
    "Alec": {
        "possessive": "Alec's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": [],
        "linkedFirstNames": [],
    },
    "Alonso": {
        "possessive": "Alonso's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": [],
        "linkedFirstNames": [],
    },
    "August": {
        "possessive": "August's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Augie"],
        "linkedFirstNames": [],
    },
    "Benedict": {
        "possessive": "Benedict's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Benny"],
        "linkedFirstNames": [],
    },
    "Benny": {
        "possessive": "Benny's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Benedict"],
    },
    "Bert": {
        "possessive": "Bert's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Albert"],
    },
    "Beto": {
        "possessive": "Beto's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Alberto", "Roberto"],
    },
    "Boris": {
        "possessive": "Boris'",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": [],
        "linkedFirstNames": [],
    },
    "Brad": {
        "possessive": "Brad's",
        "canBeFirstName": true,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Bradley"],
    },
    "Bradley": {
        "possessive": "Bradley's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Brad"],
        "linkedFirstNames": [],
    },
    "Brian": {
        "possessive": "Brian's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": [],
        "linkedFirstNames": [],
    },
    "Carl": {
        "possessive": "Carl's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": [],
        "linkedFirstNames": [],
    },
    "Carlos": {
        "possessive": "Carlos'",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": [],
        "linkedFirstNames": [],
    },
    "Conrad": {
        "possessive": "Conrad's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": [],
        "linkedFirstNames": [],
    },
    "Chris": {
        "possessive": "Chris'",
        "canBeFirstName": true,
        "canBeNickname": true,
        "linkedNicknames": ["Christian"],
        "linkedFirstNames": [],
    },
    "Christian": {
        "possessive": "Christian's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Chris"],
        "linkedFirstNames": [],
    },
    "Dan": {
        "possessive": "Dan's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Daniel"],
    },
    "Daniel": {
        "possessive": "Daniel's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Dan"],
        "linkedFirstNames": [],
    },
    "Danny": {
        "possessive": "Danny's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Daniel"],
    },
    "Dave": {
        "possessive": "Dave's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["David"],
    },
    "David": {
        "possessive": "David's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Dave"],
        "linkedFirstNames": [],
    },
    "Dean": {
        "possessive": "Dean's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": [],
        "linkedFirstNames": [],
    },
    "Devin": {
        "possessive": "Devin's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": [],
        "linkedFirstNames": [],
    },
    "Doug": {
        "possessive": "Doug's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Douglas"],
    },
    "Douglas": {
        "possessive": "Douglas'",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Doug"],
        "linkedFirstNames": [],
    },
    "Ed": {
        "possessive": "Ed's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Edward"],
    },
    "Eddy": {
        "possessive": "Eddy's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Edward"],
    },
    "Edward": {
        "possessive": "Edward's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Ed", "Eddy", "Ned"],
        "linkedFirstNames": [],
    },
    "Enrique": {
        "possessive": "Enrique's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Rick"],
        "linkedFirstNames": [],
    },
    "Ernest": {
        "possessive": "Ernest's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Ernie"],
        "linkedFirstNames": [],
    },
    "Ernie": {
        "possessive": "Ernie's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Ernest"],
    },
    "Finn": {
        "possessive": "Finn's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Finnegan"],
    },
    "Finnegan": {
        "possessive": "Finnegan's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Finn"],
        "linkedFirstNames": [],
    },
    "Francis": {
        "possessive": "Francis'",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Frank"],
        "linkedFirstNames": [],
    },
    "Frank": {
        "possessive": "Frank's",
        "canBeFirstName": true,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Francis", "Franklin"],
    },
    "Franklin": {
        "possessive": "Franklin's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Frank"],
        "linkedFirstNames": [],
    },
    "Fred": {
        "possessive": "Fred's",
        "canBeFirstName": true,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Frederic"],
    },
    "Freddy": {
        "possessive": "Freddy's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Frederic"],
    },
    "Frederic": {
        "possessive": "Frederic's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Fred", "Freddy"],
        "linkedFirstNames": [],
    },
    "Ned": {
        "possessive": "Ned's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Edward"],
    },
    "Rick": {
        "possessive": "Rick's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Enrique"],
    },
    "Roberto": {
        "possessive": "Roberto's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Beto"],
        "linkedFirstNames": [],
    },
    "Vic": {
        "possessive": "Vic's",
        "canBeFirstName": false,
        "canBeNickname": true,
        "linkedNicknames": [],
        "linkedFirstNames": ["Victor"],
    },
    "Victor": {
        "possessive": "Victor's",
        "canBeFirstName": true,
        "canBeNickname": false,
        "linkedNicknames": ["Vic"],
        "linkedFirstNames": [],
    },
}

var usedNames = []

function populateNameResources(){
    for(let nameResource of femaleNameDatabase.keys()){
        femaleStandardNames.push(nameResource)
    }
    for(let nameResource of maleNameDatabase.keys()){
        maleStandardNames.push(nameResource)
    }
}

function generateRandomLastName(){
    if (State.variables.system === undefined){
        State.variables.system = new Object()
    }
    if (State.variables.system.usedNames === undefined){
        State.variables.system.usedNames = new Object()
    }
    let usedLastNames = State.variables.system.usedNames.keys()
    let random = undefined
    let result = undefined
    let attempts = 0
    const MAX_ATTEMPTS = 10000
    while (result === undefined){
        attempts += 1
        random = Math.floor(Math.random() * lastNames.length)
        result = lastNames[random]
        if (usedLastNames.find(result) !== undefined){
            if (attempts > MAX_ATTEMPTS){
                throw new Error("ERROR: generateRandomLastName: Too many unsuccessful attempts.")
            }
            result = undefined
        }
    }
    usedLastNames.splice(random)
    return result
}

function generateRandomFirstName(characterGender){
    if (State.variables.system === undefined){
        State.variables.system = new Object()
    }
    if (State.variables.system.usedFemaleStandardNames === undefined){
        State.variables.system.usedFemaleStandardNames = new Object()
    }
    if (State.variables.system.usedMaleStandardNames === undefined){
        State.variables.system.usedMaleStandardNames = new Object()
    }
    if (characterGender == Gender.FEMALE){
        let random = undefined
        let result = undefined
        let attempts = 0
        const MAX_ATTEMPTS = 10000
        while (result === undefined){
            attempts += 1
            random = Math.floor(Math.random() * femaleStandardNames.length)
            result = femaleStandardNames[random]
            if (usedFemaleStandardNames.find(result) !== undefined){
                if (attempts > MAX_ATTEMPTS){
                    throw new Error("ERROR: generateRandomFirstName: Too many unsuccessful attempts.")
                }
                result = undefined
            }
        }
        return result
    } else {}
}

function generateRandomName(characterGender, lastName){
    if (State.variables.system === undefined){
        State.variables.system = new Object()
    }
    if (State.variables.system.usedNames === undefined){
        State.variables.system.usedNames = new Object()
    }
    if (lastName === undefined){
        lastName = generateRandomLastName()
    }
    let standardName = generateRandomFirstName(characterGender)

    return names
}
