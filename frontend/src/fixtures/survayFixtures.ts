import { ISurvayQuestion, ISurvayAnswer } from './../types/survay'
import { ISurvay } from '../types/survay'


export const _initialSurvay: ISurvay = {
    id: '',
    title: '',
    film_festival: '',
    desscription_record: '',
    desscription_thanks: '',
    questions: []
}

export const _initialSurvayQuestion: ISurvayQuestion = {
    id: '',
    label: '',
    name: '',
    required: false,
    survayId: '',
    type: ''
}

export const _survays: ISurvay[] = [
    {
        id: 1,
        film_festival: "Undabot Film Festival",
        title: "Film feedback",
        desscription_thanks: "Thank you for participating in the film festival!",
        desscription_record: "Please fill out this short survey so we can record your feedback.",
        questions: []
    }  
]


export const _survayQuestions: ISurvayQuestion[] = [
    {
        id: 1,
        name: "film",
        survayId: 1,
        label: "What film did you watch?",
        required: true,
        type: "text"
    },
    {
        id: 2,
        name: "review",
        survayId: 1,
        label: "How would you rate the film?",
        required: true,
        type: "rating"
    }
]

export const _survayAnswers: ISurvayAnswer[] = [
    {
        id: 1,
        survay: {
            id: 1,
            film_festival: "Undabot Film Festival",
            title: "Film feedback",
            desscription_thanks   : "Thank you for participating in the film festival!",
            desscription_record   : "Please fill out this short survey so we can record your feedback.",
            questions : [
            {
                id    : 1,
                name  : "film",
                survayId  : 1,
                label : "What film did you watch?",
                required  : true,
                type  : "text"
            },
            {
                id: 2,
                name: "review",
                survayId: 1,
                label: "How would you rate the film?",
                required: true,
                type: "rating"
            }
          ]
        },
        answerMovie: "some ansvers",
        answerRate: 1
      },
      {
        id: 2,
        survay: {
            id: 1,
            film_festival: "Undabot Film Festival",
            title: "Film feedback",
            desscription_thanks: "Thank you for participating in the film festival!",
            desscription_record: "Please fill out this short survey so we can record your feedback.",
            questions: [
            {
                id: 1,
                name: "film",
                survayId: 1,
                label: "What film did you watch?",
                required: true,
                type: "text"
            },
            {
                id: 2,
                name: "review",
                survayId: 1,
                label: "How would you rate the film?",
                required: true,
                type: "rating"
            }
          ]
        },
        answerMovie: "ferewr",
        answerRate: 5
    }
]

