import { SurvayApi } from './../../../api/survayApi'
import * as constants from './constants'
import { ActionCreator } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { SurvayState } from '../reducers'
import { ISurvay, ISurvayAnswer } from '../../../types/survay'
import { toastMsg } from '../../../components/Toast/toastMsg'


export type SurvayThunkResult<R> = ThunkAction<Promise<R>, SurvayState, null, SurvayActions>
export type SurvayThunkDispatchType = ThunkDispatch<SurvayState, null, SurvayActions>

export interface SurvaySuccess {
    type: constants.GET_SURVAY_SUCCESS
    survay: ISurvay
}

export interface CreateAnswerSuccess {
    type: constants.CREATE_SURVAY_ANSWER_SUCCESS
    survayAnswer: ISurvayAnswer
}

export interface GetSurvayAnswersSuccess {
    type: constants.GET_SURVAY_ANSWERS_SUCCESS
    survayAnswers: ISurvayAnswer[]
}

export interface SurvayHasErrored {
    type: constants.SURVAY_HAS_ERRORED
    hasErrored: boolean
}

export const survayHasErrored = (hasErrored: boolean, error: Error, action?: string): SurvayHasErrored => {
    if (action) {
        const errorMsg = error.message
        toastMsg(errorMsg, action, 'error')
    }
    return {
        type: constants.SURVAY_HAS_ERRORED,
        hasErrored: hasErrored
    }
}

// thunk action, with side effect
export const getSurvay: ActionCreator<SurvayThunkResult<ISurvay>>
= (queryParams?: Record<string, string>): SurvayThunkResult<ISurvay> => {
  return async (dispatch: SurvayThunkDispatchType) => {
    return SurvayApi.getSurvay(queryParams)
        .then(response => {
            dispatch(getSurvaySuccess(response))
            return response
        })
        .catch(error => {
            dispatch(survayHasErrored(true, error.response.data, constants.GET_SURVAY))
            return {} as ISurvay
        })
  }
}

// action, pure function
export const getSurvaySuccess = (survay: ISurvay): SurvaySuccess => {
    return {
        type: constants.GET_SURVAY_SUCCESS,
        survay
    }
}

export const createSurvayAnswer: ActionCreator<SurvayThunkResult<ISurvayAnswer>>
= (survayId: string | number, answer: ISurvayAnswer): SurvayThunkResult<ISurvayAnswer> => {
  return async (dispatch: SurvayThunkDispatchType) => {
    return SurvayApi.createAnswersSurvay(survayId, answer)
        .then(response => {
            dispatch(createAnswerSuccess(response))
            return response
        })
        .catch(error => {
            dispatch(survayHasErrored(true, error.response.data, constants.CREATE_SURVAY_ANSWER))
            return {} as ISurvayAnswer
        })
  }
}

export const createAnswerSuccess = (survayAnswer: ISurvayAnswer): CreateAnswerSuccess => {
    toastMsg(`Survay answers successfully created.`, constants.CREATE_SURVAY_ANSWER_SUCCESS, 'success')
    return {
        type: constants.CREATE_SURVAY_ANSWER_SUCCESS,
        survayAnswer
    }
  }

  export const getSurvayAnswers: ActionCreator<SurvayThunkResult<ISurvayAnswer[]>>
= (survayId: string | number, queryParams?: Record<string, string>): SurvayThunkResult<ISurvayAnswer[]> => {
  return async (dispatch: SurvayThunkDispatchType) => {
    return SurvayApi.getSurvayAnswers(survayId, queryParams)
        .then(response => {
            dispatch(getSurvayAnswersSuccess(response))
            return response
        })
        .catch(error => {
            dispatch(survayHasErrored(true, error.response.data, constants.GET_SURVAY_ANSWERS))
            return {} as ISurvayAnswer[]
        })
  }
}

export const getSurvayAnswersSuccess = (survayAnswers: ISurvayAnswer[]): GetSurvayAnswersSuccess => {
    return {
        type: constants.GET_SURVAY_ANSWERS_SUCCESS,
        survayAnswers
    }
  }

export type SurvayActions
    = SurvayHasErrored
    | SurvaySuccess
    | CreateAnswerSuccess
    | GetSurvayAnswersSuccess