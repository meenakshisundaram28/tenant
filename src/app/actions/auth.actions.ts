import { createAction, props } from '@ngrx/store';
import { User } from '../models/auth.model';

export const login = createAction('[Auth] Login', props<{ data:any }>());
export const loginSuccess = createAction('[Auth] Login Success', props<{ user: User }>());
export const loginFailure = createAction('[Auth] Login Failure', props<{ error: string }>());
export const logout = createAction('[Auth] Logout');
