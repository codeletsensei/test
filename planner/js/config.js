class TwoWayMap {
    constructor(map) {
        this.map = map;
        this.reverseMap = {};
        this.keys = [];
        for (const key in map) {
            const value = map[key];
            this.reverseMap[value] = key;
            this.keys.push(key);
        }
    }
    get(key) { return this.map[key]; }
    revGet(key) { return this.reverseMap[key]; }
}

const matLookup = new TwoWayMap({
    100: "Nebra_1",
    101: "Nebra_2",
    102: "Nebra_3",
    103: "Nebra_4",
    110: "Phaistos_1",
    111: "Phaistos_2",
    112: "Phaistos_3",
    113: "Phaistos_4",
    120: "Wolfsegg_1",
    121: "Wolfsegg_2",
    122: "Wolfsegg_3",
    123: "Wolfsegg_4",
    130: "Nimrud_1",
    131: "Nimrud_2",
    132: "Nimrud_3",
    133: "Nimrud_4",
    140: "Mandragora_1",
    141: "Mandragora_2",
    142: "Mandragora_3",
    143: "Mandragora_4",
    150: "Rohonc_1",
    151: "Rohonc_2",
    152: "Rohonc_3",
    153: "Rohonc_4",
    160: "Aether_1",
    161: "Aether_2",
    162: "Aether_3",
    163: "Aether_4",
    170: "Antikythera_1",
    171: "Antikythera_2",
    172: "Antikythera_3",
    173: "Antikythera_4",
    180: "Voynich_1",
    181: "Voynich_2",
    182: "Voynich_3",
    183: "Voynich_4",
    190: "Haniwa_1",
    191: "Haniwa_2",
    192: "Haniwa_3",
    193: "Haniwa_4",
    200: "Totem_1",
    201: "Totem_2",
    202: "Totem_3",
    203: "Totem_4",
    210: "Baghdad_1",
    211: "Baghdad_2",
    212: "Baghdad_3",
    213: "Baghdad_4",
    220: "Fleece_1",
    221: "Fleece_2",
    222: "Fleece_3",
    223: "Fleece_4",
    230: "Okiku_1",
    231: "Okiku_2",
    232: "Okiku_3",
    233: "Okiku_4",
    240: "Colgante_1",
    241: "Colgante_2",
    242: "Colgante_3",
    243: "Colgante_4",
    250: "Atlantis_1",
    251: "Atlantis_2",
    252: "Atlantis_3",
    253: "Atlantis_4",
    260: "RomanDice_1",
    261: "RomanDice_2",
    262: "RomanDice_3",
    263: "RomanDice_4",
    270: "Quimbaya_1",
    271: "Quimbaya_2",
    272: "Quimbaya_3",
    273: "Quimbaya_4",
    280: "Rocket_1",
    281: "Rocket_2",
    282: "Rocket_3",
    283: "Rocket_4",
    290: "Mystery_1",
    291: "Mystery_2",
    292: "Mystery_3",
    293: "Mystery_4",

    2000: "Workbook_potentialmaxhp_3",
    2001: "Workbook_potentialattack_3",
    2002: "Workbook_potentialhealpower_3",

    3000: "BD_1_Hyakkiyako",
    3001: "BD_2_Hyakkiyako",
    3002: "BD_3_Hyakkiyako",
    3003: "BD_4_Hyakkiyako",
    3010: "BD_1_RedWinter",
    3011: "BD_2_RedWinter",
    3012: "BD_3_RedWinter",
    3013: "BD_4_RedWinter",
    3020: "BD_1_Trinity",
    3021: "BD_2_Trinity",
    3022: "BD_3_Trinity",
    3023: "BD_4_Trinity",
    3030: "BD_1_Gehenna",
    3031: "BD_2_Gehenna",
    3032: "BD_3_Gehenna",
    3033: "BD_4_Gehenna",
    3040: "BD_1_Abydos",
    3041: "BD_2_Abydos",
    3042: "BD_3_Abydos",
    3043: "BD_4_Abydos",
    3050: "BD_1_Millennium",
    3051: "BD_2_Millennium",
    3052: "BD_3_Millennium",
    3053: "BD_4_Millennium",
    3060: "BD_1_Arius",
    3061: "BD_2_Arius",
    3062: "BD_3_Arius",
    3063: "BD_4_Arius",
    3070: "BD_1_Shanhaijing",
    3071: "BD_2_Shanhaijing",
    3072: "BD_3_Shanhaijing",
    3073: "BD_4_Shanhaijing",
    3080: "BD_1_Valkyrie",
    3081: "BD_2_Valkyrie",
    3082: "BD_3_Valkyrie",
    3083: "BD_4_Valkyrie",
    3090: "BD_1_Highlander",
    3091: "BD_2_Highlander",
    3092: "BD_3_Highlander",
    3093: "BD_4_Highlander",

    4000: "TN_1_Hyakkiyako",
    4001: "TN_2_Hyakkiyako",
    4002: "TN_3_Hyakkiyako",
    4003: "TN_4_Hyakkiyako",
    4010: "TN_1_RedWinter",
    4011: "TN_2_RedWinter",
    4012: "TN_3_RedWinter",
    4013: "TN_4_RedWinter",
    4020: "TN_1_Trinity",
    4021: "TN_2_Trinity",
    4022: "TN_3_Trinity",
    4023: "TN_4_Trinity",
    4030: "TN_1_Gehenna",
    4031: "TN_2_Gehenna",
    4032: "TN_3_Gehenna",
    4033: "TN_4_Gehenna",
    4040: "TN_1_Abydos",
    4041: "TN_2_Abydos",
    4042: "TN_3_Abydos",
    4043: "TN_4_Abydos",
    4050: "TN_1_Millennium",
    4051: "TN_2_Millennium",
    4052: "TN_3_Millennium",
    4053: "TN_4_Millennium",
    4060: "TN_1_Arius",
    4061: "TN_2_Arius",
    4062: "TN_3_Arius",
    4063: "TN_4_Arius",
    4070: "TN_1_Shanhaijing",
    4071: "TN_2_Shanhaijing",
    4072: "TN_3_Shanhaijing",
    4073: "TN_4_Shanhaijing",
    4080: "TN_1_Valkyrie",
    4081: "TN_2_Valkyrie",
    4082: "TN_3_Valkyrie",
    4083: "TN_4_Valkyrie",
    4090: "TN_1_Highlander",
    4091: "TN_2_Highlander",
    4092: "TN_3_Highlander",
    4093: "TN_4_Highlander",

    5000: "favor_0_3",
    5001: "favor_1_3",
    5002: "favor_2_3",
    5003: "favor_3_3",
    5004: "favor_4_3",
    5005: "favor_5_3",
    5006: "favor_6_3",
    5007: "favor_7_3",
    5008: "favor_8_3",
    5009: "favor_9_3",
    5010: "favor_10_3",
    5011: "favor_11_3",
    5012: "favor_12_3",
    5013: "favor_13_3",
    5014: "favor_14_3",
    5015: "favor_15_3",
    5016: "favor_16_3",
    5017: "favor_17_3",
    5018: "favor_18_3",
    5019: "favor_19_3",
    5020: "favor_20_3",
    5021: "favor_21_3",
    5022: "favor_22_3",
    5023: "favor_23_3",
    5024: "favor_24_3",
    5025: "favor_25_3",
    5026: "favor_26_3",
    5027: "favor_27_3",
    5028: "favor_28_3",
    5029: "favor_29_3",
    5030: "favor_30_3",
    5031: "favor_31_3",
    5032: "favor_32_3",
    5033: "favor_33_3",
    5034: "favor_34_3",

    9999: "Secret"
});

const gearLookup = ["T2_Hat", "T2_Gloves", "T2_Shoes", "T2_Bag", "T2_Badge", "T2_Hairpin", "T2_Charm", "T2_Watch", "T2_Necklace",
    "T3_Hat", "T3_Gloves", "T3_Shoes", "T3_Bag", "T3_Badge", "T3_Hairpin", "T3_Charm", "T3_Watch", "T3_Necklace",
    "T4_Hat", "T4_Gloves", "T4_Shoes", "T4_Bag", "T4_Badge", "T4_Hairpin", "T4_Charm", "T4_Watch", "T4_Necklace",
    "T5_Hat", "T5_Gloves", "T5_Shoes", "T5_Bag", "T5_Badge", "T5_Hairpin", "T5_Charm", "T5_Watch", "T5_Necklace",
    "T6_Hat", "T6_Gloves", "T6_Shoes", "T6_Bag", "T6_Badge", "T6_Hairpin", "T6_Charm", "T6_Watch", "T6_Necklace",
    "T7_Hat", "T7_Gloves", "T7_Shoes", "T7_Bag", "T7_Badge", "T7_Hairpin", "T7_Charm", "T7_Watch", "T7_Necklace",
    "T8_Hat", "T8_Gloves", "T8_Shoes", "T8_Bag", "T8_Badge", "T8_Hairpin", "T8_Charm", "T8_Watch", "T8_Necklace",
    "T9_Hat", "T9_Gloves", "T9_Shoes", "T9_Bag", "T9_Badge", "T9_Hairpin", "T9_Charm", "T9_Watch", "T9_Necklace",
    "T10_Hat", "T10_Gloves", "T10_Shoes", "T10_Bag", "T10_Badge", "T10_Hairpin", "T10_Charm", "T10_Watch", "T10_Necklace"]

var rowColours = {
    "Abydos": "#9ce4fc66", "Gehenna": "#ec7d7966", "Millennium": "#9ebdfa66", "Trinity": "#fcd19c66", "Hyakkiyako": "#f0a8c466", "Arius": "#dbdad85e",
    "Shanhaijing": "#b4feca66", "Red Winter": "#d98c9e66", "Valkyrie": "#a1a9e166", "Highlander": "#5A5770", "Nebra": "#99919466", "Phaistos": "#fdf7e766", "Wolfsegg": "#93a5f266",
    "Nimrud": "#67e4ef66", "Mandragora": "#a1ede566", "Rohonc": "#c9ab9366", "Aether": "#ca96e066", "Antikythera": "#f7e28866",
    "Voynich": "#84b28066", "Haniwa": "#e7bef466", "Baghdad": "#d179a066", "Totem": "#b77e6166", "Fleece": "#fdf76966", "Okiku": "#ff88294a", "Atlantis": "#ecff2933",
    "Colgante": "#c2cdfe70", "Mystery": "#305c894a", "RomanDice": "#71bec566", "Quimbaya": "#e3df7466", "Rocket": "#c0f2f366", "Workbook": "#c2cdfe70", "favor": "#fdf7e766",
    "Gloves": "#84848436", "Bag": "#84848436", "Hairpin": "#84848436", "Watch": "#84848436"
};

const propertyColours = {
    "Explosion": "#ec242487", "Pierce": "#fff10099", "Mystic": "#1070a5c2", "Sonic": "#c246d79e",
    "LightArmor": "#ec242487", "HeavyArmor": "#fff10099", "Unarmed": "#1070a5c2", "ElasticArmor": "#c246d79e",
    "Striker": "#cc1a2587", "Special": "#006aff87",
    "Abydos": "#9ce4fc66", "Gehenna": "#ec7d7966", "Millennium": "#9ebdfa66", "Trinity": "#fcd19c66", "Hyakkiyako": "#f0a8c466",
    "Arius": "#dbdad85e", "Shanhaijing": "#b4feca66", "RedWinter": "#d98c9e66", "Valkyrie": "#a1a9e166", "Highlander": "#5A5770"
}

const exportDataVersion = 2;
// perhaps need to move this to JSON file later lmao, is probably getting a bit big
// also perhaps later add functionality to set validation for a whole class of inputs rather than just invidually
class Student {

    constructor(characterInfo) {
        this.id = characterInfo.Id;
        this.name = characterInfo.Name;
        this.current = StudentInvestment.Default(characterInfo);
        this.target = StudentInvestment.DefaultTarget(characterInfo);
        this.eleph = ElephInfo.Default();
        this.enabled = true;
    }

    static FromVersion1Data(version1) {

        var student = new Student({
            Id: version1.id,
            Name: version1.name
        });
        student.enabled = version1.enabled;

        const props = ['level', 'bond', 'star', 'ue', 'ue_level', 'ex', 'basic', 'passive', 'sub', 'gear1', 'gear2', 'gear3', "bondgear", "potentialmaxhp", "potentialattack", "potentialhealpower"]
        var cur = [];
        var tar = [];
        for (var prop of props) {
            cur.push(version1[prop]);
            tar.push(version1[prop + "_target"]);
        }

        student.current = new StudentInvestment(...cur);
        student.target = new StudentInvestment(...tar);

        return student;
    }
}

class ElephInfo {

    constructor(owned, unlocked, cost, purchasable, farm_nodes, node_refresh, use_eligma, use_shop) {
        this.owned = owned;
        this.unlocked = unlocked;
        this.cost = cost;
        this.purchasable = purchasable;
        this.farm_nodes = farm_nodes;
        this.node_refresh = node_refresh;
        this.use_eligma = use_eligma;
        this.use_shop = use_shop;
    }

    static Default() {
        var data = [
            0,
            true,
            1,
            20,
            0,
            false,
            false,
            false
        ];

        return new ElephInfo(...data);
    }
}

class StudentInvestment {

    constructor(level, bond, star, ue, ue_level, ex, basic, passive, sub, gear1, gear2, gear3, bondgear, potentialmaxhp, potentialattack, potentialhealpower) {
        this.level = level;
        this.bond = bond;
        this.star = star;
        this.ue = ue;
        this.ue_level = ue_level;
        this.ex = ex;
        this.basic = basic;
        this.passive = passive;
        this.sub = sub;
        this.gear1 = gear1;
        this.gear2 = gear2;
        this.gear3 = gear3;
        this.bondgear = bondgear;
        this.potentialmaxhp = potentialmaxhp;
        this.potentialattack = potentialattack;
        this.potentialhealpower = potentialhealpower;
    }

    static Default(characterInfo) {
        var data = [
            1,
            1,
            characterInfo?.StarGrade ?? 1,
            0,
            0,

            1,
            1,
            0,
            0,

            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];

        return new StudentInvestment(...data);
    }

    static DefaultTarget(characterInfo) {
        var defaultTarget = StudentInvestment.Default(characterInfo);
        defaultTarget.ex = inputValidation.ex_target.default;
        defaultTarget.basic = inputValidation.basic_target.default;
        defaultTarget.passive = inputValidation.passive_target.default;
        defaultTarget.sub = inputValidation.sub_target.default;

        defaultTarget.bond = inputValidation.bond_target.default;
        defaultTarget.level = inputValidation.level_target.default;
        defaultTarget.star = characterInfo?.BaseStar ?? 1;
        defaultTarget.ue = 0;
        defaultTarget.ue_level = inputValidation.ue_level_target.default;

        defaultTarget.gear1 = inputValidation.gear1_target.default;
        defaultTarget.gear2 = inputValidation.gear2_target.default;
        defaultTarget.gear2 = inputValidation.gear2_target.default;

        defaultTarget.bondgear = inputValidation.bondgear_target.default;
        defaultTarget.potentialmaxhp = inputValidation.potentialmaxhp_target.default;
        defaultTarget.potentialattack = inputValidation.potentialattack_target.default;
        defaultTarget.potentialhealpower = inputValidation.potentialhealpower_target.default;

        return defaultTarget
    }
}
const inputValidation = {
    "level": {
        id: "input_level_current",
        location: "characterModal",
        min: "1",
        max: "90",
        default: "1",
        name: "Level",
        "navigation": "direct",
        "Down": "input_level_target",
        "Right": "input_level_target"
    },
    "level_target": {
        id: "input_level_target",
        location: "characterModal",
        min: "1",
        max: "90",
        default: "1",
        name: "Level Target",
        requisite: {
            "level": {
                type: "input",
                compare: "equal_greater",
                mode: "direct",
                sanitise: true
            }
        },
        "navigation": "direct",
        "Up": "input_level_current",
        "Left": "input_level_current",
        "Down": "input_ex_current",
        "Right": "input_bond_current"
    },
    "bulk-level": {
        id: "bulk-input_level_current",
        location: "bulkEditModal",
        min: "1",
        max: "90",
        default: "1",
        blankable: true,
        name: "Level",
        "navigation": "direct",
        "Down": "bulk-input_level_target",
        "Right": "bulk-input_level_target"
    },
    "bulk-level_target": {
        id: "bulk-input_level_target",
        location: "bulkEditModal",
        min: "1",
        max: "90",
        default: "1",
        blankable: true,
        name: "Level Target",
        requisite: {
            "bulk-level": {
                type: "input",
                compare: "equal_greater",
                mode: "direct",
                sanitise: true
            }
        },
        "navigation": "direct",
        "Up": "bulk-input_level_current",
        "Left": "bulk-input_level_current",
        "Down": "bulk-input_ex_current",
        "Right": "bulk-input_bond_current"
    },
    "ue_level": {
        id: "input_ue_level_current",
        location: "characterModal",
        min: "0",
        max: "60",
        default: "0",
        name: "UE Level",
        requisite: {
            "modalStars.ue": {
                type: "object",
                name: "Target UE Stars",
                compare: "equal_greater",
                mode: "threshold",
                sanitise: true,
                levels: [
                    {
                        required: "4",
                        max: "60"
                    },
                    {
                        required: "3",
                        max: "50"
                    },
                    {
                        required: "2",
                        max: "40"
                    },
                    {
                        required: "1",
                        max: "30"
                    },
                    {
                        max: "0"
                    }
                ]
            }
        },
        "navigation": "direct",
        "Up": "input_bond_target",
        "Left": "input_bond_target",
        "Down": "input_ue_level_target",
        "Right": "input_ue_level_target"
    },
    "ue_level_target": {
        id: "input_ue_level_target",
        location: "characterModal",
        min: "0",
        max: "60",
        default: "0",
        name: "UE Level Target",
        requisite: {
            "modalStars.ue_target": {
                type: "object",
                name: "Target UE Stars",
                compare: "equal_greater",
                mode: "threshold",
                sanitise: true,
                levels: [
                    {
                        required: "4",
                        max: "60"
                    },
                    {
                        required: "3",
                        max: "50"
                    },
                    {
                        required: "2",
                        max: "40"
                    },
                    {
                        required: "1",
                        max: "30"
                    },
                    {
                        max: "0"
                    }
                ]
            },
            "ue_level": {
                type: "input",
                compare: "equal_greater",
                mode: "direct",
                sanitise: true
            }
        },
        "navigation": "direct",
        "Up": "input_ue_level_current",
        "Left": "input_ue_level_current",
        "Down": "input_ex_current",
        "Right": "input_ex_current"
    },
    "bulk-ue_level": {
        id: "bulk-input_ue_level_current",
        location: "bulkEditModal",
        min: "0",
        max: "60",
        default: "0",
        blankable: true,
        name: "UE Level",
        requisite: {},
        "navigation": "direct",
        "Up": "bulk-input_bond_target",
        "Left": "bulk-input_bond_target",
        "Down": "bulk-input_ue_level_target",
        "Right": "bulk-input_ue_level_target"
    },
    "bulk-ue_level_target": {
        id: "bulk-input_ue_level_target",
        location: "bulkEditModal",
        min: "0",
        max: "60",
        default: "0",
        blankable: true,
        name: "UE Level Target",
        requisite: {
            "bulk-ue_level": {
                type: "input",
                compare: "equal_greater",
                mode: "direct",
                sanitise: true
            }
        },
        "navigation": "direct",
        "Up": "bulk-input_ue_level_current",
        "Left": "bulk-input_ue_level_current",
        "Down": "bulk-input_ex_current",
        "Right": "bulk-input_ex_current"
    },
    "bond": {
        id: "input_bond_current",
        location: "characterModal",
        min: "1",
        max: "100",
        default: "1",
        name: "Bond",
        requisite: {},
        "navigation": "direct",
        "Up": "input_level_target",
        "Left": "input_level_target",
        "Down": "input_bond_target",
        "Right": "input_bond_target"
    },
    "bond_target": {
        id: "input_bond_target",
        location: "characterModal",
        min: "1",
        max: "100",
        default: "1",
        name: "Bond Target",
        requisite: {
            "bond": {
                type: "input",
                compare: "equal_greater",
                mode: "direct",
                sanitise: true
            }
        },
        "navigation": "direct",
        "Up": "input_bond_current",
        "Left": "input_bond_current",
        "Down": "input_bondgear_current",
        "Right": "input_ue_level_current"
    },
    "bondgear": {
        id: "input_bondgear_current",
        location: "characterModal",
        min: "0",
        max: "2",
        default: "0",
        name: "Bondgear",
        requisite: {},
        "navigation": "direct",
        "Up": "input_bond_target",
        "Left": "input_bond_target",
        "Down": "input_bondgear_target",
        "Right": "input_bondgear_target"
    },
    "bondgear_target": {
        id: "input_bondgear_target",
        location: "characterModal",
        min: "0",
        max: "2",
        default: "0",
        name: "Bondgear Target",
        requisite: {
            "bondgear": {
                type: "input",
                compare: "equal_greater",
                mode: "direct",
                sanitise: true
            }
        },
        "navigation": "direct",
        "Up": "input_bondgear_current",
        "Left": "input_bondgear_current",
        "Down": "input_potentialmaxhp_current",
        "Right": "input_potentialmaxhp_current"
    },
    "potentialmaxhp": {
        id: "input_potentialmaxhp_current",
        location: "characterModal",
        min: "0",
        max: "25",
        default: "0",
        name: "Potentialattack",
        requisite: {},
        "navigation": "direct",
        "Up": "input_bondgear_target",
        "Left": "input_bondgear_target",
        "Down": "input_potentialmaxhp_target",
        "Right": "input_potentialmaxhp_target"
    },
    "potentialmaxhp_target": {
        id: "input_potentialmaxhp_target",
        location: "characterModal",
        min: "0",
        max: "25",
        default: "0",
        name: "Potentialmaxhp Target",
        requisite: {
            "potentialmaxhp": {
                type: "input",
                compare: "equal_greater",
                mode: "direct",
                sanitise: true
            }
        },
        "navigation": "direct",
        "Up": "input_potentialmaxhp_current",
        "Left": "input_potentialmaxhp_current",
        "Down": "input_potentialattack_current",
        "Right": "input_potentialattack_current"
    },
    "potentialattack": {
        id: "input_potentialattack_current",
        location: "characterModal",
        min: "0",
        max: "25",
        default: "0",
        name: "Potentialattack",
        requisite: {},
        "navigation": "direct",
        "Up": "input_potentialmaxhp_target",
        "Left": "input_potentialmaxhp_target",
        "Down": "input_potentialattack_target",
        "Right": "input_potentialattack_target"
    },
    "potentialattack_target": {
        id: "input_potentialattack_target",
        location: "characterModal",
        min: "0",
        max: "25",
        default: "0",
        name: "Potentialattack Target",
        requisite: {
            "potentialattack": {
                type: "input",
                compare: "equal_greater",
                mode: "direct",
                sanitise: true
            }
        },
        "navigation": "direct",
        "Up": "input_potentialattack_current",
        "Left": "input_potentialattack_current",
        "Down": "input_potentialhealpower_current",
        "Right": "input_potentialhealpower_current"
    },
    "potentialhealpower": {
        id: "input_potentialhealpower_current",
        location: "characterModal",
        min: "0",
        max: "25",
        default: "0",
        name: "Potentialhealpower",
        requisite: {},
        "navigation": "direct",
        "Up": "input_potentialattack_target",
        "Left": "input_potentialattack_target",
        "Down": "input_potentialhealpower_target",
        "Right": "input_potentialhealpower_target"
    },
    "potentialhealpower_target": {
        id: "input_potentialhealpower_target",
        location: "characterModal",
        min: "0",
        max: "25",
        default: "0",
        name: "Potentialhealpower Target",
        requisite: {
            "potentialhealpower": {
                type: "input",
                compare: "equal_greater",
                mode: "direct",
                sanitise: true
            }
        },
        "navigation": "direct",
        "Up": "input_potentialhealpower_current",
        "Left": "input_potentialhealpower_current",
        "Down": "input_ex_current",
        "Right": "input_ue_level_current"
    },
    "bulk-bond": {
        id: "bulk-input_bond_current",
        location: "bulkEditModal",
        min: "1",
        max: "100",
        default: "1",
        blankable: true,
        name: "Bond",
        requisite: {},
        "navigation": "direct",
        "Up": "bulk-input_level_target",
        "Left": "bulk-input_level_target",
        "Down": "bulk-input_bond_target",
        "Right": "bulk-input_bond_target"
    },
    "bulk-bond_target": {
        id: "bulk-input_bond_target",
        location: "bulkEditModal",
        min: "1",
        max: "100",
        default: "1",
        blankable: true,
        name: "Bond Target",
        requisite: {
            "bulk-bond": {
                type: "input",
                compare: "equal_greater",
                mode: "direct",
                sanitise: true
            }
        },
        "navigation": "direct",
        "Up": "bulk-input_bond_current",
        "Left": "bulk-input_bond_current",
        "Down": "bulk-input_ex_current",
        "Right": "bulk-input_ue_level_current"
    },
    "ex": {
        id: "input_ex_current",
        location: "characterModal",
        min: "1",
        max: "5",
        default: "1",
        name: "EX",
        "navigation": "direct",
        "Up": "input_level_target",
        "Left": "input_level_target",
        "Down": "input_ex_target",
        "Right": "input_basic_current"
    },
    "ex_target": {
        id: "input_ex_target",
        location: "characterModal",
        min: "1",
        max: "5",
        default: "1",
        name: "EX Target",
        requisite: {
            "ex": {
                type: "input",
                compare: "equal_greater",
                mode: "direct",
                sanitise: true
            }
        },
        "navigation": "direct",
        "Up": "input_ex_current",
        "Left": "input_sub_current",
        "Down": "input_basic_current",
        "Right": "input_basic_target"
    },
    "bulk-ex": {
        id: "bulk-input_ex_current",
        location: "bulkEditModal",
        min: "1",
        max: "5",
        default: "1",
        blankable: true,
        name: "EX",
        "navigation": "direct",
        "Up": "bulk-input_level_target",
        "Left": "bulk-input_level_target",
        "Down": "bulk-input_ex_target",
        "Right": "bulk-input_basic_current"
    },
    "bulk-ex_target": {
        id: "bulk-input_ex_target",
        location: "bulkEditModal",
        min: "1",
        max: "5",
        default: "1",
        blankable: true,
        name: "EX Target",
        requisite: {
            "bulk-ex": {
                type: "input",
                compare: "equal_greater",
                mode: "direct",
                sanitise: true
            }
        },
        "navigation": "direct",
        "Up": "bulk-input_ex_current",
        "Left": "bulk-input_sub_current",
        "Down": "bulk-input_basic_current",
        "Right": "bulk-input_basic_target"
    },
    "basic": {
        id: "input_basic_current",
        location: "characterModal",
        min: "1",
        max: "10",
        default: "1",
        name: "Basic",
        "navigation": "direct",
        "Up": "input_ex_target",
        "Left": "input_ex_current",
        "Down": "input_basic_target",
        "Right": "input_enhanced_current"
    },
    "basic_target": {
        id: "input_basic_target",
        location: "characterModal",
        min: "1",
        max: "10",
        default: "1",
        name: "Basic Target",
        requisite: {
            "basic": {
                type: "input",
                compare: "equal_greater",
                mode: "direct",
                sanitise: true
            }
        },
        "navigation": "direct",
        "Up": "input_basic_current",
        "Left": "input_ex_target",
        "Down": "input_enhanced_current",
        "Right": "input_enhanced_target"
    },
    "bulk-basic": {
        id: "bulk-input_basic_current",
        location: "bulkEditModal",
        min: "1",
        max: "10",
        default: "1",
        blankable: true,
        name: "Basic",
        "navigation": "direct",
        "Up": "bulk-input_ex_target",
        "Left": "bulk-input_ex_current",
        "Down": "bulk-input_basic_target",
        "Right": "bulk-input_enhanced_current"
    },
    "bulk-basic_target": {
        id: "bulk-input_basic_target",
        location: "bulkEditModal",
        min: "1",
        max: "10",
        default: "1",
        blankable: true,
        name: "Basic Target",
        requisite: {
            "bulk-basic": {
                type: "input",
                compare: "equal_greater",
                mode: "direct",
                sanitise: true
            }
        },
        "navigation": "direct",
        "Up": "bulk-input_basic_current",
        "Left": "bulk-input_ex_target",
        "Down": "bulk-input_enhanced_current",
        "Right": "bulk-input_enhanced_target"
    },
    "passive": {
        id: "input_enhanced_current",
        location: "characterModal",
        min: "0",
        max: "10",
        default: "0",
        name: "Enhanced",
        requisite: {},
        "navigation": "direct",
        "Up": "input_basic_target",
        "Left": "input_basic_current",
        "Down": "input_enhanced_target",
        "Right": "input_sub_current"
    },
    "passive_target": {
        id: "input_enhanced_target",
        location: "characterModal",
        min: "0",
        max: "10",
        default: "0",
        name: "Enhanced Target",
        requisite: {
            "passive": {
                type: "input",
                compare: "equal_greater",
                mode: "direct",
                sanitise: true
            }
        },
        "navigation": "direct",
        "Up": "input_enhanced_current",
        "Left": "input_basic_target",
        "Down": "input_sub_current",
        "Right": "input_sub_target"
    },
    "bulk-passive": {
        id: "bulk-input_enhanced_current",
        location: "bulkEditModal",
        min: "0",
        max: "10",
        default: "0",
        blankable: true,
        name: "Enhanced",
        requisite: {},
        "navigation": "direct",
        "Up": "bulk-input_basic_target",
        "Left": "bulk-input_basic_current",
        "Down": "bulk-input_enhanced_target",
        "Right": "bulk-input_sub_current"
    },
    "bulk-passive_target": {
        id: "bulk-input_enhanced_target",
        location: "bulkEditModal",
        min: "0",
        max: "10",
        default: "0",
        blankable: true,
        name: "Enhanced Target",
        requisite: {
            "bulk-passive": {
                type: "input",
                compare: "equal_greater",
                mode: "direct",
                sanitise: true
            }
        },
        "navigation": "direct",
        "Up": "bulk-input_enhanced_current",
        "Left": "bulk-input_basic_target",
        "Down": "bulk-input_sub_current",
        "Right": "bulk-input_sub_target"
    },
    "sub": {
        id: "input_sub_current",
        location: "characterModal",
        min: "0",
        max: "10",
        default: "0",
        name: "Sub",
        requisite: {},
        "navigation": "direct",
        "Up": "input_enhanced_target",
        "Left": "input_enhanced_current",
        "Down": "input_sub_target",
        "Right": "input_ex_target"
    },
    "sub_target": {
        id: "input_sub_target",
        location: "characterModal",
        min: "0",
        max: "10",
        default: "0",
        name: "Sub Target",
        requisite: {
            "sub": {
                type: "input",
                compare: "equal_greater",
                mode: "direct",
                sanitise: true
            }
        },
        "navigation": "direct",
        "Up": "input_sub_current",
        "Left": "input_enhanced_target",
        "Down": "input_gear1_current",
        "Right": "input_gear1_current"
    },
    "bulk-sub": {
        id: "bulk-input_sub_current",
        location: "bulkEditModal",
        min: "0",
        max: "10",
        default: "0",
        blankable: true,
        name: "Sub",
        requisite: {},
        "navigation": "direct",
        "Up": "bulk-input_enhanced_target",
        "Left": "bulk-input_enhanced_current",
        "Down": "bulk-input_sub_target",
        "Right": "bulk-input_ex_target"
    },
    "bulk-sub_target": {
        id: "bulk-input_sub_target",
        location: "bulkEditModal",
        min: "0",
        max: "10",
        default: "0",
        blankable: true,
        name: "Sub Target",
        requisite: {
            "bulk-sub": {
                type: "input",
                compare: "equal_greater",
                mode: "direct",
                sanitise: true
            }
        },
        "navigation": "direct",
        "Up": "bulk-input_sub_current",
        "Left": "bulk-input_enhanced_target",
        "Down": "bulk-input_gear1_current",
        "Right": "bulk-input_gear1_current"
    },
    "gear1": {
        id: "input_gear1_current",
        location: "characterModal",
        min: "0",
        max: "10",
        default: "0",
        name: "Gear 1",
        "navigation": "direct",
        "Up": "input_sub_target",
        "Left": "input_sub_target",
        "Down": "input_gear1_target",
        "Right": "input_gear2_current"
    },
    "gear1_target": {
        id: "input_gear1_target",
        location: "characterModal",
        min: "0",
        max: "10",
        default: "0",
        name: "Gear 1 Target",
        requisite: {
            "gear1": {
                type: "input",
                compare: "equal_greater",
                mode: "direct",
                sanitise: true
            }
        },
        "navigation": "direct",
        "Up": "input_gear1_current",
        "Left": "input_gear3_current",
        "Down": "input_gear2_current",
        "Right": "input_gear2_target"
    },
    "bulk-gear1": {
        id: "bulk-input_gear1_current",
        location: "bulkEditModal",
        min: "0",
        max: "10",
        default: "0",
        blankable: true,
        name: "Gear 1",
        "navigation": "direct",
        "Up": "bulk-input_sub_target",
        "Left": "bulk-input_sub_target",
        "Down": "bulk-input_gear1_target",
        "Right": "bulk-input_gear2_current"
    },
    "bulk-gear1_target": {
        id: "bulk-input_gear1_target",
        location: "bulkEditModal",
        min: "0",
        max: "10",
        default: "0",
        blankable: true,
        name: "Gear 1 Target",
        requisite: {
            "bulk-gear1": {
                type: "input",
                compare: "equal_greater",
                mode: "direct",
                sanitise: true
            }
        },
        "navigation": "direct",
        "Up": "bulk-input_gear1_current",
        "Left": "bulk-input_gear3_current",
        "Down": "bulk-input_gear2_current",
        "Right": "bulk-input_gear2_target"
    },
    "gear2": {
        id: "input_gear2_current",
        location: "characterModal",
        min: "0",
        max: "10",
        default: "0",
        name: "Gear 2",
        requisite: {},
        "navigation": "direct",
        "Up": "input_gear1_target",
        "Left": "input_gear1_current",
        "Down": "input_gear2_target",
        "Right": "input_gear3_current"
    },
    "gear2_target": {
        id: "input_gear2_target",
        location: "characterModal",
        min: "0",
        max: "10",
        default: "0",
        name: "Gear 2 Target",
        requisite: {
            "gear2": {
                type: "input",
                compare: "equal_greater",
                mode: "direct",
                sanitise: true
            }
        },
        "navigation": "direct",
        "Up": "input_gear2_current",
        "Left": "input_gear1_target",
        "Down": "input_gear3_current",
        "Right": "input_gear3_target"
    },
    "bulk-gear2": {
        id: "bulk-input_gear2_current",
        location: "bulkEditModal",
        min: "0",
        max: "10",
        default: "0",
        blankable: true,
        name: "Gear 2",
        requisite: {},
        "navigation": "direct",
        "Up": "bulk-input_gear1_target",
        "Left": "bulk-input_gear1_current",
        "Down": "bulk-input_gear2_target",
        "Right": "bulk-input_gear3_current"
    },
    "bulk-gear2_target": {
        id: "bulk-input_gear2_target",
        location: "bulkEditModal",
        min: "0",
        max: "10",
        default: "0",
        blankable: true,
        name: "Gear 2 Target",
        requisite: {
            "bulk-gear2": {
                type: "input",
                compare: "equal_greater",
                mode: "direct",
                sanitise: true
            }
        },
        "navigation": "direct",
        "Up": "bulk-input_gear2_current",
        "Left": "bulk-input_gear1_target",
        "Down": "bulk-input_gear3_current",
        "Right": "bulk-input_gear3_target"
    },
    "gear3": {
        id: "input_gear3_current",
        location: "characterModal",
        min: "0",
        max: "10",
        default: "0",
        name: "Gear 3",
        requisite: {
            // "level_target": {
            //     type: "input",
            //     name: "Level Target",
            //     compare: "equal_greater",
            //     mode: "threshold",
            //     sanitise: true,
            //     levels: [
            //         {
            //             required: "35",
            //             max: "7"
            //         },
            //         {
            //             max: "0"
            //         }
            //     ]
            // }
        },
        "navigation": "direct",
        "Up": "input_gear2_target",
        "Left": "input_gear2_current",
        "Down": "input_gear3_target",
        "Right": "input_gear1_target"
    },
    "gear3_target": {
        id: "input_gear3_target",
        location: "characterModal",
        min: "0",
        max: "10",
        default: "0",
        name: "Gear 3 Target",
        requisite: {
            // "level_target": {
            //     type: "input",
            //     name: "Level Target",
            //     compare: "equal_greater",
            //     mode: "threshold",
            //     sanitise: true,
            //     levels: [
            //         {
            //             required: "35",
            //             max: "7"
            //         },
            //         {
            //             max: "0"
            //         }
            //     ]
            // },
            "gear3": {
                type: "input",
                compare: "equal_greater",
                mode: "direct",
                sanitise: true
            }
        },
        "navigation": "direct",
        "Up": "input_gear3_current",
        "Left": "input_gear2_target",
        "Down": "input_ue_level_current"
    },
    "bulk-gear3": {
        id: "bulk-input_gear3_current",
        location: "bulkEditModal",
        min: "0",
        max: "10",
        default: "0",
        blankable: true,
        name: "Gear 3",
        requisite: {},
        "navigation": "direct",
        "Up": "bulk-input_gear2_target",
        "Left": "bulk-input_gear2_current",
        "Down": "bulk-input_gear3_target",
        "Right": "bulk-input_gear1_target"
    },
    "bulk-gear3_target": {
        id: "bulk-input_gear3_target",
        location: "bulkEditModal",
        min: "0",
        max: "10",
        default: "0",
        blankable: true,
        name: "Gear 3 Target",
        requisite: {
            "bulk-gear3": {
                type: "input",
                compare: "equal_greater",
                mode: "direct",
                sanitise: true
            }
        },
        "navigation": "direct",
        "Up": "bulk-input_gear3_current",
        "Left": "bulk-input_gear2_target",
        "Down": "bulk-input_ue_level_current"
    },
    "BD_1_Abydos": {
        "id": "input-BD_1_Abydos",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-BD_4_Gehenna"
    },
    "BD_1_Gehenna": {
        "id": "input-BD_1_Gehenna",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-BD_4_Trinity"
    },
    "BD_1_Millennium": {
        "id": "input-BD_1_Millennium",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-BD_4_Abydos"
    },
    "BD_1_Trinity": {
        "id": "input-BD_1_Trinity",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-BD_4_RedWinter"
    },
    "BD_1_Hyakkiyako": {
        "id": "input-BD_1_Hyakkiyako",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "BD_1_Shanhaijing": {
        "id": "input-BD_1_Shanhaijing",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-BD_4_Arius"
    },
    "BD_1_Arius": {
        "id": "input-BD_1_Arius",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-BD_4_Millennium"
    },
    "BD_1_RedWinter": {
        "id": "input-BD_1_RedWinter",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-BD_4_Hyakkiyako"
    },
    "BD_1_Valkyrie": {
        "id": "input-BD_1_Valkyrie",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-BD_4_Shanhaijing"
    },
    "BD_1_Highlander": {
        "id": "input-BD_1_Highlander",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-BD_2_Highlander"
    },
    "BD_2_Abydos": {
        "id": "input-BD_2_Abydos",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "BD_2_Gehenna": {
        "id": "input-BD_2_Gehenna",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "BD_2_Millennium": {
        "id": "input-BD_2_Millennium",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "BD_2_Trinity": {
        "id": "input-BD_2_Trinity",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "BD_2_Hyakkiyako": {
        "id": "input-BD_2_Hyakkiyako",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Up": "input-BD_3_Highlander"
    },
    "BD_2_Shanhaijing": {
        "id": "input-BD_2_Shanhaijing",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "BD_2_Arius": {
        "id": "input-BD_2_Arius",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "BD_2_RedWinter": {
        "id": "input-BD_2_RedWinter",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "BD_2_Valkyrie": {
        "id": "input-BD_2_Valkyrie",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
    },
    "BD_2_Highlander": {
        "id": "input-BD_2_Highlander",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-BD_3_Highlander",
    },
    "BD_3_Abydos": {
        "id": "input-BD_3_Abydos",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "BD_3_Gehenna": {
        "id": "input-BD_3_Gehenna",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "BD_3_Millennium": {
        "id": "input-BD_3_Millennium",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "BD_3_Trinity": {
        "id": "input-BD_3_Trinity",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "BD_3_Hyakkiyako": {
        "id": "input-BD_3_Hyakkiyako",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Up": "input-BD_4_Highlander"
    },
    "BD_3_Shanhaijing": {
        "id": "input-BD_3_Shanhaijing",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "BD_3_Arius": {
        "id": "input-BD_3_Arius",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "BD_3_RedWinter": {
        "id": "input-BD_3_RedWinter",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "BD_3_Valkyrie": {
        "id": "input-BD_3_Valkyrie",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
    },
    "BD_3_Highlander": {
        "id": "input-BD_3_Highlander",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-BD_4_Highlander"
    },
    "BD_4_Abydos": {
        "id": "input-BD_4_Abydos",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-BD_1_Millennium"
    },
    "BD_4_Gehenna": {
        "id": "input-BD_4_Gehenna",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-BD_1_Abydos"
    },
    "BD_4_Millennium": {
        "id": "input-BD_4_Millennium",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-BD_1_Arius"
    },
    "BD_4_Trinity": {
        "id": "input-BD_4_Trinity",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-BD_1_Gehenna"
    },
    "BD_4_Hyakkiyako": {
        "id": "input-BD_4_Hyakkiyako",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-BD_1_RedWinter",
        "Up": "input-BD_3_Valkyrie"
    },
    "BD_4_Shanhaijing": {
        "id": "input-BD_4_Shanhaijing",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-BD_1_Valkyrie"
    },
    "BD_4_Arius": {
        "id": "input-BD_4_Arius",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-BD_1_Shanhaijing"
    },
    "BD_4_RedWinter": {
        "id": "input-BD_4_RedWinter",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-BD_1_Trinity"
    },
    "BD_4_Valkyrie": {
        "id": "input-BD_4_Valkyrie",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-BD_1_Highlander"
    },
    "BD_4_Highlander": {
        "id": "input-BD_4_Highlander",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-BD_4_Valkyrie",
        "Right": "input-TN_1_Hyakkiyako",
        "Down": "input-TN_1_Hyakkiyako"
    },
    "TN_1_Abydos": {
        "id": "input-TN_1_Abydos",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-TN_4_Gehenna"
    },
    "TN_1_Gehenna": {
        "id": "input-TN_1_Gehenna",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-TN_4_Trinity"
    },
    "TN_1_Millennium": {
        "id": "input-TN_1_Millennium",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-TN_4_Abydos"
    },
    "TN_1_Trinity": {
        "id": "input-TN_1_Trinity",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-TN_4_RedWinter"
    },
    "TN_1_Hyakkiyako": {
        "id": "input-TN_1_Hyakkiyako",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-BD_4_Highlander",
        "Up": "input-BD_4_Highlander"
    },
    "TN_1_Shanhaijing": {
        "id": "input-TN_1_Shanhaijing",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-TN_4_Arius"
    },
    "TN_1_Arius": {
        "id": "input-TN_1_Arius",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-TN_4_Millennium"
    },
    "TN_1_RedWinter": {
        "id": "input-TN_1_RedWinter",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-TN_4_Hyakkiyako"
    },
    "TN_1_Valkyrie": {
        "id": "input-TN_1_Valkyrie",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-TN_4_Shanhaijing",
    },
    "TN_1_Highlander": {
        "id": "input-TN_1_Highlander",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-TN_4_Valkyrie",
        "Right": "input-TN_2_Highlander"
    },
    "TN_2_Abydos": {
        "id": "input-TN_2_Abydos",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "TN_2_Gehenna": {
        "id": "input-TN_2_Gehenna",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "TN_2_Millennium": {
        "id": "input-TN_2_Millennium",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "TN_2_Trinity": {
        "id": "input-TN_2_Trinity",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "TN_2_Hyakkiyako": {
        "id": "input-TN_2_Hyakkiyako",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Up": "input-TN_3_Highlander"
    },
    "TN_2_Shanhaijing": {
        "id": "input-TN_2_Shanhaijing",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "TN_2_Arius": {
        "id": "input-TN_2_Arius",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "TN_2_RedWinter": {
        "id": "input-TN_2_RedWinter",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "TN_2_Valkyrie": {
        "id": "input-TN_2_Valkyrie",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
    },
    "TN_2_Highlander": {
        "id": "input-TN_2_Highlander",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-TN_3_Highlander"
    },
    "TN_3_Abydos": {
        "id": "input-TN_3_Abydos",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "TN_3_Gehenna": {
        "id": "input-TN_3_Gehenna",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "TN_3_Millennium": {
        "id": "input-TN_3_Millennium",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "TN_3_Trinity": {
        "id": "input-TN_3_Trinity",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "TN_3_Hyakkiyako": {
        "id": "input-TN_3_Hyakkiyako",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Up": "input-TN_4_Highlander"
    },
    "TN_3_Shanhaijing": {
        "id": "input-TN_3_Shanhaijing",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "TN_3_Arius": {
        "id": "input-TN_3_Arius",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "TN_3_RedWinter": {
        "id": "input-TN_3_RedWinter",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "TN_3_Valkyrie": {
        "id": "input-TN_3_Valkyrie",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Down": "input-TN_2_Highlander"
    },
    "TN_3_Highlander": {
        "id": "input-TN_3_Highlander",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-TN_4_Highlander",
    },
    "TN_4_Abydos": {
        "id": "input-TN_4_Abydos",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-TN_1_Millennium"
    },
    "TN_4_Gehenna": {
        "id": "input-TN_4_Gehenna",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-TN_1_Abydos"
    },
    "TN_4_Millennium": {
        "id": "input-TN_4_Millennium",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-TN_1_Arius"
    },
    "TN_4_Trinity": {
        "id": "input-TN_4_Trinity",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-TN_1_Gehenna"
    },
    "TN_4_Hyakkiyako": {
        "id": "input-TN_4_Hyakkiyako",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-TN_1_RedWinter",
        "Up": "input-TN_3_Highlander"
    },
    "TN_4_Shanhaijing": {
        "id": "input-TN_4_Shanhaijing",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-TN_1_Valkyrie"
    },
    "TN_4_Arius": {
        "id": "input-TN_4_Arius",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-TN_1_Shanhaijing"
    },
    "TN_4_RedWinter": {
        "id": "input-TN_4_RedWinter",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-TN_1_Trinity"
    },
    "TN_4_Valkyrie": {
        "id": "input-TN_4_Valkyrie",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-TN_1_Highlander",
    },
    "TN_4_Highlander": {
        "id": "input-TN_4_Highlander",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-Nebra_1",
        "Down": "input-Nebra_1"
    },
    "Nebra_1": {
        "id": "input-Nebra_1",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Up": "input-TN_4_Highlander"
    },
    "Nebra_2": {
        "id": "input-Nebra_2",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Up": "input-Haniwa_1"
    },
    "Nebra_3": {
        "id": "input-Nebra_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Up": "input-Haniwa_2"
    },
    "Nebra_4": {
        "id": "input-Nebra_4",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-Phaistos_1"
    },
    "Phaistos_1": {
        "id": "input-Phaistos_1",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-Nebra_4",
        "Right": "input-Phaistos_2"
    },
    "Phaistos_2": {
        "id": "input-Phaistos_2",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-Phaistos_3"
    },
    "Phaistos_3": {
        "id": "input-Phaistos_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-Phaistos_4"
    },
    "Phaistos_4": {
        "id": "input-Phaistos_4",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-Wolfsegg_1"
    },
    "Wolfsegg_1": {
        "id": "input-Wolfsegg_1",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-Phaistos_4"
    },
    "Wolfsegg_2": {
        "id": "input-Wolfsegg_2",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "Wolfsegg_3": {
        "id": "input-Wolfsegg_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "Wolfsegg_4": {
        "id": "input-Wolfsegg_4",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-Nimrud_1"
    },
    "Nimrud_1": {
        "id": "input-Nimrud_1",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-Wolfsegg_4"
    },
    "Nimrud_2": {
        "id": "input-Nimrud_2",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "Nimrud_3": {
        "id": "input-Nimrud_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "Nimrud_4": {
        "id": "input-Nimrud_4",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-Mandragora_1"
    },
    "Mandragora_1": {
        "id": "input-Mandragora_1",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-Nimrud_4"
    },
    "Mandragora_2": {
        "id": "input-Mandragora_2",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "Mandragora_3": {
        "id": "input-Mandragora_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "Mandragora_4": {
        "id": "input-Mandragora_4",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-Rohonc_1"
    },
    "Rohonc_1": {
        "id": "input-Rohonc_1",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-Mandragora_4"
    },
    "Rohonc_2": {
        "id": "input-Rohonc_2",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "Rohonc_3": {
        "id": "input-Rohonc_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "Rohonc_4": {
        "id": "input-Rohonc_4",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-Aether_1"
    },
    "Aether_1": {
        "id": "input-Aether_1",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-Rohonc_4"
    },
    "Aether_2": {
        "id": "input-Aether_2",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "Aether_3": {
        "id": "input-Aether_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "Aether_4": {
        "id": "input-Aether_4",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-Antikythera_1"
    },
    "Antikythera_1": {
        "id": "input-Antikythera_1",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-Aether_4"
    },
    "Antikythera_2": {
        "id": "input-Antikythera_2",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
    },
    "Antikythera_3": {
        "id": "input-Antikythera_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
    },
    "Antikythera_4": {
        "id": "input-Antikythera_4",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-Voynich_1"
    },
    "Voynich_1": {
        "id": "input-Voynich_1",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-Antikythera_4"
    },
    "Voynich_2": {
        "id": "input-Voynich_2",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "Voynich_3": {
        "id": "input-Voynich_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "Voynich_4": {
        "id": "input-Voynich_4",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-Haniwa_1"
    },
    "Haniwa_1": {
        "id": "input-Haniwa_1",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-Voynich_4",
        "Down": "input-Nebra_2"
    },
    "Haniwa_2": {
        "id": "input-Haniwa_2",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Down": "input-Nebra_3"
    },
    "Haniwa_3": {
        "id": "input-Haniwa_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Down": "input-Nebra_4"
    },
    "Haniwa_4": {
        "id": "input-Haniwa_4",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Down": "input-Totem_1",
        "Right": "input-Totem_1"
    },
    "Totem_1": {
        "id": "input-Totem_1",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-Haniwa_4",
        "Up": "input-Haniwa_4"
    },
    "Totem_2": {
        "id": "input-Totem_2",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Up": "input-Mystery_1"
    },
    "Totem_3": {
        "id": "input-Totem_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Up": "input-Mystery_2"
    },
    "Totem_4": {
        "id": "input-Totem_4",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-Baghdad_1",
        "Up": "input-Mystery_3"
    },
    "Baghdad_1": {
        "id": "input-Baghdad_1",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-Totem_4"
    },
    "Baghdad_2": {
        "id": "input-Baghdad_2",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "Baghdad_3": {
        "id": "input-Baghdad_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "Baghdad_4": {
        "id": "input-Baghdad_4",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-Fleece_1"
    },
    "Fleece_1": {
        "id": "input-Fleece_1",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-Baghdad_4"
    },
    "Fleece_2": {
        "id": "input-Fleece_2",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "Fleece_3": {
        "id": "input-Fleece_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "Fleece_4": {
        "id": "input-Fleece_4",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-Okiku_1"
    },
    "Okiku_1": {
        "id": "input-Okiku_1",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-Fleece_4"
    },
    "Okiku_2": {
        "id": "input-Okiku_2",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "Okiku_3": {
        "id": "input-Okiku_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "Okiku_4": {
        "id": "input-Okiku_4",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-Colgante_1"
    },
    "Colgante_1": {
        "id": "input-Colgante_1",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-Okiku_4"
    },
    "Colgante_2": {
        "id": "input-Colgante_2",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "Colgante_3": {
        "id": "input-Colgante_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "Colgante_4": {
        "id": "input-Colgante_4",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-Atlantis_1"
    },
    "Atlantis_1": {
        "id": "input-Atlantis_1",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-Colgante_4"
    },
    "Atlantis_2": {
        "id": "input-Atlantis_2",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "Atlantis_3": {
        "id": "input-Atlantis_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "Atlantis_4": {
        "id": "input-Atlantis_4",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-RomanDice_1"
    },
    "RomanDice_1": {
        "id": "input-RomanDice_1",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-Atlantis_4"
    },
    "RomanDice_2": {
        "id": "input-RomanDice_2",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "RomanDice_3": {
        "id": "input-RomanDice_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "RomanDice_4": {
        "id": "input-RomanDice_4",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-Quimbaya_1"
    },
    "Quimbaya_1": {
        "id": "input-Quimbaya_1",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-RomanDice_4"
    },
    "Quimbaya_2": {
        "id": "input-Quimbaya_2",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Down": "input-Totem_1"
    },
    "Quimbaya_3": {
        "id": "input-Quimbaya_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Down": "input-Totem_2"
    },
    "Quimbaya_4": {
        "id": "input-Quimbaya_4",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-Rocket_1"
    },
    "Rocket_1": {
        "id": "input-Rocket_1",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-Quimbaya_4"
    },
    "Rocket_2": {
        "id": "input-Rocket_2",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "Rocket_3": {
        "id": "input-Rocket_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "Rocket_4": {
        "id": "input-Rocket_4",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-Mystery_1"
    },
    "Mystery_1": {
        "id": "input-Mystery_1",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-Rocket_4",
        "Down": "input-Totem_2"
    },
    "Mystery_2": {
        "id": "input-Mystery_2",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "Mystery_3": {
        "id": "input-Mystery_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable"
    },
    "Mystery_4": {
        "id": "input-Mystery_4",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-Workbook_potentialmaxhp_3"
    },
    "Workbook_potentialhealpower_3": {
        "id": "input-Workbook_potentialhealpower_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-Workbook_potentialattack_3",
        "Right": "input-favor_0_3"
    },
    "Workbook_potentialattack_3": {
        "id": "input-Workbook_potentialattack_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-Workbook_potentialmaxhp_3",
        "Right": "input-Workbook_potentialhealpower_3"
    },
    "Workbook_potentialmaxhp_3": {
        "id": "input-Workbook_potentialmaxhp_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Left": "input-Mystery_4",
        "Right": "input-Workbook_potentialattack_3"
    },
    "favor_0_3": {
        "id": "input-favor_0_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_1_3",
        "Left": "input-Mystery_4"
    },
    "favor_1_3": {
        "id": "input-favor_1_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_2_3",
        "Left": "input-favor_0_3"
    },
    "favor_2_3": {
        "id": "input-favor_2_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_3_3",
        "Left": "input-favor_1_3"
    },
    "favor_3_3": {
        "id": "input-favor_3_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_4_3",
        "Left": "input-favor_2_3"
    },
    "favor_4_3": {
        "id": "input-favor_4_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_5_3",
        "Left": "input-favor_3_3"
    },
    "favor_5_3": {
        "id": "input-favor_5_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_6_3",
        "Left": "input-favor_4_3"
    },
    "favor_6_3": {
        "id": "input-favor_6_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_7_3",
        "Left": "input-favor_5_3"
    },
    "favor_7_3": {
        "id": "input-favor_7_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_8_3",
        "Left": "input-favor_6_3"
    },
    "favor_8_3": {
        "id": "input-favor_8_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_9_3",
        "Left": "input-favor_7_3"
    },
    "favor_9_3": {
        "id": "input-favor_9_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_10_3",
        "Left": "input-favor_8_3"
    },
    "favor_10_3": {
        "id": "input-favor_10_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_11_3",
        "Left": "input-favor_9_3"
    },
    "favor_11_3": {
        "id": "input-favor_11_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_12_3",
        "Left": "input-favor_10_3"
    },
    "favor_12_3": {
        "id": "input-favor_12_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_13_3",
        "Left": "input-favor_11_3"
    },
    "favor_13_3": {
        "id": "input-favor_13_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_14_3",
        "Left": "input-favor_12_3"
    },
    "favor_14_3": {
        "id": "input-favor_14_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_15_3",
        "Left": "input-favor_13_3"
    },
    "favor_15_3": {
        "id": "input-favor_15_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_16_3",
        "Left": "input-favor_14_3"
    },
    "favor_16_3": {
        "id": "input-favor_16_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_17_3",
        "Left": "input-favor_15_3"
    },
    "favor_17_3": {
        "id": "input-favor_17_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_18_3",
        "Left": "input-favor_16_3"
    },
    "favor_18_3": {
        "id": "input-favor_18_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_19_3",
        "Left": "input-favor_17_3"
    },
    "favor_19_3": {
        "id": "input-favor_19_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_20_3",
        "Left": "input-favor_18_3"
    },
    "favor_20_3": {
        "id": "input-favor_20_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_21_3",
        "Left": "input-favor_19_3"
    },
    "favor_21_3": {
        "id": "input-favor_21_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_22_3",
        "Left": "input-favor_20_3"
    },
    "favor_22_3": {
        "id": "input-favor_22_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_23_3",
        "Left": "input-favor_21_3"
    },
    "favor_23_3": {
        "id": "input-favor_23_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_24_3",
        "Left": "input-favor_22_3"
    },
    "favor_24_3": {
        "id": "input-favor_24_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_25_3",
        "Left": "input-favor_23_3"
    },
    "favor_25_3": {
        "id": "input-favor_25_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_26_3",
        "Left": "input-favor_24_3"
    },
    "favor_26_3": {
        "id": "input-favor_26_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_27_3",
        "Left": "input-favor_25_3"
    },
    "favor_27_3": {
        "id": "input-favor_27_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_28_3",
        "Left": "input-favor_26_3"
    },
    "favor_28_3": {
        "id": "input-favor_28_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_29_3",
        "Left": "input-favor_27_3"
    },
    "favor_29_3": {
        "id": "input-favor_29_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_30_3",
        "Left": "input-favor_28_3"
    },
    "favor_30_3": {
        "id": "input-favor_30_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_31_3",
        "Left": "input-favor_29_3"
    },
    "favor_31_3": {
        "id": "input-favor_31_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_32_3",
        "Left": "input-favor_30_3"
    },
    "favor_32_3": {
        "id": "input-favor_32_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_33_3",
        "Left": "input-favor_31_3"
    },
    "favor_33_3": {
        "id": "input-favor_33_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-favor_34_3",
        "Left": "input-favor_32_3"
    },
    "favor_34_3": {
        "id": "input-favor_34_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "resourceTable",
        "Right": "input-BD_1_Hyakkiyako",
        "Left": "input-favor_33_3"
    },
    "Credit": {
        "id": "input-Credit",
        "location": "resourceModal",
        "min": "0",
        "max": "1000000000000",
        "navigation": "direct",
        "Right": "input-XP_1",
        "Down": "input-XP_1"
    },
    "Secret": {
        "id": "input-Secret",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "direct",
        "Left": "input-XP_1",
        "Up": "input-XP_1"
    },
    "XP_4": {
        "id": "input-XP_4",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "direct",
        "Right": "input-Secret",
        "Left": "input-XP_3",
        "Up": "input-Credit",
        "Down": "input-Secret"
    },
    "XP_3": {
        "id": "input-XP_3",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "direct",
        "Right": "input-XP_4",
        "Left": "input-XP_2",
        "Up": "input-Credit",
        "Down": "input-XP_4"
    },
    "XP_2": {
        "id": "input-XP_2",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "direct",
        "Right": "input-XP_3",
        "Left": "input-XP_1",
        "Up": "input-Credit",
        "Down": "input-XP_3"
    },
    "XP_1": {
        "id": "input-XP_1",
        "location": "resourceModal",
        "min": "0",
        "max": "99999",
        "navigation": "direct",
        "Right": "input-XP_2",
        "Left": "input-Credit",
        "Up": "input-Credit",
        "Down": "input-XP_2"
    },
    "T2_Hat": {
        "id": "input-T2_Hat",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T2_Gloves": {
        "id": "input-T2_Gloves",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T2_Shoes": {
        "id": "input-T2_Shoes",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T2_Bag": {
        "id": "input-T2_Bag",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T2_Badge": {
        "id": "input-T2_Badge",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T2_Hairpin": {
        "id": "input-T2_Hairpin",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T2_Charm": {
        "id": "input-T2_Charm",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T2_Watch": {
        "id": "input-T2_Watch",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T2_Necklace": {
        "id": "input-T2_Necklace",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T3_Hat": {
        "id": "input-T3_Hat",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T3_Gloves": {
        "id": "input-T3_Gloves",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T3_Shoes": {
        "id": "input-T3_Shoes",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T3_Bag": {
        "id": "input-T3_Bag",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T3_Badge": {
        "id": "input-T3_Badge",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T3_Hairpin": {
        "id": "input-T3_Hairpin",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T3_Charm": {
        "id": "input-T3_Charm",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T3_Watch": {
        "id": "input-T3_Watch",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T3_Necklace": {
        "id": "input-T3_Necklace",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T4_Hat": {
        "id": "input-T4_Hat",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T4_Gloves": {
        "id": "input-T4_Gloves",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T4_Shoes": {
        "id": "input-T4_Shoes",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T4_Bag": {
        "id": "input-T4_Bag",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T4_Badge": {
        "id": "input-T4_Badge",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T4_Hairpin": {
        "id": "input-T4_Hairpin",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T4_Charm": {
        "id": "input-T4_Charm",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T4_Watch": {
        "id": "input-T4_Watch",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T4_Necklace": {
        "id": "input-T4_Necklace",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T5_Hat": {
        "id": "input-T5_Hat",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T5_Gloves": {
        "id": "input-T5_Gloves",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T5_Shoes": {
        "id": "input-T5_Shoes",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T5_Bag": {
        "id": "input-T5_Bag",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T5_Badge": {
        "id": "input-T5_Badge",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T5_Hairpin": {
        "id": "input-T5_Hairpin",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T5_Charm": {
        "id": "input-T5_Charm",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T5_Watch": {
        "id": "input-T5_Watch",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T5_Necklace": {
        "id": "input-T5_Necklace",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T6_Hat": {
        "id": "input-T6_Hat",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T6_Gloves": {
        "id": "input-T6_Gloves",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T6_Shoes": {
        "id": "input-T6_Shoes",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T6_Bag": {
        "id": "input-T6_Bag",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T6_Badge": {
        "id": "input-T6_Badge",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T6_Hairpin": {
        "id": "input-T6_Hairpin",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T6_Charm": {
        "id": "input-T6_Charm",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T6_Watch": {
        "id": "input-T6_Watch",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T6_Necklace": {
        "id": "input-T6_Necklace",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T7_Hat": {
        "id": "input-T7_Hat",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T7_Gloves": {
        "id": "input-T7_Gloves",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T7_Shoes": {
        "id": "input-T7_Shoes",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T7_Bag": {
        "id": "input-T7_Bag",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T7_Badge": {
        "id": "input-T7_Badge",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T7_Hairpin": {
        "id": "input-T7_Hairpin",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T7_Charm": {
        "id": "input-T7_Charm",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T7_Watch": {
        "id": "input-T7_Watch",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T7_Necklace": {
        "id": "input-T7_Necklace",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T8_Hat": {
        "id": "input-T8_Hat",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T8_Gloves": {
        "id": "input-T8_Gloves",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T8_Shoes": {
        "id": "input-T8_Shoes",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T8_Bag": {
        "id": "input-T8_Bag",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T8_Badge": {
        "id": "input-T8_Badge",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T8_Hairpin": {
        "id": "input-T8_Hairpin",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T8_Charm": {
        "id": "input-T8_Charm",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T8_Watch": {
        "id": "input-T8_Watch",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T8_Necklace": {
        "id": "input-T8_Necklace",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T9_Hat": {
        "id": "input-T9_Hat",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T9_Gloves": {
        "id": "input-T9_Gloves",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T9_Shoes": {
        "id": "input-T9_Shoes",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T9_Bag": {
        "id": "input-T9_Bag",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T9_Badge": {
        "id": "input-T9_Badge",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T9_Hairpin": {
        "id": "input-T9_Hairpin",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T9_Charm": {
        "id": "input-T9_Charm",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T9_Watch": {
        "id": "input-T9_Watch",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T9_Necklace": {
        "id": "input-T9_Necklace",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T10_Hat": {
        "id": "input-T10_Hat",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T10_Gloves": {
        "id": "input-T10_Gloves",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T10_Shoes": {
        "id": "input-T10_Shoes",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T10_Bag": {
        "id": "input-T10_Bag",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T10_Badge": {
        "id": "input-T10_Badge",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T10_Hairpin": {
        "id": "input-T10_Hairpin",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T10_Charm": {
        "id": "input-T10_Charm",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T10_Watch": {
        "id": "input-T10_Watch",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable"
    },
    "T10_Necklace": {
        "id": "input-T10_Necklace",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "gearTable",
        "Right": "input-T1_Spring"
    },
    "GXP_4": {
        "id": "input-GXP_4",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "direct",
        "Left": "input-GXP_3",
        "Up": "input-GXP_3"
    },
    "GXP_3": {
        "id": "input-GXP_3",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "direct",
        "Right": "input-GXP_4",
        "Left": "input-GXP_2",
        "Down": "input-GXP_4",
        "Up": "input-GXP_2"
    },
    "GXP_2": {
        "id": "input-GXP_2",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "direct",
        "Right": "input-GXP_3",
        "Left": "input-GXP_1",
        "Down": "input-GXP_3",
        "Up": "input-GXP_1"
    },
    "GXP_1": {
        "id": "input-GXP_1",
        "location": "gearModal",
        "min": "0",
        "max": "99999",
        "navigation": "direct",
        "Right": "input-GXP_2",
        "Down": "input-GXP_2"
    },
    "T4_Spring": {
        "id": "input-T4_Spring",
        "location": "gearModal",
        "min": "0",
        "max": "999",
        "navigation": "direct",
        "Left": "input-T3_Spring",
        "Right": "input-T1_Hammer",
        "Down": "input-T4_Hammer",
        "Up": "input-T3_Needle"
    },
    "T3_Spring": {
        "id": "input-T3_Spring",
        "location": "gearModal",
        "min": "0",
        "max": "9999",
        "navigation": "direct",
        "Left": "input-T2_Spring",
        "Right": "input-T4_Spring",
        "Down": "input-T3_Hammer",
        "Up": "input-T2_Needle"
    },
    "T2_Spring": {
        "id": "input-T2_Spring",
        "location": "gearModal",
        "min": "0",
        "max": "9999",
        "navigation": "direct",
        "Left": "input-T1_Spring",
        "Right": "input-T3_Spring",
        "Down": "input-T2_Hammer",
        "Up": "input-T1_Needle"
    },
    "T1_Spring": {
        "id": "input-T1_Spring",
        "location": "gearModal",
        "min": "0",
        "max": "9999",
        "navigation": "direct",
        "Right": "input-T2_Spring",
        "Down": "input-T1_Hammer"
    },
    "T4_Hammer": {
        "id": "input-T4_Hammer",
        "location": "gearModal",
        "min": "0",
        "max": "999",
        "navigation": "direct",
        "Left": "input-T3_Hammer",
        "Right": "input-T1_Barrel",
        "Down": "input-T4_Barrel",
        "Up": "input-T4_Spring"
    },
    "T3_Hammer": {
        "id": "input-T3_Hammer",
        "location": "gearModal",
        "min": "0",
        "max": "9999",
        "navigation": "direct",
        "Left": "input-T2_Hammer",
        "Right": "input-T4_Hammer",
        "Down": "input-T3_Barrel",
        "Up": "input-T3_Spring"
    },
    "T2_Hammer": {
        "id": "input-T2_Hammer",
        "location": "gearModal",
        "min": "0",
        "max": "9999",
        "navigation": "direct",
        "Left": "input-T1_Hammer",
        "Right": "input-T3_Hammer",
        "Down": "input-T2_Barrel",
        "Up": "input-T2_Spring"
    },
    "T1_Hammer": {
        "id": "input-T1_Hammer",
        "location": "gearModal",
        "min": "0",
        "max": "9999",
        "navigation": "direct",
        "Left": "input-T4_Spring",
        "Right": "input-T2_Hammer",
        "Down": "input-T1_Barrel",
        "Up": "input-T1_Spring"
    },
    "T4_Barrel": {
        "id": "input-T4_Barrel",
        "location": "gearModal",
        "min": "0",
        "max": "999",
        "navigation": "direct",
        "Left": "input-T3_Barrel",
        "Right": "input-T1_Needle",
        "Down": "input-T4_Needle",
        "Up": "input-T4_Hammer"
    },
    "T3_Barrel": {
        "id": "input-T3_Barrel",
        "location": "gearModal",
        "min": "0",
        "max": "9999",
        "navigation": "direct",
        "Left": "input-T2_Barrel",
        "Right": "input-T4_Barrel",
        "Down": "input-T3_Needle",
        "Up": "input-T3_Hammer"
    },
    "T2_Barrel": {
        "id": "input-T2_Barrel",
        "location": "gearModal",
        "min": "0",
        "max": "9999",
        "navigation": "direct",
        "Left": "input-T1_Barrel",
        "Right": "input-T3_Barrel",
        "Down": "input-T2_Needle",
        "Up": "input-T2_Hammer"
    },
    "T1_Barrel": {
        "id": "input-T1_Barrel",
        "location": "gearModal",
        "min": "0",
        "max": "9999",
        "navigation": "direct",
        "Left": "input-T4_Hammer",
        "Right": "input-T2_Barrel",
        "Down": "input-T1_Needle",
        "Up": "input-T1_Hammer"
    },
    "T4_Needle": {
        "id": "input-T4_Needle",
        "location": "gearModal",
        "min": "0",
        "max": "999",
        "navigation": "direct",
        "Left": "input-T3_Needle",
        "Right": "input-T2_Hat",
        "Up": "input-T4_Barrel"
    },
    "T3_Needle": {
        "id": "input-T3_Needle",
        "location": "gearModal",
        "min": "0",
        "max": "9999",
        "navigation": "direct",
        "Left": "input-T2_Needle",
        "Right": "input-T4_Needle",
        "Down": "input-T4_Spring",
        "Up": "input-T3_Barrel"
    },
    "T2_Needle": {
        "id": "input-T2_Needle",
        "location": "gearModal",
        "min": "0",
        "max": "9999",
        "navigation": "direct",
        "Left": "input-T1_Needle",
        "Right": "input-T3_Needle",
        "Down": "input-T3_Spring",
        "Up": "input-T2_Barrel"
    },
    "T1_Needle": {
        "id": "input-T1_Needle",
        "location": "gearModal",
        "min": "0",
        "max": "9999",
        "navigation": "direct",
        "Left": "input-T4_Barrel",
        "Right": "input-T2_Needle",
        "Down": "input-T2_Spring",
        "Up": "input-T1_Barrel"
    },
    "Eleph_Owned": {
        "id": "input_eleph_owned",
        "location": "characterModal",
        "min": "0",
        "max": "999"
    },
    "Eleph_Cost": {
        "id": "input_eleph_cost",
        "location": "characterModal",
        "min": "1",
        "max": "5"
    },
    "Eleph_Purchasable": {
        "id": "input_eleph_purchasable",
        "location": "characterModal",
        "min": "1",
        "max": "20"
    },
    "Node_Sweeps": {
        "id": "input_farm_nodes",
        "location": "characterModal",
        "min": "0",
        requisite: {
            "sweepMax": {
                type: "object",
                name: "Node Sweeps",
                compare: "max",
                mode: "direct",
                sanitise: true
            }
        }
    }
}