
export interface ISurvayQuestion {
    id: number
    name: string
    survayId: number
    label: string
    required: boolean
    type: string
}

export interface ISurvay {
    id: number
    film_festival: string
    title: string
    desscription_thanks: string
    desscription_record: string
    questions: ISurvayQuestion[]
}

export interface ISurvayAnswer {
    id: number
    survay: ISurvay
    answerMovie: string
    answerRate: number
}
