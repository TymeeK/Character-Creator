type Anthropologist = {
  name: 'Anthropologist' | 'Historian'
  numBonds: 4
  professionalSkills: [
    Skill<Anthropology, AnthropologyBaseLevel>,
    Skill<Bureaucracy, BureaucracyBaseLevel>,
    Skill<ForeignLanguage, ForeignLanguageBaseLevel>,
    Skill<ForeignLanguage, ForeignLanguageBaseLevel>,
    Skill<HistorySkill, HistoryBaseLevel>,
    Skill<Occult, OccultBaseLevel>,
    Skill<Persuade, PersuadeBaseLevel>
  ]

  options: {
    num: 4
    skills: [
      Skill<Archeology, ArcheologyBaseLevel>,
      Skill<HumInt, HumIntBaseLevel>,
      Skill<Navigate, NavigateBaseLevel>,
      Skill<Ride, RideBaseLevel>,
      Skill<Search, SearchBaseLevel>,
      Skill<Survival, SurvivalBaseLevel>
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
    professionalSkills: [
      {
        name: 'Anthropology',
        base: 0,
        currentLevel: 50,
      },
      {
        name: 'Bureaucracy',
        base: 10,
        currentLevel: 40,
      },
      {
        name: 'Your choice of language 1',
        base: 0,
        currentLevel: 50,
      },
      {
        name: 'Your choice of language 2',
        base: 0,
        currentLevel: 40,
      },
      {
        name: 'History',
        base: 10,
        currentLevel: 60,
      },
      {
        name: 'Occult',
        base: 10,
        currentLevel: 40,
      },
      {
        name: 'Persuade',
        base: 20,
        currentLevel: 40,
      },
    ],
    options: {
      num: 4,
      skills: [
        {
          name: 'Archeology',
          base: 0,
          currentLevel: 40,
        },
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
