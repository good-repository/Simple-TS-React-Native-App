import {action} from 'typesafe-actions';
import {UsersTypes, User} from './types';

export const loadRequest = () => action(UsersTypes.LOAD_REQUEST);

export const loadSuccess = (data: User[]) =>
  action(UsersTypes.LOAD_SUCCCES, {data});

export const loadFailure = () => action(UsersTypes.LOAD_FAILURE);
