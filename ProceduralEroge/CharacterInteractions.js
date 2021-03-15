class AbstractInteractionCharacter extends SugarcubeSerializableObject {
    constructor(){
        super()
        this.maxActions = AbstractInteractionCharacter.DEFAULT_MAX_ACTIONS_PER_INTERACTION
        this.expendableResource = 0
        this.interactionTraits = new Map() // Keys are strings and values are instances of CharacterTrait
    }
    static DEFAULT_MAX_ACTIONS_PER_INTERACTION = 6
}

class AbstractCharacterInteraction extends SugarcubeSerializableObject {
    constructor(participants){
        super()
        this.participants = participants
        this.actionCount = 0
    }
}

class AbstractArguableElement extends SugarcubeSerializableObject {
    constructor(){
        super();
        this.effectiveArguments = new Map() // Keys are Argument keys and values are the argument's effectiveness (either VERY_EFFECTIVE, SOMEWHAT_EFFECTIVE or COUNTERPRODUCTIVE).
    }
    static VERY_EFFECTIVE_ARGUMENT = 3
    static SOMEWHAT_EFFECTIVE_ARGUMENT = 1
    static COUNTERPRODUCTIVE_ARGUMENT = -1
    static DEFAULT_ARGUMENT_0_KEY = "DEFAULT_ARGUMENT_0_KEY"
    static DEFAULT_ARGUMENT_1_KEY = "DEFAULT_ARGUMENT_1_KEY"
    static DEFAULT_ARGUMENT_2_KEY = "DEFAULT_ARGUMENT_2_KEY"
    static DEFAULT_ARGUMENT_3_KEY = "DEFAULT_ARGUMENT_3_KEY"
    static DEFAULT_ARGUMENT_4_KEY = "DEFAULT_ARGUMENT_4_KEY"
    static DEFAULT_ARGUMENT_5_KEY = "DEFAULT_ARGUMENT_5_KEY"
    static DEFAULT_ARGUMENT_6_KEY = "DEFAULT_ARGUMENT_6_KEY"
    static DEFAULT_ARGUMENT_7_KEY = "DEFAULT_ARGUMENT_7_KEY"
    static DEFAULT_ARGUMENT_8_KEY = "DEFAULT_ARGUMENT_8_KEY"
    static DEFAULT_ARGUMENT_9_KEY = "DEFAULT_ARGUMENT_9_KEY"
    static DEFAULT_ARGUMENT_10_KEY = "DEFAULT_ARGUMENT_10_KEY"
    static DEFAULT_ARGUMENT_11_KEY = "DEFAULT_ARGUMENT_11_KEY"
    static DEFAULT_ARGUMENT_12_KEY = "DEFAULT_ARGUMENT_12_KEY"
    static DEFAULT_ARGUMENT_13_KEY = "DEFAULT_ARGUMENT_13_KEY"
    static DEFAULT_ARGUMENT_14_KEY = "DEFAULT_ARGUMENT_14_KEY"
    static MAX_DEFAULT_ARGUMENT_KEY_COUNT = 15
    static DEFAULT_NUMBER_OF_ARGUMENTS_PER_ELEMENT = 10
    static DEFAULT_NUMBER_OF_VERY_EFFECIVE_ARGUMENTS = 3
    static DEFAULT_NUMBER_OF_COUNTERPRODUCTIVE_ARGUMENTS = 3
    static generateRandomEffectiveArgumentsTable(){
        let result = new Map()
        let argumentEffectivenessValue = undefined
        let keys = new Array()
        for(let index = 0; index < AbstractArguableElement.DEFAULT_NUMBER_OF_ARGUMENTS_PER_ELEMENT; index++){
            if (index < AbstractArguableElement.DEFAULT_NUMBER_OF_VERY_EFFECIVE_ARGUMENTS){
                argumentEffectivenessValue = AbstractArguableElement.VERY_EFFECTIVE_ARGUMENT
            } else if (index < AbstractArguableElement.DEFAULT_NUMBER_OF_COUNTERPRODUCTIVE_ARGUMENTS){
                argumentEffectivenessValue = AbstractArguableElement.COUNTERPRODUCTIVE_ARGUMENT
            } else {
                argumentEffectivenessValue = AbstractArguableElement.SOMEWHAT_EFFECTIVE_ARGUMENT
            }
            const MAX_ATTEMPTS = 10000
            let random = Math.floor(Math.random() * AbstractArguableElement.MAX_DEFAULT_ARGUMENT_KEY_COUNT)
            for (let attempts = 0; attempts < MAX_ATTEMPTS; attempts++){
                if (keys.find(random) === undefined){
                    keys.push(random)
                    break
                } else {
                    random = Math.floor(Math.random() * AbstractArguableElement.MAX_DEFAULT_ARGUMENT_KEY_COUNT)
                }
            }
            let newKey = "DEFAULT_ARGUMENT_" + random + "_KEY"
            result.set(newKey, argumentEffectivenessValue)
        }
        return 0
    }
}

class FriendlyInteractionCharacter extends AbstractInteractionCharacter {
    constructor(){
        this.maxActions = FriendlyInteractionCharacter.DEFAULT_MAX_FRIENDLY_ACTIONS_PER_INTERACTION
        this.beliefs = new Map() // 
        this.insightsRepository = new Map() // Keys are characters and values are counts of Insights
    }
    static DEFAULT_MAX_FRIENDLY_ACTIONS_PER_INTERACTION = AbstractInteractionCharacter.DEFAULT_MAX_ACTIONS_PER_INTERACTION
}

class FriendlyInteraction extends AbstractCharacterInteraction {
    constructor(participants){
        super(participants)
    }
}
