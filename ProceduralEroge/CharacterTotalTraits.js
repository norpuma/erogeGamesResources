class CharacterTotalTraits extends SugarcubeSerializableObject {
    constructor(character){
        super()
        this.character = character
    }
    // BODY TRAITS
    static GENDER = "GENDER"
    static AGE_GROUP = "AGE_GROUP"
    static ETHNICITY = "ETHNICITY"
    static FITNESS = "FITNESS"
    static BODY_FAT_BALANCE = "BODY_FAT_BALANCE"
    static BODY_FAT_LEVEL = "BODY_FAT_LEVEL"
    static FACE_ATTRACTIVENESS = "FACE_ATTRACTIVENESS"
    static TALLNESS = "TALLNESS"
    static SHAPELY_BUTT = "SHAPELY_BUTT"
    static BREASTS_SIZE = "BREASTS_SIZE"
    static PENIS_SIZE = "PENIS_SIZE"

    // ATTITUDE TRAITS
    static SMUGNESS = "SMUGNESS" // Guided by CONFIDENCE
    static NICENESS = "NICENESS" // Guided by EMPATHY
    static DECORUM = "DECORUM" // Guided by SEXUAL_LIBERTY
    static CHARM = "CHARM" // Entertaining/Charming
    static DILIGENCE = "DILIGENCE" // Guided by DUTIFULNESS
    static BRAVERY = "BRAVERY" // Guided by COURAGE
    static FLIRTINESS = "FLIRTINESS"

    static GENEROSITY = "GENEROSITY"
    static ROMANTICISM = "ROMANTICISM"
    static BOASTFULNESS = "BOASTFULNESS"
    static FLATTERY = "FLATTERY"
    static HONESTY = "HONESTY"
    static OBSEQUIOUSNESS = "OBSEQUIOUSNESS" // This is a mix of smugness, niceness and submissiveness to people the character sees as superior. Go from NOT to EXCESSIVELY. Most people are MODERATELY.
    // This should be handled by SMUGNESS
    // static HUMILITY = "HUMILITY"
    static IRASCIBILITY = "IRASCIBILITY"
    static WEEPINESS = "WEEPINESS"
    static POLITENESS = "POLITENESS"
    static GOOD_LISTENER = "GOOD_LISTENER"
    static FLATTERING = "FLATTERING"

    // STATUS TRAITS
    static WEALTH = "WEALTH"
    static FASHION = "FASHION"
    static PROFESSIONAL_SKILL = "PROFESSIONAL_SKILL"
    static INFLUENCE = "INFLUENCE"
    static FAME = "FAME"
    static DANGEROUS = "DANGEROUS"
    static VIOLENT = "VIOLENT"
    static ECONOMIC_STABILITY = "ECONOMIC_STABILITY"
    static SLAVING_SOCIETY_STATUS = "SLAVING_SOCIETY_STATUS"
    static EMPLOYMENT_KIND = "EMPLOYMENT_KIND"

    // ADDITIONAL APPEARANCE TRAITS
    static PERSONAL_CARE = "PERSONAL_CARE"
    static HAIR_COLOR = "HAIR_COLOR"
    static HAIR_QUALITIES = "HAIR_QUALITIES"
    static LIFESTYLE_LEVEL = "LIFESTYLE_LEVEL"
    static HOME_WEALTH = "HOME_WEALTH"
    static HOME_STYLE = "HOME_STYLE"
    static HOME_TIDYINESS = "HOME_TIDYINESS"

    static KNOWLEDGE = "KNOWLEDGE"
    static CHARM = "CHARM" // Entertaining/Charming

    static RELATIONSHIP_STATUS = "COMMITTED_RELATIONSHIP"

    static STUDENT = "STUDENT"
    static UNEMPLOYED = "UNEMPLOYED"
    static MENIAL_JOB = "MENIAL_JOB"
    static BLUE_COLLAR_JOB = "BLUE_COLLAR_JOB"
    static WHITE_COLLAR_JOB = "WHITE_COLLAR_JOB"
    static MANAGER_POSITION_JOB = "MANAGER_POSITION_JOB"
    static DIRECTOR_POSITION_JOB = "DIRECTOR_POSITION_JOB"
    static CEO_POSITION_JOB = "CEO_POSITION_JOB"
    
    static getTrait(character, traitKey){
        switch(traitKey){
            // BODY TRAITS
            case CharacterTotalTraits.GENDER:
            case CharacterTotalTraits.AGE_GROUP:
            case CharacterTotalTraits.ETHNICITY:
            case CharacterTotalTraits.FITNESS:
            case CharacterTotalTraits.BODY_FAT_BALANCE:
            case CharacterTotalTraits.BODY_FAT_LEVEL:
            case CharacterTotalTraits.FACE_ATTRACTIVENESS:
            case CharacterTotalTraits.TALLNESS:
            case CharacterTotalTraits.SHAPELY_BUTT:
            case CharacterTotalTraits.BREASTS_SIZE:
            case CharacterTotalTraits.PENIS_SIZE:

            // ATTITUDE TRAITS
            case CharacterTotalTraits.SMUGNESS:
            case CharacterTotalTraits.NICENESS:
            case CharacterTotalTraits.DECORUM:
            case CharacterTotalTraits.CHARM:
            case CharacterTotalTraits.DILIGENCE:
            case CharacterTotalTraits.BRAVERY:
            case CharacterTotalTraits.FLIRTINESS:

            case CharacterTotalTraits.GENEROSITY:
            case CharacterTotalTraits.ROMANTICISM:
            case CharacterTotalTraits.BOASTFULNESS:
            case CharacterTotalTraits.FLATTERY:
            case CharacterTotalTraits.HONESTY:
            case CharacterTotalTraits.OBSEQUIOUSNESS:
            // This should be handled by SMUGNESS
            //     case HUMILITY = "HUMILITY"
            case CharacterTotalTraits.IRASCIBILITY:
            case CharacterTotalTraits.WEEPINESS:
            case CharacterTotalTraits.POLITENESS:
            case CharacterTotalTraits.GOOD_LISTENER:
            case CharacterTotalTraits.FLATTERING:

            // STATUS TRAITS
            case CharacterTotalTraits.WEALTH:
            case CharacterTotalTraits.FASHION:
            case CharacterTotalTraits.PROFESSIONAL_SKILL:
            case CharacterTotalTraits.INFLUENCE:
            case CharacterTotalTraits.FAME:
            case CharacterTotalTraits.DANGEROUS:
            case CharacterTotalTraits.VIOLENT:
            case CharacterTotalTraits.ECONOMIC_STABILITY:
            case CharacterTotalTraits.SLAVING_SOCIETY_STATUS:
            case CharacterTotalTraits.EMPLOYMENT_KIND:

            // ADDITIONAL APPEARANCE TRAITS
            case CharacterTotalTraits.PERSONAL_CARE:
            case CharacterTotalTraits.HAIR_COLOR:
            case CharacterTotalTraits.HAIR_QUALITIES:
            case CharacterTotalTraits.LIFESTYLE_LEVEL:
            case CharacterTotalTraits.HOME_WEALTH:
            case CharacterTotalTraits.HOME_STYLE:
            case CharacterTotalTraits.HOME_TIDYINESS:

            case CharacterTotalTraits.KNOWLEDGE:
            case CharacterTotalTraits.CHARM:

            case CharacterTotalTraits.RELATIONSHIP_STATUS:

            case CharacterTotalTraits.STUDENT:
            case CharacterTotalTraits.UNEMPLOYED:
            case CharacterTotalTraits.MENIAL_JOB:
            case CharacterTotalTraits.BLUE_COLLAR_JOB:
            case CharacterTotalTraits.WHITE_COLLAR_JOB:
            case CharacterTotalTraits.MANAGER_POSITION_JOB:
            case CharacterTotalTraits.DIRECTOR_POSITION_JOB:
            case CharacterTotalTraits.CEO_POSITION_JOB:
            default:
                throw new Error("ERROR: CharactersTotalTraits.getTrait: unable to find trait '" + trait + "' in character '" + character + "'.")
        }
    }
}
