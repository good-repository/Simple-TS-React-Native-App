/**
 * Action types
 */
export enum UsersTypes {
  LOAD_REQUEST = '@users/LOAD_REQUEST',
  LOAD_SUCCCES = '@users/LOAD_SUCCCES',
  LOAD_FAILURE = '@users/LOAD_FAILURE',
}

/**
 * Data types
 */
export interface User {
  id: number;
  name: string;
}

/**
 * State type
 */
export interface UsersState {
  readonly data: User[];
  readonly loading: boolean;
  readonly error: boolean;
}
