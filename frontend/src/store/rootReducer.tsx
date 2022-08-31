import { combineReducers, AnyAction, CombinedState } from 'redux'
import { RootState } from './rootState'
import survayApp from '../views/survay/reducers'


const appReducer = combineReducers<RootState>({
  survayState: survayApp,
})

const rootReducer = (state: RootState | undefined, action: AnyAction): CombinedState<RootState> => {
  return appReducer(state, action);
};

export default rootReducer;