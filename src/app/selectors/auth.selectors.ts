import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from '../models/auth.model';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectUser = createSelector(selectAuthState, (state) => state.user);
export const selectIsAuthenticated = createSelector(selectAuthState, (state) => state.isAuthenticated);
export const selectUserRole = createSelector(selectAuthState, (state) => state.user?.role);
