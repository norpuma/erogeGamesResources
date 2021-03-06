// Sample locations for "find at" actions. Used such as "Daisy is ${at the pool}."
const POOL_FINDING_AT_DESCRIPTION = "at the pool"
const LIVING_ROOM_FINDING_AT_DESCRIPTION = "in the living room"
const OWN_BEDROOM_FINDING_AT_DESCRIPTION = "in $target.pronouns.possessive bedroom"
const KITCHEN_FINDING_AT_DESCRIPTION = "in the kitchen"
const THE_CLASSROOM_FINDING_AT_DESCRIPTION = "in the classroom"
const GYM_FINDING_AT_DESCRIPTION = "at the gym"
const BAR_FINDING_AT_DESCRIPTION = "at the bar"
const OWN_OFFICE_FINDING_AT_DESCRIPTION = "in $target.pronouns.possessive office"

// Sample activities for "find at" actions. Used such as "She is ${reading a book}."
const READING_A_BOOK_FINDING_AT_DESCRIPTION = "reading a book"
const FIDDLING_WITH_OWN_PHONE_FINDING_AT_DESCRIPTION = "fiddling with $target.pronouns.possessive pone"
const PLAYING_VIDEOGAMES_FINDING_AT_DESCRIPTION = "playing videogames"
const WATCHING_A_MOVIE_FINDING_AT_DESCRIPTION = "watching a movie"
const WATCHING_PORN_FINDING_AT_DESCRIPTION = "watching porn"
const ASLEEP_FINDING_AT_DESCRIPTION = "asleep"
const STUDYING_FINDING_AT_DESCRIPTION = "studying"
const DOING_ACCOUNTING_FINDING_AT_DESCRIPTION = "doing some accounting"
const CLEANING_FINDING_AT_DESCRIPTION = "cleaning"
const USING_OWN_COMPUTER_FINDING_AT_DESCRIPTION = "using $target.pronouns.possessive computer"
const LOOKING_AT_CEILING_BORED_FINDING_AT_DESCRIPTION = "looking at the ceiling, bored"
const PATIENTLY_WAITING_FINDING_AT_DESCRIPTION = "patiently waiting"
const WORKING_ON_PROJECT_FINDING_AT_DESCRIPTION = "working on a project"
const WORKING_OUT_FINDING_AT_DESCRIPTION = "working out"
const TAKING_A_SHOWER_AT_DESCRIPTION = "taking a shower"
const CHANGING_CLOTHES_AT_DESCRIPTION = "changing clothes"
const DOING_YOGA_FINDING_AT_DESCRIPTION = "doing yoga"
const DOING_CALISTHENICS_FINDING_AT_DESCRIPTION = "doing calisthenics"
const COOKING_FINDING_AT_DESCRIPTION = "cooking"
const WASHING_DISHES_FINDING_AT_DESCRIPTION = "washing dishes"
const EATING_FINDING_AT_DESCRIPTION = "eating a meal"

// // Bedroom Activities
var bedroomActivities = [READING_A_BOOK_FINDING_AT_DESCRIPTION, FIDDLING_WITH_OWN_PHONE_FINDING_AT_DESCRIPTION, ASLEEP_FINDING_AT_DESCRIPTION, STUDYING_FINDING_AT_DESCRIPTION, DOING_ACCOUNTING_FINDING_AT_DESCRIPTION, CLEANING_FINDING_AT_DESCRIPTION, USING_OWN_COMPUTER_FINDING_AT_DESCRIPTION, LOOKING_AT_CEILING_BORED_FINDING_AT_DESCRIPTION, WORKING_OUT_FINDING_AT_DESCRIPTION]
var sharedBedroomActivities = []
var singleBedroomActivities = []
// // Living Room Activities
var livingRoomActivities = [READING_A_BOOK_FINDING_AT_DESCRIPTION, FIDDLING_WITH_OWN_PHONE_FINDING_AT_DESCRIPTION, PLAYING_VIDEOGAMES_FINDING_AT_DESCRIPTION, WATCHING_A_MOVIE_FINDING_AT_DESCRIPTION, ASLEEP_FINDING_AT_DESCRIPTION, STUDYING_FINDING_AT_DESCRIPTION, DOING_ACCOUNTING_FINDING_AT_DESCRIPTION, CLEANING_FINDING_AT_DESCRIPTION, LOOKING_AT_CEILING_BORED_FINDING_AT_DESCRIPTION, WORKING_OUT_FINDING_AT_DESCRIPTION]
// // Pool Activities
var poolActivities = [READING_A_BOOK_FINDING_AT_DESCRIPTION, FIDDLING_WITH_OWN_PHONE_FINDING_AT_DESCRIPTION, ASLEEP_FINDING_AT_DESCRIPTION, CLEANING_FINDING_AT_DESCRIPTION, WORKING_OUT_FINDING_AT_DESCRIPTION]
// // Kitchen Activities
var kitchenActivities = [CLEANING_FINDING_AT_DESCRIPTION]
// // Classroom Activities
var classroomActivities = [ASLEEP_FINDING_AT_DESCRIPTION, LOOKING_AT_CEILING_BORED_FINDING_AT_DESCRIPTION]
var classroomWithoutClassActivities = [READING_A_BOOK_FINDING_AT_DESCRIPTION, FIDDLING_WITH_OWN_PHONE_FINDING_AT_DESCRIPTION, STUDYING_FINDING_AT_DESCRIPTION]
var classroomWithOngoingClassActivities = [FIDDLING_WITH_OWN_PHONE_FINDING_AT_DESCRIPTION]
// // Gym Activities
var gymActivities = [FIDDLING_WITH_OWN_PHONE_FINDING_AT_DESCRIPTION, LOOKING_AT_CEILING_BORED_FINDING_AT_DESCRIPTION, WORKING_OUT_FINDING_AT_DESCRIPTION]
// // Bar Activities
var barActivities = [FIDDLING_WITH_OWN_PHONE_FINDING_AT_DESCRIPTION, LOOKING_AT_CEILING_BORED_FINDING_AT_DESCRIPTION]
// // Office Activities
var officeActivities = [WORKING_ON_PROJECT_FINDING_AT_DESCRIPTION, FIDDLING_WITH_OWN_PHONE_FINDING_AT_DESCRIPTION, ASLEEP_FINDING_AT_DESCRIPTION, DOING_ACCOUNTING_FINDING_AT_DESCRIPTION, LOOKING_AT_CEILING_BORED_FINDING_AT_DESCRIPTION]
