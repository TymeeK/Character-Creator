type AnthroOrHistorian = {
    name: 'Anthropologist' | 'Historian'
    professionalSkills:
        | {
              anthropology: Skill<Anthropology, AnthropologyBaseLevel>
              bureaucracy: Skill<Bureaucracy, BureaucracyBaseLevel>
              foreignLanguage: Skill<
                  ForeignLanguage,
                  ForeignLanguageBaseLevel
              >[]
              history: Skill<HistorySkill, HistoryBaseLevel>
              occult: Skill<Occult, OccultBaseLevel>
              persuade: Skill<Persuade, PersuadeBaseLevel>
              archeology?: Skill<Archeology, ArcheologyBaseLevel>
              humint?: Skill<HumInt, HumIntBaseLevel>
              navigate?: Skill<Navigate, NavigateBaseLevel>
              ride?: Skill<Ride, RideBaseLevel>
              search?: Skill<Search, SearchBaseLevel>
          }
        | {
              archeology: Skill<Archeology, ArcheologyBaseLevel>
              bureaucracy: Skill<Bureaucracy, BureaucracyBaseLevel>
              foreignLanguage: Skill<
                  ForeignLanguage,
                  ForeignLanguageBaseLevel
              >[]
              history: Skill<History, HistoryBaseLevel>
              occult: Skill<Occult, OccultBaseLevel>
              persuade: Skill<Persuade, PersuadeBaseLevel>
              anthropology?: Skill<Anthropology, AnthropologyBaseLevel>
              humint?: Skill<HumInt, HumIntBaseLevel>
              navigate?: Skill<Navigate, NavigateBaseLevel>
              ride?: Skill<Ride, RideBaseLevel>
              search?: Skill<Search, SearchBaseLevel>
          }
}
