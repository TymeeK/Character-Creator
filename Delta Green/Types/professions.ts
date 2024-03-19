type Anthropologist = {
  name: 'Anthropologist' | 'Historian'
  numBonds: 4
  professionalSkills: {
    anthropology: Skill<Anthropology, AnthropologyBaseLevel>
    bureaucracy: Skill<Bureaucracy, BureaucracyBaseLevel>
    foreignLanguage: Skill<ForeignLanguage, ForeignLanguageBaseLevel>
    foreignLanguage2: Skill<ForeignLanguage, ForeignLanguageBaseLevel>
    history: Skill<HistorySkill, HistoryBaseLevel>
    occult: Skill<Occult, OccultBaseLevel>
    persuade: Skill<Persuade, PersuadeBaseLevel>
  }
  options: {
    num: 4
    skills: [
      Skill<HumInt, HumIntBaseLevel>,
      Skill<Navigate, NavigateBaseLevel>,
      Skill<Ride, RideBaseLevel>,
      Skill<Search, SearchBaseLevel>,
      Skill<Survival, SurvivalBaseLevel>,
    ]
  }
}

// type CSorEngineer = {
//   name: 'Computer Science' | 'Engineer'
//   numBonds: 3
//   professionalSkills: {
//     computerScience: Skill<ComputerScience, ComputerScienceBaseLevel>
//   }
//   options: {
//     num: 3
//     skills: []
//   }
// }

export type Professions = Anthropologist

export const professions: Professions[] = [
  {
    name: 'Anthropologist',
    numBonds: 4,
    professionalSkills: {
      anthropology: {
        name: 'Anthropology',
        base: 0,
        currentLevel: 50,
      },
      bureaucracy: {
        name: 'Bureaucracy',
        base: 10,
        currentLevel: 40,
      },
      foreignLanguage: {
        name: 'Foreign language of your choice',
        base: 0,
        currentLevel: 50,
      },
      foreignLanguage2: {
        name: 'Foreign language of your choice',
        base: 0,
        currentLevel: 40,
      },
      history: {
        name: 'History',
        base: 10,
        currentLevel: 60,
      },
      occult: {
        name: 'Occult',
        base: 10,
        currentLevel: 40,
      },
      persuade: {
        name: 'Persuade',
        base: 20,
        currentLevel: 40,
      },
    },
    options: {
      num: 4,
      skills: [
        {
          name: 'HUMINT',
          base: 10,
          currentLevel: 50,
        },
        {
          name: 'Navigate',
          base: 10,
          currentLevel: 50,
        },
        {
          name: 'Ride',
          base: 10,
          currentLevel: 60,
        },
        {
          name: 'Search',
          base: 20,
          currentLevel: 60,
        },
        {
          name: 'Survival',
          base: 10,
          currentLevel: 50,
        },
      ],
    },
  },
]
