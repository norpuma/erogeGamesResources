// Sample dominant sentiment for target towards character.
const WORSHIPING_DEVOTION = "WORSHIPING_DEVOTION"
const DEVOTED_LOVE = "DEVOTED_LOVE"
const LUSTFUL_DESIRE = "LUSTFUL_DESIRE"
const CIRCUMSPECT_CAUTION = "CIRCUMSPECT_CAUTION"
const UNRESTRAINED_PANIC = "UNRESTRAINED_PANIC"
const PLEASED_COMPANIONSHIP = "PLEASED_COMPANIONSHIP"
const PLEASED_OWNERSHIP = "PLEASED_OWNERSHIP"
const POLITE_NEUTRALITY = "POLITE_NEUTRALITY"
const FAKE_INGRATIATION = "FAKE_INGRATIATION"
const DISMISSIVE_SUPERIORITY = "DISMISSIVE_SUPERIORITY"
const SPITEFUL_DISLIKE = "SPITEFUL_DISLIKE"
const RESENTFUL_UPSET = "RESENTFUL_UPSET"
const VIOLENT_HATRED = "VIOLENT_HATRED"
// Sample target reactions to character's approach. This should be guided by the dominant sentiment listed above.
const GREET_WORSHIPFULLY_APPROACH_REACTION = "\"Yes, master.\" capitalizeFirstLetter($target.pronouns.subject) says in greeting as you approach."
const GREET_WORSHIPFULLY_APPROACH_REACTION = "\"Hello, beautiful.\" capitalizeFirstLetter($target.pronouns.subject) says with a big smile as she sees you approach."
const GREET_WITH_LUSTFUL_DESIRE_APPROACH_REACTION = "\"Hello!\" capitalizeFirstLetter($target.pronouns.subject) says, simply, as she bites her lips and looks deep into your eyes as you approach."
const SILENCE_IN_CIRCUMSPECT_CAUTION_APPROACH_REACTION = "capitalizeFirstLetter($target.pronouns.subject) tries to say something, but decides against it as she eyes with guarded caution as you approach."
const COWER_UNRESTRAINED_PANIC_APPROACH_REACTION = "capitalizeFirstLetter($target.pronouns.subject) sees you approach and moves to a corner, as far removed from you as $target.pronouns.subject can, cowering in fear."
const FLEE_UNRESTRAINED_PANIC_APPROACH_REACTION = "capitalizeFirstLetter($target.pronouns.subject) sees you approach and flees with a shriek."
const GREET_CORDIALLY_APPROACH_REACTION = "capitalizeFirstLetter($target.pronouns.subject) greets you cordially and smile as you approach."
const PLEASED_OWNERSHIP_SILENT_APPROVAL_APPROACH_REACTION = "capitalizeFirstLetter($target.pronouns.subject) sees you approach and smiles in a confident manner, satisfied in her sense of power over you, before returning to her activity."
const SMILING_GREETING_IN_FAKE_INGRATIATION_APPROACH_REACTION = "\"Hello, you,\" $target.pronouns.subject greets with an ingratiating smile as she sees you approach."
const GREET_POLITELY_APPROACH_REACTION = "capitalizeFirstLetter($target.pronouns.subject) greets you politely as you approach."
const CHALLENGE_OFFENSIVELY_APPROACH_REACTION = "capitalizeFirstLetter($target.pronouns.subject) see you approach and asks in a challenging attitude: \"What do you want, creep?\""
const OFFEND_DISMISSIVELY_APPROACH_REACTION = "\"Fuck you!\" capitalizeFirstLetter($target.pronouns.subject) snarls as she see you approach before going back to her previous attitude and ignoring you."
const IGNORE_APPROACH_REACTION = "capitalizeFirstLetter($target.pronouns.subject) tries to ignore you, pretending you didn't approach."
const LEAVE_APPROACH_REACTION = "capitalizeFirstLetter($target.pronouns.subject) promptly leaves as she sees you approach."
const CRINGER_APPROACH_REACTION = "capitalizeFirstLetter($target.pronouns.subject) visibly cringes as she sees you approach."
const SHIVER_AND_CONTAIN_TEARS_APPROACH_REACTION = "capitalizeFirstLetter($target.pronouns.subject) shivers and makes a clear approach to hold back tears as she sees you approach."
