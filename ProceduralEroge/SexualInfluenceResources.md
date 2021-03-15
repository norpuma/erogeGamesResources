# To successfully influence a target:
- There are always 10 options.
- The character always choses 3 options at a time.
- There are usually 3 great option, 3 bad options, and 4 reasonable options.
- Great options are worth 3 points of influence or 4 points of influence if presented at the right position (1st, 2nd, or 3rd position).
- Bad option are worth -1 point of influence or -2 points if presented at the worst position (1st, 2nd or 3rd position).
- Outside elements can affect a final influence score (such as Traits or a history or previous successes).
- Final Result Levels Terrible, Unacceptable, Poor, Reasonable, Passable, Good, Great, Amazing
- A final result of less than 0 points is terrible, at least 0 points is bad, at least 3 points is reasonable, at least 6 points is passable, at least 9 points is good, at least 12 points is great
- A final result of less than 0 points is terrible, at least 0 points is bad, at least 5 points is reasonable, at least 10 points is passable, at least 15 points is good, at least 20 points is great

- There are physical stimuli and psychological stimuli.
- Characters usually take 3 physical and 3 psychological and get reactions to them.
- Poor and Reasonable results allow the character to stop without too much backlash or to move to a next level with a proportional penalty.
- Passable results allow the character to move to a new level.
- Better than Passable results allow the character to move to a new level with a proportional bonus.
- Characters may elect to skip a physical or psychological action.
- "For your opening, you..."
- "You follow it up with..."
- "You conclude with..."; "Slowing down, you..."

- Flirting
- Making Out
- Sexual Contact
- Penetrative Sex
- Intense Arousal
- Extreme Arousal



# Physical Stimualation
            static KISS_SOFT_HEAD = {
                sample: "Kate softly kisses Jack's head.",
                //structure: [PhysicalStimulatingActsVerbAndObject.Verbs.SentenceStructure.ACTOR, PhysicalStimulatingActsVerbAndObject.Verbs.SentenceStructure.PRE_VERB_MODIFIER, PhysicalStimulatingActsVerbAndObject.Verbs.SentenceStructure.VERB, PhysicalStimulatingActsVerbAndObject.Verbs.SentenceStructure.PRE_BODY_PART_MODIFIER, PhysicalStimulatingActsVerbAndObject.Verbs.SentenceStructure.BODY_PART, PhysicalStimulatingActsVerbAndObject.Verbs.SentenceStructure.POST_BODY_PART_MODIFIER],
                //instrument: PhysicalStimulatingActsVerbAndObject.BodyPart.LIPS,
                verbModifier: "softly",
                //verb: ActionVerb.KISS,
                //bodyPart: BodyPart.HEAD,
            }
            static KISS_SOFT_CHEEK                      = 1     // Mouth, Kiss, Soft, Head, Cheek;                  Kate softly kisses Jack's cheek.
            static KISS_SOFT_LIPS                       = 2     // Mouth, Kiss, Soft, Head, Mouth;                  Kate softly kisses Jack's mouth.
            static KISS_SOFT_MOUTH                      = 3     // Mouth, Kiss, Soft, Head, Mouth;                  Kate softly kisses Jack's mouth.
            static KISS_SOFT_HAND                       = 4     // Mouth, Kiss, Soft, Hand;                         Kate softly kisses Jack's hand.
            static KISS_SOFT_CHEST                      = 5     // Mouth, Kiss, Soft, Chest;                        Kate softly kisses Jack's chest.
            static KISS_SOFT_BREAST                     = 6     // Mouth, Kiss, Soft, Chest, Breast;                Kate softly kisses Jack's breast.
            static KISS_SOFT_THIGHS                     = 7     // Mouth, Kiss, Soft, Thighs;                       Kate softly kisses Jack's thighs.
            static KISS_SOFT_THROAT                     = 8     // Mouth, Kiss, Soft, Throat;                       Kate softly kisses Jack's throat.
            static KISS_SOFT_BUTTOCKS                   = 9     // Mouth, Kiss, Soft, Ass, Buttocks;                Kate softly kisses Jack's buttocks.
            static KISS_SOFT_CROTCH                     = 10    // Mouth, Kiss, Soft, Crotch;                       Kate softly kisses Jack's crotch.
            static KISS_SOFT_VULVA                      = 11    // Mouth, Kiss, Soft, Crotch, Vulva;                Kate softly kisses Jack's vulva. / Kate softly kisses Jack's pussy.
            static KISS_SOFT_TOY                        = 12    // Mouth, Kiss, soft, Toy;                          Kate softly kisses Jack's toy.
            static KISS_INTENSE_MOUTH                   = 13    // Mouth, Kiss, Intense, Mouth;                     Kate kisses Jack's mouth hard.
            static KISS_INTENSE_THIGHS                  = 14    // Mouth, Kiss, Intense, Thighs;                    Kate kisses Jack's thighs hard.
            static KISS_INTENSE_THROAT                  = 15    // Mouth, Kiss, Intense, Throat;                    Kate kisses Jack's throat hard.
            static KISS_INTENSE_CROTCH                  = 16    // Mouth, Kiss, Intense, Crotch;                    Kate kisses Jack's crotch hard.
            static LICK_NIPPLES                         = 17    // Mouth, Lick, Chest, Nipples;                     Kate licks Jack's nipples.
            static LICK_ANUS                            = 18    // Mouth, Lick, Ass, Anus;                          Kate licks Jack's anus. / Kate licks Jack's asshole. / Kate licks Jack's butthole.
            static LICK_VULVA                           = 19    // Mouth, Lick, Crotch, Vulva;                      Kate licks Jack's vulva. / Kate licks Jack's pussy.
            static LICK_PENIS_SHAFT                     = 20    // Mouth, Lick, Crotch, Penis, Shaft;               Kate licks Jack's penis shaft. / Kate licks Jack's shaft.
            static LICK_PENIS_GLANS                     = 21    // Mouth, Lick, Crotch, Penis, Glans;               Kate licks Jack's penis glans. / Kate licks Jack's glans. / Kate licks Jack's cockhead.
            static LICK_SCROTUM                         = 22    // Mouth, Lick, Crotch, Scrotum;                    Kate licks Jack's scrotum. / Kate licks Jack's balls. / Kate licks Jack's ballsack.
            static LICK_TOY                             = 23    // Mouth, Lick, Toy;                                Kate licks Jack's toy.
            static SUCK_SOFT_FINGER                     = 24    // Mouth, Suck, Soft, Hands, Fingers;               Kate softly sucks on Jack's finger.
            static SUCK_SOFT_NIPPLES                    = 25    // Mouth, Suck, Soft, Breasts, Nipples;             Kate softly sucks on Jack's nipples.
            static SUCK_SOFT_TOES                       = 26    // Mouth, Suck, Soft, Feet, Toes;                   Kate softly sucks on Jack's toes.
            static SUCK_SOFT_CLIT                       = 27    // Mouth, Suck, Soft, Crotch, Clit;                 Kate softly sucks on Jack's clit.
            static SUCK_SOFT_GLANS                      = 28    // Mouth, Suck, Soft, Crotch, Penis, Glans;         Kate softly sucks on Jack's glans. / Kate softly sucks on Jack's glans. / Kate softly sucks on Jack's cockhead.
            static SUCK_SOFT_SCROTUM                    = 29    // Mouth, Suck, Soft, Crotch, Scrotum;              Kate softly sucks on Jack's scrotum. / Kate softly sucks on Jack's balls.
            static SUCK_SOFT_TOY                        = 30    // Mouth, Suck, Soft, Crotch, Toy;                  Kate softly sucks on Jack's toy.
            static SUCK_FINGER                          = 31    // Mouth, Suck, Hands, Fingers;                     Kate sucks on Jack's finger.
            static SUCK_NIPPLES                         = 32    // Mouth, Suck, Breasts, Nipples;                   Kate sucks on Jack's nipples.
            static SUCK_TOES                            = 33    // Mouth, Suck, Feet, Toes;                         Kate sucks on Jack's toes.
            static SUCK_CLIT                            = 34    // Mouth, Suck, Crotch, Clit;                       Kate sucks on Jack's clit.
            static SUCK_PENIS                           = 35    // Mouth, Suck, Crotch, Penis;                      Kate sucks on Jack's penis. / Kate sucks on Jack's dick. / Kate sucks on Jack's cock.
            static SUCK_SCROTUM                         = 36    // Mouth, Suck, Crotch, Scrotum;                    Kate sucks on Jack's scrotum. / Kate sucks on Jack's balls.
            static SUCK_TOY                             = 37    // Mouth, Suck, Crotch, Toy;                        Kate sucks on Jack's toy.
            static SUCK_DEEPTHROAT_PENIS                = 38    // Mouth, Suck, Deepthroat, Penis;                  Kate deepthroats Jack's penis.
            static SUCK_DEEPTHROAT_DILDO                = 39    // Mouth, Suck, Deepthroat, Toy, Dildo;             Kate deepthroats Jack's dildo. (dildo accepts adjectives like fat, big, long, black, purple, dragon-)
            static SUCK_DEEPTHROAT_STRAPON              = 40    // Mouth, Suck, Deepthroat, Toy, Strapon;           Kate deepthroats Jack's strapon.
            static BITE_SOFT_BREASTS                    = 41    // Moutn, Bite, Soft, Chest, Breasts;               Kate softly bites on Jack's breasts.
            static BITE_SOFT_NIPPLES                    = 42    // Moutn, Bite, Soft, Chest, Nipples;               Kate softly bites on Jack's nipples.
            static BITE_SOFT_THIGHS                     = 43    // Mouth, Bite, Soft, Thighs;                       Kate softly bites on Jack's thighs.
            static BITE_NIPPLES                         = 44    // Mouth, Bite, Chest, Nipples;                     Kate bites not so softly on Jack's nipples.
            static SQUEEZE_BREASTS                      = 45    // Hands, Squeeze, Chest, Breasts;                  Kate squeezes Jack's breasts.
            static SQUEEZE_BUTTOCKS                     = 46    // Hands, Squeeze, Ass, Buttocks;                   Kate squeezes Jack's butocks. / Kate squeezes Jack's butt. / Kate squeezes Jack's ass.
            static SQUEEZE_THROAT                       = 47    // Hands, Squeeze, Throat;                          Kate squeezes Jack's throat.
            static SQUEEZE_SCROTUM                      = 48    // Hands, Squeeze, Crotch, Scrotum;                 Kate squeezes Jack's scrotum. / Kate squeezes Jack's balls.
            static MASSAGE_SHOULDERS                    = 49    // Hands, Massage, Arms, Shoulders;                 Kate massages Jack's shoulders.
            static MASSAGE_FEET                         = 50    // Hands, Massage, Feet;                            Kate massages Jack's feet.
            static MASSAGE_SCROTUM                      = 51    // Hands, Massage, Crotch, Scrotum;                 Kate massages Jack's scrotum. / Kate massages Jack's balls.
            static PINCH_SOFT_NIPPLES                   = 52    // Hands, Pinch, Soft, Chest, Nipples;              Kate softly pinches Jack's nipples.
            static PINCH_HARD_NIPPLES                   = 53    // Hands, Pinch, Hard, Chest, Nipples;              Kate pinches Jack's nipples hard.
            static PAT_HEAD                             = 54    // Hands, Pat, Head;                                Kate pats Jack's head.
            static PAT_FACE                             = 55    // Hands, Pat, Head, Face;                          Kate gently pats Jack's face.
            static PAT_BUTTOCKS                         = 56    // Hands, Pat, Ass, Buttocks;                       Kate pats Jack's buttocks. / Kate pats Jack's ass.
            static PAT_ANUS                             = 57    // Hands, Pat, Ass, Anus;                           Kate pats Jack's anus with a finger. / Kate gently pats a finger against Jack's asshole.
            static PAT_VULVA                            = 58    // Hands, Pat, Crotch, Vulva;                       Kate softly pats Jack's vulva. / Kate softly pats Jack's pussy.
            static PAT_SCROTUM                          = 59    // Hands, Pat, Crotch, Scrotum;                     Kate softly pats Jack's scrotum. / Kate softly pats Jack's balls. / Kate softly pats Jack's ballsack.
            static SLAP_FACE                            = 60    // Hands, Slap, Head, Face;                         Kate slaps Jack's face.
            static SLAP_BREASTS                         = 61    // Hands, Slap, Chest, Breasts;                     Kate slaps Jack's breasts.
            static SLAP_BUTTOCKS                        = 62    // Hands, Slap, Ass, Buttocks;                      Kate slaps Jack's buttocks. / Kate slaps Jack's butt. / Kate slaps Jack's ass.
            static SLAP_VULVA                           = 63    // Hands, Slap, Crotch, Vulva;                      Kate slaps Jack's vulva. / Kate slaps Jack's pussy.
            static SLAP_HARD_FACE                       = 64    // Hands, Slap, Hard, Head, Face;                   Kate slaps Jack's face hard. / Kate gives Jack's face a hard slap. / Kate backhands Jack in the face.
            static SLAP_HARD_BREASTS                    = 65    // Hands, Slap, Hard, Chest, Breasts;               Kate slaps Jack's breasts hard.
            static SLAP_HARD_BUTTOCKS                   = 66    // Hands, Slap, Hard, Ass, Buttocks;                Kate slaps Jack's buttocks hard. / Kate slaps Jack's butt hard. / Kate slaps Jack's ass hard. / Kate gives Jack's ass a hard slap.
            static SLAP_HARD_VULVA                      = 67    // Hands, Slap, Hard, Crotch, Vulva;                Kate slaps Jack's vulva hard. / Kate slaps Jack's pussy hard. / Kate gives Jack's pussy a hard slap.
            static SLAP_HARD_CLIT                       = 68    // Hands, Slap, Hard, Crotch, Clit;                 Kate slaps Jack's clit hard. / Kate gives Jack's clit a hard slap.
            static SLAP_HARD_SCROTUM                    = 69    // Hands, Slap, Hard, Crotch, Scrotum;              Kate slaps Jack's scrotm hard. / Kate gives Jack's balls a hard slap.
            static CARESS_CHEEKS                        = 70    // Hands, Caress, Head, Cheeks;                     Kate caresses Jack's cheeks.
            static CARESS_LIPS                          = 71    // Hands, Caress, Mouth, Lips;                      Kate gently caresses Jack's lips.
            static CARESS_STOMACH                       = 72    // Hands, Caress, Mid-Section, Stomach;             Kate caresses Jack's stomach. / Kate gently glides a hand over Jack's stomach.
            static CARESS_CHEST                         = 73    // Hands, Caress, Chest;                            Kate caresses Jack's chest.
            static CARESS_BREASTS                       = 74    // Hands, Caress, Chest, Breasts;                   Kate caresses Jack's breasts.
            static CARESS_NIPPLES                       = 75    // Hands, Caress, Cheast, Nipples;                  Kate gently caresses Jack's nipples.
            static CARESS_THIGHS                        = 76    // Hands, Caress, Thighs;                           Kate gently caresses Jack's thighs.
            static CARESS_ANUS                          = 77    // Hands, Caress, Ass, Anus;                        Kate teases Jack's anus with a finger.
            static CARESS_VULVA                         = 78    // Hands, Caress, Crotch, Vulva;                    Kate gently caresses Jack's vulva. / Kate gently caresses Jack's pussy. / Kate gently glides a finger over Jack's slit.
            static GROPE_BREASTS                        = 79    // Hands, Grope, Chest, Breasts;                    Kate gropes Jack's breasts.
            static GROPE_BUTTOCKS                       = 80    // Hands, Grope, Buttocks;                          Kate gropes Jack's buttocks.
            static GROPE_CROTCH                         = 81    // Hands, Grope, Crotch;                            Kate inexpertly gropes at Jack's crotch.
            static RUB_HEAD                             = 82    // Hands, Rub, Head;                                Kate rubs Jack's head.
            static RUB_ARMS                             = 83    // Hands, Rub, Arms;                                Kate rubs Jack's arm.
            static RUB_STOMACH                          = 84    // Hands, Rub, Mid-Section, Stomach;                Kate rubs Jack's stomach. / Kate rubs Jack's belly.
            static RUB_PENIS                            = 85    // Hands, Rub, Crotch, Penis;                       Kate rubs Jack's penis. / Kate rubs Jack's cock.
            static RUB_VULVA                            = 86    // Hands, Rub, Crotch, Vulva;                       Kate rubs Jack's vulva. / Kate rubs Jack's pussy. / Kate rubs Jack's pussylips. / Kate rubs the outside of Jack's pussy.
            static RUB_CLIT                             = 87    // Hands, Rub, Crotch, Clit;                        Kate rubs Jack's clit.
            static RUB_STRAPON                          = 88    // Hands, Rub, Toy, Strapon;                        Kate rubs Jack's strapon as if it was a real cock.
            static RUB_INTENSE_STOMACH                  = 89    // Hands, Rub, Intense, Mid-Section, Stomach;       Kate gives Jack's stomach an intense rub. / Kate gives Jack's stomach an energetic rub.
            static RUB_INTENSE_PENIS                    = 90    // Hands, Rub, Intense, Crotch, Penis;              Kate rubs Jack's penis fast. / Kate rubs Jack's cock fast.
            static RUB_INTENSE_VULVA                    = 91    // Hands, Rub, Intense, Crotch, Vulva;              Kate rubs Jack's vulva intensely. / Kate presses her fingers and rubs Jack's pussy. / Kate intensely rubs Jack's pussylips. / Kate rubs the outside of Jack's pussy with vigor.
            static RUB_INTENSE_CLIT                     = 92    // Hands, Rub, Intense, Crotch, Clit;               Kate gives Jack's clit an intense rub.
            static RUB_INTENSE_STRAPON                  = 93    // Hands, Rub, Intense, Toy, Strapon;               Kate rubs Jack's strapon fast as if it was a real cock.
            static PINCH_SOFT_NIPPLES                   = 94    // Hands, Pinch, Soft, Chest, Nipples;              Kate softly pinches Jack's nipples.
            static PINCH_HARD_NIPPLES                   = 95    // Hands, Pinch, Hard, Chest, Nipples;              Kate pinches Jack's nipples hard.
            static HUG_BODY                             = 96    // Hands, Hug, Body;                                Kate envelops Jack's body in a hug.
            static HUG_SOFT_BODY                        = 97    // Hands, Hug, Soft, Body;                          Kate gives Jack's a soft embrace.
            static HUG_CHEST_WITH_CHEST                 = 98    // Hands, Hug, Chest;                               Kate hugs Jack's pressing her chest against his.
            static HUG_ARM                              = 99    // Hands, Hug, Arm;                                 Kate grabs Jack's arm and hugs it.
            static HUG_ARM_WITH_BREASTS                 = 100   // Hands, Hug, Arm;                                 Kate hugs Jack's arm, pressing her breasts against it.
            static CLAW_BACK                            = 101   // Hands, Claws, Body, Back;                        Kate rakes her nails against Jack's back.
            static CLAW_SCROTUM                         = 102   // Hands, Claws, Body, Back;                        Kate runs her nails over Jack's balls.
            static PENETRATE_SOFT_MOUTH_WITH_FINGER     = 103   // Hands, Finger, Penetrate, Soft, Mouth;           Kate pushes a finger into Jack's mouth.
            static PENETRATE_SOFT_LIPS_WITH_FINGER      = 104   // Hands, Finger, Penetrate, Soft, Mouth, Lips;     Kate gently pushes a finger past Jack's lips.
            static PENETRATE_SOFT_ANUS_WITH_FINGER      = 105   // Hands, Finger, Penetrate, Soft, Ass, Anus;       Kate gently pushes a finger into Jack's anus.
            static PENETRATE_SOFT_VULVA_WITH_FINGER     = 106   // Hands, Finger, Penetrate, Soft, Crotch, Vulva;   Kate gently pushes a finger past Jack's pussylips. / Kate gently pushes a finger past Jack's nether lips.
            static PENETRATE_SOFT_VAGINA_WITH_FINGER    = 107   // Hands, Finger, Penetrate, Soft, Crotch, Vagina;  Kate gently pushes a finger into Jack's vagina. / Kate gently pushes a finger into Jack's channel.
            static PENETRATE_SOFT_MOUTH_WITH_PENIS      = 108   // Crotch, Penis, Penetrate, Soft, Mouth;           Kate gently pushes her penis into Jack's mouth.
            static PENETRATE_SOFT_LIPS_WITH_PENIS       = 109   // Crotch, Penis, Penetrate, Soft, Mouth, Lips;     Kate slowly pushes her penis past Jack's lips.
            static PENETRATE_SOFT_ANUS_WITH_PENIS       = 110   // Crotch, Penis, Penetrate, Soft, Ass, Anus;       Kate carefully pushes her penis into Jack's anus. / Kate carefully pushes her penis into Jack's ass. / Kate carefully pushes her penis past Jack's asshole.
            static PENETRATE_SOFT_VULVA_WITH_PENIS      = 111   // Crotch, Penis, Penetrate, Soft, Crotch, Vulva;   Kate gently slides her penis past Jack's pussylips. / Kate gently slides her penis past Jack's nether lips.
            static PENETRATE_SOFT_VAGINA_WITH_PENIS     = 112   // Crotch, Penis, Penetrate, Soft, Crotch, Vagina;  Kate gently pushes her penis into Jack's vagina. / Kate slowly penetrates Jack's channel with her penis.
            static PENETRATE_SOFT_MOUTH_WITH_DILDO      = 113   // Toy, Dildo, Penetrate, Soft, Mouth;              Kate gently pushes her dildo into Jack's mouth.
            static PENETRATE_SOFT_LIPS_WITH_DILDO       = 114   // Toy, Dildo, Penetrate, Soft, Mouth, Lips;        Kate slowly pushes her dildo past Jack's lips.
            static PENETRATE_SOFT_ANUS_WITH_DILDO       = 115   // Toy, Dildo, Penetrate, Soft, Ass, Anus;          Kate carefully pushes her dildo into Jack's anus. / Kate carefully pushes her dildo into Jack's ass. / Kate carefully pushes her dildo past Jack's asshole.
            static PENETRATE_SOFT_VULVA_WITH_DILDO      = 116   // Toy, Dildo, Penetrate, Soft, Crotch, Vulva;      Kate gently slides her dildo past Jack's pussylips. / Kate gently slides her dildo past Jack's nether lips.
            static PENETRATE_SOFT_VAGINA_WITH_DILDO     = 117   // Toy, Dildo, Penetrate, Soft, Crotch, Vagina;     Kate gently pushes her dildo into Jack's vagina. / Kate slowly penetrates Jack's channel with her dildo.
            static PENETRATE_SOFT_MOUTH_WITH_STRAPON    = 118   // Toy, Strapon, Penetrate, Soft, Mouth;            Kate gently pushes her strapon into Jack's mouth.
            static PENETRATE_SOFT_LIPS_WITH_STRAPON     = 119   // Toy, Strapon, Penetrate, Soft, Mouth, Lips;      Kate slowly pushes her strapon past Jack's lips.
            static PENETRATE_SOFT_ANUS_WITH_STRAPON     = 120   // Toy, Strapon, Penetrate, Soft, Ass, Anus;        Kate carefully pushes her strapon into Jack's anus. / Kate carefully pushes her strapon into Jack's ass. / Kate carefully pushes her strapon past Jack's asshole.
            static PENETRATE_SOFT_VULVA_WITH_STRAPON    = 121   // Toy, Strapon, Penetrate, Soft, Crotch, Vulva;    Kate gently slides her strapon past Jack's pussylips. / Kate gently slides her strapon past Jack's nether lips.
            static PENETRATE_SOFT_VAGINA_WITH_STRAPON   = 122   // Toy, Strapon, Penetrate, Soft, Crotch, Vagina;   Kate gently pushes her strapon into Jack's vagina. / Kate slowly penetrates Jack's channel with her strapon.
            static PENETRATE_SOFT_ANUS_WITH_PLUG        = 123   // Toy, Plug, Penetrate, Soft, Ass, Anus;           Kate carefully pushes her butt-plug into Jack's anus. / Kate carefully pushes her butt-plug into Jack's ass. / Kate carefully pushes her butt-plug past Jack's asshole.
            static PENETRATE_HARD_MOUTH_WITH_FINGER     = 124   // Hands, Finger, Penetrate, Hard, Mouth;           Kate shoves a finger into Jack's mouth.
            static PENETRATE_HARD_LIPS_WITH_FINGER      = 125   // Hands, Finger, Penetrate, Hard, Mouth, Lips;     Kate roughly pushes a finger past Jack's lips.
            static PENETRATE_HARD_ANUS_WITH_FINGER      = 126   // Hands, Finger, Penetrate, Hard, Ass, Anus;       Kate shoves a finger up Jack's anus. / Kate shoves a finger up Jack's ass.
            static PENETRATE_HARD_VULVA_WITH_FINGER     = 127   // Hands, Finger, Penetrate, Hard, Crotch, Vulva;   Kate rams a finger past Jack's pussylips. / Kate rams a finger past Jack's nether lips.
            static PENETRATE_HARD_VAGINA_WITH_FINGER    = 128   // Hands, Finger, Penetrate, Hard, Crotch, Vagina;  Kate rams a finger into Jack's vagina. / Kate rams a finger into Jack's channel.
            static PENETRATE_HARD_MOUTH_WITH_PENIS      = 129   // Toy, Penis, Penetrate, Hard, Mouth;              Kate shoves her penis into Jack's mouth.
            static PENETRATE_HARD_ANUS_WITH_PENIS       = 130   // Toy, Penis, Penetrate, Hard, Ass, Anus;          Kate rams her penis into Jack's anus. / Kate rams her penis into Jack's ass. / Kate arms her penis past Jack's asshole.
            static PENETRATE_HARD_VAGINA_WITH_PENIS     = 131   // Toy, Penis, Penetrate, Hard, Crotch, Vagina;     Kate shoves her penis into Jack's vagina. / Kate rams Jack's channel with her penis.
            static PENETRATE_HARD_MOUTH_WITH_DILDO      = 132   // Toy, Dildo, Penetrate, Hard, Mouth;              Kate shoves her dildo into Jack's mouth.
            static PENETRATE_HARD_ANUS_WITH_DILDO       = 133   // Toy, Dildo, Penetrate, Hard, Ass, Anus;          Kate rams her dildo into Jack's anus. / Kate rams her dildo into Jack's ass. / Kate arms her dildo past Jack's asshole.
            static PENETRATE_HARD_VAGINA_WITH_DILDO     = 134   // Toy, Dildo, Penetrate, Hard, Crotch, Vagina;     Kate shoves her dildo into Jack's vagina. / Kate rams Jack's channel with her dildo.
            static PENETRATE_HARD_MOUTH_WITH_STRAPON    = 135   // Toy, Strapon, Penetrate, Hard, Mouth;            Kate shoves her strapon into Jack's mouth.
            static PENETRATE_HARD_ANUS_WITH_STRAPON     = 136   // Toy, Strapon, Penetrate, Hard, Ass, Anus;        Kate rams her strapon into Jack's anus. / Kate rams her strapon into Jack's ass. / Kate arms her strapon past Jack's asshole.
            static PENETRATE_HARD_VAGINA_WITH_STRAPON   = 137   // Toy, Strapon, Penetrate, Hard, Crotch, Vagina;   Kate shoves her strapon into Jack's vagina. / Kate rams Jack's channel with her strapon.
            static PENETRATE_HARD_ANUS_WITH_PLUG        = 138   // Toy, Plug, Penetrate, Hard, Ass, Anus;           Kate roughly pushes her butt-plug into Jack's anus. / Kate roughly pushes her butt-plug into Jack's ass. / Kate roughly her butt-plug into Jack's asshole.
            static THRUST_SLOW_ANUS_WITH_FINGER         = 139   // Hands, Finger, Thrust, Slow, Ass, Anus;          Kate slowly slides her finger in and out of Jack's anus.
            static THRUST_SLOW_VAGINA_WITH_FINGER       = 140   // Hands, Finger, Thrust, Slow, Crotch, Vagina;     Kate slowly slides her finger in and out of Jack's pussy.
            static THRUST_SLOW_MOUTH_WITH_PENIS         = 141   // Crotch, Penis, Thrust, Slow, Mouth;              Kate slowly slides her penis in and out of Jack's mouth.
            static THRUST_SLOW_ANUS_WITH_PENIS          = 142   // Crotch, Penis, Thrust, Slow, Ass, Anus;          Kate slowly slides her penis in and out of Jack's anus.
            static THRUST_SLOW_VAGINA_WITH_PENIS        = 143   // Crotch, Penis, Thrust, Slow, Crotch, Vagina;     Kate slowly slides her penis in and out of Jack's pussy.
            static THRUST_SLOW_MOUTH_WITH_DILDO         = 144   // Toy, Dildo, Thrust, Slow, Mouth;                 Kate slowly slides her dildo in and out of Jack's mouth.
            static THRUST_SLOW_ANUS_WITH_DILDO          = 145   // Toy, Dildo, Thrust, Slow, Ass, Anus;             Kate slowly slides her dildo in and out of Jack's anus.
            static THRUST_SLOW_VAGINA_WITH_DILDO        = 146   // Toy, Dildo, Thrust, Slow, Crotch, Vagina;        Kate slowly slides her dildo in and out of Jack's pussy.
            static THRUST_SLOW_MOUTH_WITH_STRAPON       = 147   // Toy, Strapon, Thrust, Slow, Mouth;               Kate slowly slides her strapon in and out of Jack's mouth.
            static THRUST_SLOW_ANUS_WITH_STRAPON        = 148   // Toy, Strapon, Thrust, Slow, Ass, Anus;           Kate slowly slides her strapon in and out of Jack's anus.
            static THRUST_SLOW_VAGINA_WITH_STRAPON      = 149   // Toy, Strapon, Thrust, Slow, Crotch, Vagina;      Kate slowly slides her strapon in and out of Jack's pussy.
            static THRUST_SLOW_ANUS_WITH_PLUG           = 150   // Toy, Plug, Thrust, Slow, Ass, Anus;              Kate carefully slides her butt-plug in and out of Jack's anus.
            static THRUST_FAST_ANUS_WITH_FINGER         = 151   // Hands, Finger, Thrust, Fast Ass, Anus;           Kate thrusts her finger fast in and out of Jack's anus.
            static THRUST_FAST_VAGINA_WITH_FINGER       = 152   // Hands, Finger, Thrust, Fast Crotch, Vagina;      Kate thrusts her finger fast in and out of Jack's pussy.
            static THRUST_FAST_MOUTH_WITH_PENIS         = 153   // Crotch, Penis, Thrust, Fast Mouth;               Kate thrusts her penis fast in and out of Jack's mouth.
            static THRUST_FAST_ANUS_WITH_PENIS          = 154   // Crotch, Penis, Thrust, Fast Ass, Anus;           Kate thrusts her penis fast in and out of Jack's anus.
            static THRUST_FAST_VAGINA_WITH_PENIS        = 155   // Crotch, Penis, Thrust, Fast Crotch, Vagina;      Kate thrusts her penis fast in and out of Jack's pussy.
            static THRUST_FAST_MOUTH_WITH_DILDO         = 156   // Toy, Dildo, Thrust, Fast Mouth;                  Kate thrusts her dildo fast in and out of Jack's mouth.
            static THRUST_FAST_ANUS_WITH_DILDO          = 157   // Toy, Dildo, Thrust, Fast Ass, Anus;              Kate thrusts her dildo fast in and out of Jack's anus.
            static THRUST_FAST_VAGINA_WITH_DILDO        = 158   // Toy, Dildo, Thrust, Fast Crotch, Vagina;         Kate thrusts her dildo fast in and out of Jack's pussy.
            static THRUST_FAST_MOUTH_WITH_STRAPON       = 159   // Toy, Strapon, Thrust, Fast Mouth;                Kate thrusts her strapon fast in and out of Jack's mouth.
            static THRUST_FAST_ANUS_WITH_STRAPON        = 160   // Toy, Strapon, Thrust, Fast Ass, Anus;            Kate thrusts her strapon fast in and out of Jack's anus.
            static THRUST_FAST_VAGINA_WITH_STRAPON      = 161   // Toy, Strapon, Thrust, Fast Crotch, Vagina;       Kate thrusts her strapon fast in and out of Jack's pussy.
            static THRUST_ROUGH_ANUS_WITH_FINGER        = 162   // Hands, Finger, Thrust, Rough, Ass, Anus;         Kate roughly thrusts her finger in and out of Jack's anus.
            static THRUST_ROUGH_VAGINA_WITH_FINGER      = 163   // Hands, Finger, Thrust, Rough, Crotch, Vagina;    Kate roughly thrusts her finger in and out of Jack's pussy.
            static THRUST_ROUGH_MOUTH_WITH_PENIS        = 164   // Crotch, Penis, Thrust, Rough, Mouth;             Kate roughly thrusts her penis in and out of Jack's mouth.
            static THRUST_ROUGH_ANUS_WITH_PENIS         = 165   // Crotch, Penis, Thrust, Rough, Ass, Anus;         Kate roughly thrusts her penis in and out of Jack's anus.
            static THRUST_ROUGH_VAGINA_WITH_PENIS       = 166   // Crotch, Penis, Thrust, Rough, Crotch, Vagina;    Kate roughly thrusts her penis in and out of Jack's pussy.
            static THRUST_ROUGH_MOUTH_WITH_DILDO        = 167   // Toy, Dildo, Thrust, Rough, Mouth;                Kate roughly thrusts her dildo in and out of Jack's mouth.
            static THRUST_ROUGH_ANUS_WITH_DILDO         = 168   // Toy, Dildo, Thrust, Rough, Ass, Anus;            Kate roughly thrusts her dildo in and out of Jack's anus.
            static THRUST_ROUGH_VAGINA_WITH_DILDO       = 169   // Toy, Dildo, Thrust, Rough, Crotch, Vagina;       Kate roughly thrusts her dildo in and out of Jack's pussy.
            static THRUST_ROUGH_MOUTH_WITH_STRAPON      = 170   // Toy, Strapon, Thrust, Rough, Mouth;              Kate roughly thrusts her strapon in and out of Jack's mouth.
            static THRUST_ROUGH_ANUS_WITH_STRAPON       = 171   // Toy, Strapon, Thrust, Rough, Ass, Anus;          Kate roughly thrusts her strapon in and out of Jack's anus.
            static THRUST_ROUGH_VAGINA_WITH_STRAPON     = 172   // Toy, Strapon, Thrust, Rough, Crotch, Vagina;     Kate roughly thrusts her strapon in and out of Jack's pussy.
            static THRUST_ROUGH_ANUS_WITH_PLUG          = 173   // Toy, Plug, Thrust, Slow, Ass, Anus;              Kate roughly thrusts her butt-plug in and out of Jack's anus.
            static PULL_FINGER_WITH_MOUTH               = 174   // Hard, Mouth, Penetrate, Hands, Finger;           Kate pulls Jack's finger into her mouth.
            static PENETRATE_HARD_LIPS_WITH_FINGER      = 175   // Hands, Finger, Penetrate, Hard, Mouth, Lips;     Kate roughly pushes a finger past Jack's lips.
            static PENETRATE_HARD_ANUS_WITH_FINGER      = 176   // Hands, Finger, Penetrate, Hard, Ass, Anus;       Kate shoves a finger up Jack's anus. / Kate shoves a finger up Jack's ass.
            static PENETRATE_HARD_VULVA_WITH_FINGER     = 177   // Hands, Finger, Penetrate, Hard, Crotch, Vulva;   Kate rams a finger past Jack's pussylips. / Kate rams a finger past Jack's nether lips.
            static PENETRATE_HARD_VAGINA_WITH_FINGER    = 178   // Hands, Finger, Penetrate, Hard, Crotch, Vagina;  Kate rams a finger into Jack's vagina. / Kate rams a finger into Jack's channel.
            static PENETRATE_HARD_MOUTH_WITH_PENIS      = 179   // Toy, Penis, Penetrate, Hard, Mouth;              Kate shoves her penis into Jack's mouth.
            static PENETRATE_HARD_ANUS_WITH_PENIS       = 180   // Toy, Penis, Penetrate, Hard, Ass, Anus;          Kate rams her penis into Jack's anus. / Kate rams her penis into Jack's ass. / Kate arms her penis past Jack's asshole.
            static PENETRATE_HARD_VAGINA_WITH_PENIS     = 181   // Toy, Penis, Penetrate, Hard, Crotch, Vagina;     Kate shoves her penis into Jack's vagina. / Kate rams Jack's channel with her penis.
            static PENETRATE_HARD_MOUTH_WITH_DILDO      = 182   // Toy, Dildo, Penetrate, Hard, Mouth;              Kate shoves her dildo into Jack's mouth.
            static PENETRATE_HARD_ANUS_WITH_DILDO       = 183   // Toy, Dildo, Penetrate, Hard, Ass, Anus;          Kate rams her dildo into Jack's anus. / Kate rams her dildo into Jack's ass. / Kate arms her dildo past Jack's asshole.
            static PENETRATE_HARD_VAGINA_WITH_DILDO     = 184   // Toy, Dildo, Penetrate, Hard, Crotch, Vagina;     Kate shoves her dildo into Jack's vagina. / Kate rams Jack's channel with her dildo.
            static PENETRATE_HARD_MOUTH_WITH_STRAPON    = 185   // Toy, Strapon, Penetrate, Hard, Mouth;            Kate shoves her strapon into Jack's mouth.
            static PENETRATE_HARD_ANUS_WITH_STRAPON     = 186   // Toy, Strapon, Penetrate, Hard, Ass, Anus;        Kate rams her strapon into Jack's anus. / Kate rams her strapon into Jack's ass. / Kate arms her strapon past Jack's asshole.
            static PENETRATE_HARD_VAGINA_WITH_STRAPON   = 187   // Toy, Strapon, Penetrate, Hard, Crotch, Vagina;   Kate shoves her strapon into Jack's vagina. / Kate rams Jack's channel with her strapon.
            static PENETRATE_HARD_ANUS_WITH_PLUG        = 188   // Toy, Plug, Penetrate, Hard, Ass, Anus;           Kate roughly pushes her butt-plug into Jack's anus. / Kate roughly pushes her butt-plug into Jack's ass. / Kate roughly her butt-plug into Jack's asshole.
            static THRUST_SLOW_SELF_ANUS_WITH_FINGER    = 189   // Hands, Finger, Thrust, Slow, Ass, Anus;          Kate slowly moves her anus over Jack's finger.
            static THRUST_SLOW_SELF_VAGINA_WITH_FINGER  = 190   // Hands, Finger, Thrust, Slow, Crotch, Vagina;     Kate slowly moves her pussy over Jack's finger.
            static THRUST_SLOW_SELF_MOUTH_WITH_PENIS    = 191   // Crotch, Penis, Thrust, Slow, Mouth;              Kate slowly moves her mouth over Jack's penis.
            static THRUST_SLOW_SELF_ANUS_WITH_PENIS     = 192   // Crotch, Penis, Thrust, Slow, Ass, Anus;          Kate slowly moves her anus over Jack's penis.
            static THRUST_SLOW_SELF_VAGINA_WITH_PENIS   = 193   // Crotch, Penis, Thrust, Slow, Crotch, Vagina;     Kate slowly moves her pussy over Jack's penis.
            static THRUST_SLOW_SELF_MOUTH_WITH_DILDO    = 194   // Toy, Dildo, Thrust, Slow, Mouth;                 Kate slowly moves her mouth over Jack's dildo.
            static THRUST_SLOW_SELF_ANUS_WITH_DILDO     = 195   // Toy, Dildo, Thrust, Slow, Ass, Anus;             Kate slowly moves her anus over Jack's dildo.
            static THRUST_SLOW_SELF_VAGINA_WITH_DILDO   = 196   // Toy, Dildo, Thrust, Slow, Crotch, Vagina;        Kate slowly moves her pussy over Jack's dildo.
            static THRUST_SLOW_SELF_MOUTH_WITH_STRAPON  = 197   // Toy, Strapon, Thrust, Slow, Mouth;               Kate slowly moves her mouth over Jack's strapon.
            static THRUST_SLOW_SELF_ANUS_WITH_STRAPON   = 198   // Toy, Strapon, Thrust, Slow, Ass, Anus;           Kate slowly moves her anus over Jack's strapon.
            static THRUST_SLOW_SELF_VAGINA_WITH_STRAPON = 199   // Toy, Strapon, Thrust, Slow, Crotch, Vagina;      Kate slowly moves her pussy over Jack's strapon.
            static THRUST_SLOW_SELF_ANUS_WITH_PLUG      = 200   // Toy, Plug, Thrust, Slow, Ass, Anus;              Kate carefully moves so that Jack's butt-plug slides in and out of her anus.
            static THRUST_FAST_SELF_ANUS_WITH_FINGER    = 201   // Hands, Finger, Thrust, Fast Ass, Anus;           Kate humps Jack's finger with her anus.
            static THRUST_FAST_SELF_VAGINA_WITH_FINGER  = 202   // Hands, Finger, Thrust, Fast Crotch, Vagina;      Kate humps Jack's finger with her pussy.
            static THRUST_FAST_SELF_MOUTH_WITH_PENIS    = 203   // Crotch, Penis, Thrust, Fast Mouth;               Kate humps Jack's penis with her mouth.
            static THRUST_FAST_SELF_ANUS_WITH_PENIS     = 204   // Crotch, Penis, Thrust, Fast Ass, Anus;           Kate humps Jack's penis with her anus.
            static THRUST_FAST_SELF_VAGINA_WITH_PENIS   = 205   // Crotch, Penis, Thrust, Fast Crotch, Vagina;      Kate humps Jack's penis with her pussy.
            static THRUST_FAST_SELF_MOUTH_WITH_DILDO    = 206   // Toy, Dildo, Thrust, Fast Mouth;                  Kate humps Jack's dildo with her mouth.
            static THRUST_FAST_SELF_ANUS_WITH_DILDO     = 207   // Toy, Dildo, Thrust, Fast Ass, Anus;              Kate humps Jack's dildo with her anus.
            static THRUST_FAST_SELF_VAGINA_WITH_DILDO   = 208   // Toy, Dildo, Thrust, Fast Crotch, Vagina;         Kate humps Jack's dildo with her pussy.
            static THRUST_FAST_SELF_MOUTH_WITH_STRAPON  = 209   // Toy, Strapon, Thrust, Fast Mouth;                Kate humps Jack's strapon with her mouth.
            static THRUST_FAST_SELF_ANUS_WITH_STRAPON   = 210   // Toy, Strapon, Thrust, Fast Ass, Anus;            Kate humps Jack's strapon with her anus.
            static THRUST_FAST_SELF_VAGINA_WITH_STRAPON = 211   // Toy, Strapon, Thrust, Fast Crotch, Vagina;       Kate humps Jack's strapon with her pussy.
            static THRUST_ROUGH_SELF_ANUS_WITH_FINGER   = 212   // Hands, Finger, Thrust, Rough, Ass, Anus;         Kate roughly rides Jack's finger with her anus.
            static THRUST_ROUGH_SELF_VAGINA_WITH_FINGER = 213   // Hands, Finger, Thrust, Rough, Crotch, Vagina;    Kate roughly rides Jack's finger with her pussy.
            static THRUST_ROUGH_SELF_MOUTH_WITH_PENIS   = 214   // Crotch, Penis, Thrust, Rough, Mouth;             Kate roughly rides Jack's penis with her mouth.
            static THRUST_ROUGH_SELF_ANUS_WITH_PENIS    = 215   // Crotch, Penis, Thrust, Rough, Ass, Anus;         Kate roughly rides Jack's penis with her anus.
            static THRUST_ROUGH_SELF_VAGINA_WITH_PENIS  = 216   // Crotch, Penis, Thrust, Rough, Crotch, Vagina;    Kate roughly rides Jack's penis with her pussy.
            static THRUST_ROUGH_SELF_MOUTH_WITH_DILDO   = 217   // Toy, Dildo, Thrust, Rough, Mouth;                Kate roughly rides Jack's dildo with her mouth.
            static THRUST_ROUGH_SELF_ANUS_WITH_DILDO    = 218   // Toy, Dildo, Thrust, Rough, Ass, Anus;            Kate roughly rides Jack's dildo with her anus.
            static THRUST_ROUGH_SELF_VAGINA_WITH_DILDO  = 219   // Toy, Dildo, Thrust, Rough, Crotch, Vagina;       Kate roughly rides Jack's dildo with her pussy.
            static THRUST_ROUGH_SELF_MOUTH_WITH_STRAPON = 220   // Toy, Strapon, Thrust, Rough, Mouth;              Kate roughly rides Jack's strapon with her mouth.
            static THRUST_ROUGH_SELF_ANUS_WITH_STRAPON  = 221   // Toy, Strapon, Thrust, Rough, Ass, Anus;          Kate roughly rides Jack's strapon with her anus.
            static THRUST_ROUGH_SELF_VAGINA_WITH_STRAPON= 222   // Toy, Strapon, Thrust, Rough, Crotch, Vagina;     Kate roughly rides Jack's strapon with her pussy.
            static THRUST_ROUGH_SELF_ANUS_WITH_PLUG     = 223   // Toy, Plug, Thrust, Slow, Ass, Anus;              Kate roughly rides Jack's butt-plug with her anus.
# Psychological Stimulation
SEE_IMPLIED_SHAPE_OF_BREASTS
SEE_IMPLIED_SHAPE_OF_BIG_BREASTS
SEE_IMPLIED_SHAPE_OF_SMALL_BREASTS
SEE_IMPLIED_SHAPE_OF_NIPPLES
SEE_IMPLIED_SHAPE_OF_PIERCED_NIPPLES
SEE_IMPLIED_SHAPE_OF_BUTTOCKS
SEE_IMPLIED_SHAPE_OF_PENIS
SEE_IMPLIED_SHAPE_OF_BIG_PENIS
SEE_IMPLIED_SHAPE_OF_VULVA
SEE_IMPLIED_SHAPE_OF_BIG_MUSCLES
SEE_BREASTS
SEE_BIG_BREASTS
SEE_SMALL_BREASTS
SEE_NIPPLES
SEE_PIERCED_NIPPLES
SEE_BUTTOCKS
SEE_PENIS
SEE_BIG_PENIS
SEE_VULVA
SEE_BIG_MUSCLES
SEE_SHAVED_VULVA
SEE_HAIRY_VULVA
SEE_PIERCED_FEMALE_GENITALS
SEE_BLACK_PENIS
SEE_CAGED_PENIS
SEE_PIERCED_MALE_GENITALS
SEE_SCROTUM
SEE_SHAVED_SCROTUM
SEE_BIG_SCROTUM
SEE_FEET
SEE_INTIMATE_PIERCING
SEE_PORN
SEE_HARDCORE_PORN
SEE_LESBIAN_PORN
SEE_BIG_COCK_PORN
SEE_ANAL_SEX_PORN
SEE_BDSM_PORN
SEE_MALE_SUB_PORN
SEE_FEMALE_SUB_PORN
SEE_MALE_DOM_PORN
SEE_FEMALE_DOM_PORN
SEE_CUCKOLD_PORN
SEE_MASTURBATION
SEE_SEMEN_SWALLOWING
SEE_PERFORM_ASS_TO_MOUTH

EXPOSE_IMPLIED_SHAPE_OF_BREASTS
EXPOSE_IMPLIED_SHAPE_OF_NIPPLES
EXPOSE_IMPLIED_SHAPE_OF_PIERCED_NIPPLES
EXPOSE_IMPLIED_SHAPE_OF_BUTTOCKS
EXPOSE_IMPLIED_SHAPE_OF_PENIS
EXPOSE_IMPLIED_SHAPE_OF_VULVA
EXPOSE_IMPLIED_SHAPE_OF_BIG_MUSCLES
EXPOSE_BREASTS
EXPOSE_BUTTOCKS
EXPOSE_VULVA
EXPOSE_SHAVED_VULVA
EXPOSE_HAIRY_VULVA
EXPOSE_PIERCED_FEMALE_GENITALS
EXPOSE_PENIS
EXPOSE_CAGED_PENIS
EXPOSE_PIERCED_MALE_GENITALS
EXPOSE_SHAVED_SCROTUM
EXPOSE_BIG_MUSCLES
EXPOSE_INTIMATE_PIERCING

HEAR_SEX_FLATTERY
HEAR_SEXUAL_PROWESS_COMPLIMENT
HEAR_SEXUAL_COMPLIMENT_ABOUT_APPEARANCE
HEAR_NON_SEXUAL_COMPLIMENT_ABOUT_APPEARANCE
HEAR_DECLARATION_OF_DESIRE
HEAR_BODY_PART_COMPLIMENT
HEAR_CRASS_COMPILMENT
HEAR_SLUT_SHAMING
HEAR_FLATTERING_COMPLAINT
HEAR_DEMONSTRATION_OF_AROUSAL_OR_DESIRE
HEAR_MODERATE_HUMILIATION
HEAR_SIGNIFICANT_HUMILIATION
HEAR_DECLARATION_OF_LOVE
HEAR_DECLARATION_OF_FIDELITY
HEAR_DECLARATION_OF_INFERIORITY

SAY_SEX_FLATTERY
SAY_DECLARATION_OF_DESIRE
SAY_CRASS_COMPILMENT
SAY_SLUT_SHAMING
SAY_DEMONSTRATION_OF_AROUSAL_OR_DESIRE
SAY_MODERATE_HUMILIATION
SAY_SIGNIFICANT_HUMILIATION
SAY_DECLARATION_OF_LOVE
SAY_DECLARATION_OF_FIDELITY
SAY_DECLARATION_OF_INFERIORITY

RECEIVE_OFFER_UNUSUAL_SEX_ACT
RECEIVE_OFFER_IMPREGNATION

INFLICT_UNUSUAL_SEX_ACT
INFLICT_MODERATE_HUMILIATION
INFLICT_SIGNIFICANT_HUMILIATION
INFLICT_PAIN
INFLICT_SPANKING
INFLICT_NIPPLE_ABUSE
INFLICT_LOSS_OF_CONTROL_CLIMAX_CONTROL
INFLICT_LOSS_OF_CONTROL_TEASING_HELPLESS_TARGET
INFLICT_LOSS_OF_CONTROL_BONDAGE
INFLICT_CONTROL_ROUGH_SEX
INFLICT_CONTROL_FORCED_SEX
INFLICT_CONTROL_FORCED_DEEPTHROAT
INFLICT_CONTROL_FORCED_CUNNILINGUS
INFLICT_CONTROL_IGNORING_RELUCTANCE
INFLICT_CONTROL_EXPLORING_PARTNERS_EMBARRASSMENT
INFLICT_IMPREGNATION
INFLICT_CHEATING
INFLICT_CONTROL_FORCED_ANAL_PENETRATION
INFLICT_CONTROL_FORCED_PUSSY_JUICE_TASTING
INFLICT_CONTROL_FORCED_SEMEN_TASTING
INFLICT_CONTROL_FORCED_SEMEN_COVERING
INFLICT_CONTROL_FORCED_CREAMPIES
INFLICT_CONTROL_FORCED_DEVIANT_SEXUALITY_EXPOSED_TO_SELECT_FEW
INFLICT_CONTROL_FORCED_DEVIANT_SEXUALITY_EXPOSED_TO_LARGE_PUBLIC

TAKE_MODERATE_HUMILIATION
TAKE_SIGNIFICANT_HUMILIATION
TAKE_PAIN
TAKE_SPANKING
TAKE_NIPPLE_ABUSE
TAKE_LOSS_OF_CONTROL_CLIMAX_CONTROL
TAKE_LOSS_OF_CONTROL_TEASING_HELPLESS_TARGET
TAKE_LOSS_OF_CONTROL_BONDAGE
TAKE_CONTROL_ROUGH_SEX
TAKE_CONTROL_FORCED_SEX
TAKE_CONTROL_FORCED_DEEPTHROAT
TAKE_CONTROL_FORCED_CUNNILINGUS
TAKE_CONTROL_IGNORING_RELUCTANCE
TAKE_CONTROL_EXPLORING_PARTNERS_EMBARRASSMENT
TAKE_IMPREGNATION
TAKE_CHEATING
TAKE_CONTROL_FORCED_ANAL_PENETRATION
TAKE_CONTROL_FORCED_PUSSY_JUICE_TASTING
TAKE_CONTROL_FORCED_SEMEN_TASTING
TAKE_CONTROL_FORCED_SEMEN_COVERING
TAKE_CONTROL_FORCED_CREAMPIES
TAKE_CONTROL_FORCED_DEVIANT_SEXUALITY_EXPOSED_TO_SELECT_FEW
TAKE_CONTROL_FORCED_DEVIANT_SEXUALITY_EXPOSED_TO_LARGE_PUBLIC

WORSHIP_BREASTS
WORSHIP_BIG_BREASTS
WORSHIP_SMALL_BREASTS
WORSHIP_BUTTOCKS
WORSHIP_VULVA
WORSHIP_SHAVED_VULVA
WORSHIP_HAIRY_VULVA
WORSHIP_PENIS
WORSHIP_BIG_PENIS
WORSHIP_BLACK_PENIS
WORSHIP_SCROTUM
WORSHIP_BIG_SCROTUM
WORSHIP_FEET
WORSHIP_BIG_MUSCLES
WORSHIP_PAIN
WORSHIP_SPANKING
WORSHIP_NIPPLE_ABUSE
WORSHIP_LOSS_OF_CONTROL_TEASING_HELPLESS_TARGET
WORSHIP_LOSS_OF_CONTROL_BONDAGE
WORSHIP_SEX_ACT_PENETRATIVE_SEX
WORSHIP_SEX_ACT_FELLATIO
WORSHIP_SEX_ACT_CUNNILINGUS
WORSHIP_SEX_ACT_DEEPTHROAT
WORSHIP_SEX_ACT_ANAL_PENETRATION
WORSHIP_SEX_ACT_TITJOB
WORSHIP_SEX_ACT_ANALINGUS
WORSHIP_CHEATING
WORSHIP_MODERATE_HUMILIATION
WORSHIP_SIGNIFICANT_HUMILIATION

HAVE_ACT_OR_PART_WORSHIPED_BREASTS
HAVE_ACT_OR_PART_WORSHIPED_BIG_BREASTS
HAVE_ACT_OR_PART_WORSHIPED_SMALL_BREASTS
HAVE_ACT_OR_PART_WORSHIPED_BUTTOCKS
HAVE_ACT_OR_PART_WORSHIPED_VULVA
HAVE_ACT_OR_PART_WORSHIPED_SHAVED_VULVA
HAVE_ACT_OR_PART_WORSHIPED_HAIRY_VULVA
HAVE_ACT_OR_PART_WORSHIPED_PENIS
HAVE_ACT_OR_PART_WORSHIPED_BIG_PENIS
HAVE_ACT_OR_PART_WORSHIPED_BLACK_PENIS
HAVE_ACT_OR_PART_WORSHIPED_SCROTUM
HAVE_ACT_OR_PART_WORSHIPED_BIG_SCROTUM
HAVE_ACT_OR_PART_WORSHIPED_FEET
HAVE_ACT_OR_PART_WORSHIPED_BIG_MUSCLES
HAVE_ACT_OR_PART_WORSHIPED_PAIN
HAVE_ACT_OR_PART_WORSHIPED_SPANKING
HAVE_ACT_OR_PART_WORSHIPED_NIPPLE_ABUSE
HAVE_ACT_OR_PART_WORSHIPED_LOSS_OF_CONTROL_TEASING_HELPLESS_TARGET
HAVE_ACT_OR_PART_WORSHIPED_LOSS_OF_CONTROL_BONDAGE
HAVE_ACT_OR_PART_WORSHIPED_SEX_ACT_PENETRATIVE_SEX
HAVE_ACT_OR_PART_WORSHIPED_SEX_ACT_FELLATIO
HAVE_ACT_OR_PART_WORSHIPED_SEX_ACT_CUNNILINGUS
HAVE_ACT_OR_PART_WORSHIPED_SEX_ACT_DEEPTHROAT
HAVE_ACT_OR_PART_WORSHIPED_SEX_ACT_ANAL_PENETRATION
HAVE_ACT_OR_PART_WORSHIPED_SEX_ACT_TITJOB
HAVE_ACT_OR_PART_WORSHIPED_SEX_ACT_ANALINGUS
HAVE_ACT_OR_PART_WORSHIPED_CHEATING
HAVE_ACT_OR_PART_WORSHIPED_MODERATE_HUMILIATION
HAVE_ACT_OR_PART_WORSHIPED_SIGNIFICANT_HUMILIATION

PERFORM_LOUD_SEX
PERFORM_SEX_WITH_STRANGERS
PERFORM_SEX_ACT_PENETRATIVE_SEX
PERFORM_SEX_ACT_FELLATIO
PERFORM_SEX_ACT_CUNNILINGUS
PERFORM_SEX_ACT_DEEPTHROAT
PERFORM_SEX_ACT_ANAL_PENETRATION
PERFORM_SEX_ACT_TITJOB
PERFORM_SEX_ACT_ANALINGUS
PERFORM_BREAST_PLAY
PERFORM_PUSSY_JUICE_TASTING
PERFORM_SEMEN_COVERING
PERFORM_SEMEN_SWALLOWING
PERFORM_ASS_TO_MOUTH
PERFORM_CREAMPIE
PERFORM_EXHIBITIONISM_FLASHING
PERFORM_EXHIBITIONISM_PUBLIC_SEX
PERFORM_IMPREGNATION
PERFORM_CHEATING
PERFORM_PAYMENT_FOR_SEX
PERFORM_ROLEPLAYING_MODERATE
PERFORM_ROLEPLAYING_SIGNIFICANT
PERFORM_ROLEPLAYING_PET
PERFORM_ROLEPLAYING_PUPPY
PERFORM_ROLEPLAYING_PONY
PERFORM_ROLEPLAYING_KITTEN
PERFORM_ROLEPLAYING_PET_OWNER
PERFORM_ROLEPLAYING_SLAVE_AND_SLAVE_MASTER
PERFORM_ROLEPLAYING_WHORE
PERFORM_ROLEPLAYING_PARENT_AND_YOUNGSTER
PERFORM_ROLEPLAYING_CHEATING_CONFESSION
PERFORM_ROLEPLAYING_CHEATING_SPOUSE_AND_LOVER
PERFORM_ROLEPLAYING_CELEBRITY_AND_FAN
PERFORM_ROLEPLAYING_RAPE
PERFORM_ROLEPLAYING_PRISONER_AND_TORTURER
PERFORM_ROLEPLAYING_ROYALTY_AND_COMMONER
PERFORM_ROLEPLAYING_IMPORTANT_PROFESSIONAL_AND_COMMONER
PERFORM_INCESTUAL_EXPOSURE
PERFORM_INCESTUAL_SEX

RECEIVE_SEX_ACT_PENETRATIVE_SEX
RECEIVE_SEX_ACT_FELLATIO
RECEIVE_SEX_ACT_CUNNILINGUS
RECEIVE_SEX_ACT_DEEPTHROAT
RECEIVE_SEX_ACT_ANAL_PENETRATION
RECEIVE_SEX_ACT_TITJOB
RECEIVE_SEX_ACT_ANALINGUS
RECEIVE_BREAST_PLAY
RECEIVE_PUSSY_JUICE_TASTING
RECEIVE_SEMEN_COVERING
RECEIVE_ASS_TO_MOUTH
RECEIVE_CREAMPIE
RECEIVE_IMPREGNATION
RECEIVE_CHEATING
RECEIVE_PAYMENT_FOR_SEX


RECEIVE_PARTNER_TAKING_INITIATIVE

BEING_WITNESSED_MASTURBATING
BEING_WITNESSED_LOUD_SEX
BEING_WITNESSED_SEX_ACT_PENETRATIVE_SEX

WITNESS_THIRD_PARTY_SEX_ACT_PENETRATIVE_SEX

WITNESS_THIRD_PARTY_MODERATE_HUMILIATION
WITNESS_THIRD_PARTY_SIGNIFICANT_HUMILIATION
WITNESS_THIRD_PARTY_SEMEN_SWALLOWING



SEE
EXPOSE
HEAR
SAY
INFLICT (ignoring partner's wishes or voiced reluctance)
TAKE (in spite of wishes or voiced reluctance)
WORSHIP
HAVE_ACT_OR_PART_WORSHIPED
PERFORM
RECEIVE
WITNESS_THIRD_PARTY // A third party is a non-direct participant in a sex act. This may be as close as someone masturbating on the side line or a complete stranger passing by. The most common third party for this list is someone known to sex participants who is not directly part of a sex act, either a third in a threesome (or different number on a numerous act) or a relationship-partner (wife, husband, boyfriend, etc.) being cuckolded.
WITNESS
BEING_WITNESSED

TOUCH
SEXUALLY_USE
HAVE_SEXUALLY_USED
RECEIVE_OFFER
OFFER

BREASTS
BIG_BREASTS
SMALL_BREASTS
NIPPLES
PIERCED_NIPPLES
BUTTOCKS
VULVA
SHAVED_VULVA
HAIRY_VULVA
PIERCED_FEMALE_GENITALS
PENIS
BIG_PENIS
BLACK_PENIS
CAGED_PENIS
PIERCED_MALE_GENITALS
SCROTUM
SHAVED_SCROTUM
BIG_SCROTUM
FEET
BIG_MUSCLES
INTIMATE_PIERCING

MASTURBATION

PORN
HARDCORE_PORN
LESBIAN_PORN
BIG_COCK_PORN
ANAL_SEX_PORN
BDSM_PORN
MALE_SUB_PORN
FEMALE_SUB_PORN
MALE_DOM_PORN
FEMALE_DOM_PORN
CUCKOLD_PORN

SEX_FLATTERY
SEXUAL_PROWESS_COMPLIMENT
SEXUAL_COMPLIMENT_ABOUT_APPEARANCE
NON_SEXUAL_COMPLIMENT_ABOUT_APPEARANCE
NON_SEXUAL_COMPLIMENT_ABOUT_GIFTS (smart; strong; famous; influential; powerful; etc.)
DECLARATION_OF_DESIRE
BODY_PART_COMPLIMENT
CRASS_COMPILMENT
SLUT_SHAMING (crass sexual compliment: "You slut! You are my bitch! Whore! Buttslut! Anal whore!")
FLATTERING_COMPLAINT ("You are too big! You too hot, I'm gonna cum like that! You make me lose control!")
DEMONSTRATION_OF_AROUSAL_OR_DESIRE (loud moans, gasps or cries; declarations of wetness; encouragement; etc.)
DECLARATION_OF_LOVE
DECLARATION_OF_FIDELITY
DECLARATION_OF_INFERIORITY

LOUD_SEX

PARTNER_TAKING_INITIATIVE
SEX_WITH_STRANGERS

UNUSUAL_SEX_ACT (the couple hasn't often experimented with: fellatio, anal penetration, roleplay, bondage, etc.)

MODERATE_HUMILIATION
SIGNIFICANT_HUMILIATION
PAIN
SPANKING
NIPPLE_ABUSE
LOSS_OF_CONTROL_CLIMAX_CONTROL
LOSS_OF_CONTROL_TEASING_HELPLESS_TARGET
LOSS_OF_CONTROL_BONDAGE
CONTROL_ROUGH_SEX
CONTROL_FORCED_SEX
CONTROL_FORCED_DEEPTHROAT
CONTROL_FORCED_CUNNILINGUS (face sitting)
CONTROL_IGNORING_RELUCTANCE ("No, no! Wait!", "I don't know...")
CONTROL_EXPLORING_PARTNERS_EMBARRASSMENT (realizing partner feels embarrassed and force it anyway; get excited by this form of control of the situation, forcing an embarrassing situation upon partner)
CONTROL_FORCED_ANAL_PENETRATION
CONTROL_FORCED_PUSSY_JUICE_TASTING
CONTROL_FORCED_SEMEN_TASTING
CONTROL_FORCED_SEMEN_COVERING
CONTROL_FORCED_CREAMPIES
CONTROL_FORCED_DEVIANT_SEXUALITY_EXPOSED_TO_SELECT_FEW  // exposed humiliation, exposed as a whore, exposed as a cuckold, exposed as an anal slave, exposed as a cock sucker, exposed as a lesbian
CONTROL_FORCED_DEVIANT_SEXUALITY_EXPOSED_TO_LARGE_PUBLIC  // exposed humiliation, exposed as a whore, exposed as a cuckold, exposed as an anal slave, exposed as a cock sucker, exposed as a lesbian

SEX_ACT_PENETRATIVE_SEX (performing and receiving penetrative sex is usually a psychological turn on only for the first few times)
SEX_ACT_FELLATIO (performing and receiving fellatio is usually a psychological turn on only for the first few times)
SEX_ACT_CUNNILINGUS (performing and receiving cunnilingus is usually a psychological turn on only for the first few times)
SEX_ACT_DEEPTHROAT
SEX_ACT_ANAL_PENETRATION (She will be excited by it. If not properly trained, it will painful and hard and she may not cum - still turned on by it. If trained, she will cum. If embarrassed by it, she will resist, although clearly excited.)
SEX_ACT_TITJOB
SEX_ACT_ANALINGUS
BREAST_PLAY
PUSSY_JUICE_TASTING (if she is not attracted to women, will mean she will taste her own)
SEMEN_COVERING (in degrees: belly/back/stomach; breasts/buttocks; face)
SEMEN_SWALLOWING
ASS_TO_MOUTH
CREAMPIES

EXHIBITIONISM_FLASHING
EXHIBITIONISM_PUBLIC_SEX

IMPREGNATION
PAYMENT_FOR_SEX (turned on by thinking how much she will get / how much she is worth)
INCESTUAL_EXPOSURE
INCESTUAL_SEX

CHEATING (cuckolding)
VULNERABILITY

ROLEPLAYING_MODERATE (mostly talking, a little pretend/acting)
ROLEPLAYING_SIGNIFICANT (costumes, not breaking role)
ROLEPLAYING_PET
ROLEPLAYING_PUPPY
ROLEPLAYING_PONY
ROLEPLAYING_KITTEN
ROLEPLAYING_PET_OWNER
ROLEPLAYING_SLAVE_AND_SLAVE_MASTER
ROLEPLAYING_WHORE
ROLEPLAYING_PARENT_AND_YOUNGSTER (daddy/little girl; mommy/boy; mommy/little girl; etc.)
ROLEPLAYING_CHEATING_CONFESSION
ROLEPLAYING_CHEATING_SPOUSE_AND_LOVER
ROLEPLAYING_CELEBRITY_AND_FAN (rockstar/groupie; sports celebrity/fan; movie star/fan)
ROLEPLAYING_RAPE
ROLEPLAYING_PRISONER_AND_TORTURER
ROLEPLAYING_ROYALTY_AND_COMMONER (princess/stable boy; queen/knight; etc.)
ROLEPLAYING_IMPORTANT_PROFESSIONAL_AND_COMMONER (president/journalist; ceo/employee; boss/employee; etc.)





EXOTIC_LOCATION_IN_PUBLIC
EXOTIC_LOCATION_ON_YACHT
EXOTIC_LOCATION_ON_PLANE
EXOTIC_LOCATION_ON_TOP_OF_BUILDING
EXOTIC_LOCATION_IN_A_BEACH
EXOTIC_LOCATION_AT_SEX_PLACE
EXOTIC_LOCATION_AT_PUBLIC_RESTROOM (bathroom)
EXOTIC_LOCATION_AT_RESTAURANT


CONFIDENCE_THROUGH_FLATTERY
FEELING_BEAUTIFUL
FEELING_GIFTED (smart; strong; etc.)
FEELING_SEXY
FEELING_REWARDED (gift; promise of gifts; money payment; etc.)
AROUSE_OTHER_THROUGH_WORDS_OR_PRETENSE
CONCERN_DURING_SEX ("Are you liking this, baby?")



PAMPERING
HER_BI_SEXUALITY
BEING_A_DOM_TO_PARTNER
BEING_A_SUB_TO_PARTNER
SEX_TOYS
