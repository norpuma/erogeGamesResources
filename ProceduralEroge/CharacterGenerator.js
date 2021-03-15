class CharacterTrait extends SugarcubeSerializableObject {
    constructor(traitName, value){
        super()
        this.traitName = traitName
        this.value = value
        this.sutTraits = new Object()
    }
}

class AbstractCharacter extends SugarcubeSerializableObject {
    constructor(){
        super()
    }
}

class Character extends SugarcubeSerializableObject {
    constructor(standardName, standardNamePossessive){
        super()
        if (standardName === undefined){
            throw new Error("Character cannot be created without a name.")
        }
        this.names = new CharacterNames(standardName, standardNamePossessive)
        this.body = new CharacterTrait("body", 0)
        this.personality = new CharacterTrait("personality", 0)
        this.preferences = new CharacterTrait("preferences", 0)
        this.beliefs = new CharacterTrait("beliefs", 0)
        this.skills = new CharacterTrait("skills", 0)
        this.mood = new CharacterTrait("mood", 0)
        this.relationships = new Map()
    }
    static generateNames(characterGender, lastName){
        generateRandomName(characterGender, lastName)
    }
    static generateBody(){}
    static generatePersonality(){}
    static generatePreferences(){}
    static generateBeliefs(){}
    static generateSkills(){}
}

class CharacterNames extends SugarcubeSerializableObject {
    constructor(standardName, standardPossessive){
        super()
        this.standard = standardName
        if (standardPossessive !== undefined){
            this.standardPossessive = standardPossessive
        } else {
            this.standardPossessive = standardName + "'s"
        }
        this.first = this.standard
        this.firstPossessive = this.standardPossessive
        this.last = ""
        // honey, hun, sweetie, sugar, darling, dear, baby, sweetheart, lover, doll, babe, lover-boy, my love, cutie, beautiful, kid, kiddo, girlie, sweetness, princess.
        this.affectionateNames = []
        this.privateNames = []
        // dirtbag, asswipe, motherfucker, scum, degenerate, pig, pervert
        // bitch, cunt, 
        this.offensiveNames = []
        this.teasingNames = []
        // sir, master, madam
        this.respectfulNames = []
        //# master, boss, goddess, my queen, princess
        this.superiorNames = []
    }
    setName(kind, newName, newNamesPossessive){
        this[kind] = newName
        if (newNamesPossessive !== undefined){
            this[kind + "Possessive"] = newNamesPossessive
        } else {
            if (newName != ""){
                this[kind + "Possessive"] = newName + "'s"
            } else {
                this[kind + "Possessive"] = ""
            }
        }
    }
}

function generateRandomAge(){}
