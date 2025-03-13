import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { AuthState } from '../models/auth.model';

export const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    isAuthenticated: true,
    error: null,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    user: null,
    isAuthenticated: false,
    error,
  })),
  on(AuthActions.logout, () => initialState)
);
