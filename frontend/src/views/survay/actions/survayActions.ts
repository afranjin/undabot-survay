import { SurvayApi } from './../../../api/survayApi';
import * as constants from './constants'
import { ActionCreator } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { SurvayState } from '../reducers'
import { ISurvay } from '../../../types/survay'


export type SurvayThunkResult<R> = ThunkAction<Promise<R>, SurvayState, null, SurvayActions>
export type SurvayThunkDispatchType = ThunkDispatch<SurvayState, null, SurvayActions>

export interface SurvaySuccess {
  type: constants.GET_SURVAY_SUCCESS;
  survay: ISurvay;
}

export interface SurvayHasErrored {
  type: constants.SURVAY_HAS_ERRORED;
  hasErrored: boolean;
}


export const survayHasErrored = (hasErrored: boolean, error: Error, action?: string): SurvayHasErrored => {
  if (action) {
    const errorMsg = error.message
    console.log(errorMsg)
  }
  return {
    type: constants.SURVAY_HAS_ERRORED,
    hasErrored: hasErrored
  }
}

// thunk action, with side effect
export const getSurvay: ActionCreator<SurvayThunkResult<ISurvay>>
= (): SurvayThunkResult<ISurvay> => {
  return async (dispatch: SurvayThunkDispatchType) => {
    return SurvayApi.getSurvay()
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

export type SurvayActions
  = SurvayHasErrored
  | SurvaySuccess;