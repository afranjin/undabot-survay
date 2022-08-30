
export interface ISurvayQuestion {
    id: number | string
    name: string
    survayId: number | string
    label: string
    required: boolean
    type: string
}

export interface ISurvay {
    id: number | string
    film_festival: string
    title: string
    desscription_thanks: string
    desscription_record: string
    questions: ISurvayQuestion[]
}

export interface ISurvayAnswer {
    id: number | string
    survay: ISurvay
    answerMovie: string
    answerRate: number
}
