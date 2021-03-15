class BaseWeeklyExpenses extends SugarcubeSerializableObject {
    constructor(){
        this.lifestyle = 0
        this.rooming = 0
        this.food = 0
        this.appearance = 0
        this.additionalBills = 0
        this.additionalExpenses = 0
    }
    getWeeklyTotal(){
        return this.lifestyle + this.rooming + this.food + this.appearance + this.additionalBills + this.additionalExpenses
    }
}

class SkillRiseModel extends SugarcubeSerializableObject {
    constructor(startLevel = 0, pointsToMaintainPerLevel, pointsToRaisePerLevel, weeksReachingNextLevelPointsToRaisePerLevel){
        this.currentLevel = undefined
        this.weeklyPointsToMaintainLevel = undefined
        this.weeklyPointsForNextLevel = undefined
        this.weeklyPointsEarnedThisWeek = 0
        this.weeksReachingNextLevelPointsCount = 0

        if (pointsToMaintainPerLevel !== undefined){
            this.pointsToMaintainPerLevel = pointsToMaintainPerLevel
        } else {
            this.pointsToMaintainPerLevel = new Array()
            for(let index = 0; index < SkillRiseModel.DEFAULT_POINTS_TO_MAINTAIN_PER_LEVEL.length; index++){
                this.pointsToMaintainPerLevel.push(SkillRiseModel.DEFAULT_POINTS_TO_MAINTAIN_PER_LEVEL[index])
            }
        }
        if (pointsToRaisePerLevel !== undefined){
            this.pointsToRaisePerLevel = pointsToRaisePerLevel
        } else {
            this.pointsToRaisePerLevel = new Array()
            // Starting at index 1 ensures that the points to reach next level are the same as points to maintain next level.
            for(let index = 1; index < this.pointsToMaintainPerLevel.length; index++){
                this.pointsToRaisePerLevel.push(this.pointsToMaintainPerLevel[index])
            }
        }
        if (weeksReachingNextLevelPointsToRaisePerLevel !== undefined){
            this.weeksReachingNextLevelPointsToRaisePerLevel = weeksReachingNextLevelPointsToRaisePerLevel
        } else {
            // Default is number of weeks equal to the level to be reached. E.g.: 1 week to reach level 1, 2 weeks to reach level 2, etc.
            for (let index = 1; index < this.pointsToMaintainPerLevel.length; index++){
                this.weeksReachingNextLevelPointsToRaisePerLevel.push(index)
            }
        }
        this.setLevel(startLevel)
    }
    static DEFAULT_POINTS_TO_MAINTAIN_PER_LEVEL = [0, 2, 5, 10, 20, 40, 80]
    setLevel(level){
        if (level < 0)
            level = 0
        this.currentLevel = level
        if (this.currentLevel < this.pointsToMaintainPerLevel.length){
            this.weeklyPointsToMaintainLevel = this.pointsToMaintainPerLevel[this.currentLevel]
            if (this.currentLevel < this.pointsToRaisePerLevel.length -1)
            this.weeklyPointsForNextLevel = this.pointsToRaisePerLevel[this.currentLevel]
        } else {
            this.weeklyPointsToMaintainLevel = this.pointsToMaintainPerLevel[this.pointsToMaintainPerLevel.length-1]
            this.weeklyPointsForNextLevel = undefined
        }
        this.weeklyPointsEarnedThisWeek = 0
        this.weeksReachingNextLevelPointsCount = 0
    }
    addPointsToWeekTotal(points){
        this.weeklyPointsEarnedThisWeek += points
    }
    calculateWeekResult(){
        if (this.weeklyPointsEarnedThisWeek < this.weeklyPointsToMaintainLevel){
            this.setLevel(this.currentLevel-1)
            return
        }
        if (this.weeklyPointsForNextLevel !== undefined){
            if (this.weeklyPointsEarnedThisWeek >= this.weeklyPointsForNextLevel){
                if (this.weeksReachingNextLevelPointsCount >= this.weeksReachingNextLevelPointsToRaisePerLevel){
                    this.setLevel(this.currentLevel +1)
                } else {
                    this.weeksReachingNextLevelPointsCount += 1
                }
            } else {
                this.weeksReachingNextLevelPointsCount = 0
            }
        }
        this.weeklyPointsEarnedThisWeek = 0
    }
}

class ProtagonistSchedule extends SugarcubeSerializableObject {
    constructor(){
        super()
        this.remainingHoursBudget = 0
        this.remainingMoniesBudget = 0
    }
    static SYSTEM_SCHEDULE_TOTAL_WEEK_HOURS = 7 * 24
}

/* 
    FITNESS - Athletics - Running Pursuit, Running Escape, Dancing
    FITNESS - Endurance - Resist Physical Actions (e.g.: attacks, pain)
    FITNESS - Stealth - Stalking
    FITNESS - Fighting - Capture, Fend Off, Dominate
    FITNESS - Massage
    FITNESS - Cleaning
    FITNESS - Penetration - Thrusting, Receiving
    FITNESS - Anatomy - Mouths, Mammaries, Vaginas, Penises, Anuses
    KNOWLEDGE - Computers - Programming
    KNOWLEDGE - Electronics - Collars
    KNOWLEDGE - Mechanics - Locksmith
    KNOWLEDGE - Medicine - Treating Wounds, Designing Drugs, Piercings, Physiology (muscles, diets)
    KNOWLEDGE - Psychology - Treating Traumas
    KNOWLEDGE - Resolution - Resist Mental Actions (e.g.: arguing)
    KNOWLEDGE - Cooking
    KNOWLEDGE - Slave Grooming
    KNOWLEDGE+ - Math - Accounting
    KNOWLEDGE+ - Chemistry - Drugs
    SOCIAL - Impress - Scare, Seduce, Dominance
    SOCIAL - Diplomacy - Intrigue, Threaten, Arguing, Justification, Entertaining/Conversation, Flattery
    SOCIAL - Arts - Photography, Painting, Tattoos, Music, Poetry
    SOCIAL - Deception
    SOCIAL - Acting
    SOCIAL - Insight - Detect Lies, Discern Emotions, Awareness of own Feelings
    SOCIAL - Composure - Resist Social Attacks (e.g.: emotions; attacks to reputation; temptations)
    SOCIAL - Waiting Tables


# Sex Skills
## Kissing
## Fellatio
## Cunnilingus
## Analingus
## Masturbation
## Handjob
# Fingering
## Breast Play
## Receive Vaginal Penetration
## Receive Anal Penetration
## Perform Vaginal Penetration (easier with an actual cock)
## Perform Oral Penetration
## Perform Anal Penetration
## Sensual Body Language
## Bondage

*/
class CharacterSkills extends SugarcubeSerializableObject {
    constructor(){
        super()
        // The skill maps below have a skill name as a key and a SkillRiseModel as a value.
        this.fitnessSkills = new Map()
        this.knowledgeSkills = new Map()
        this.socialSkills = new Map()
    }
}
