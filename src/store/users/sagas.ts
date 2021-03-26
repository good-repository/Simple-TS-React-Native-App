import {call, put} from 'redux-saga/effects';
import api from '../../services/api';

import {loadSuccess, loadFailure} from './actions';

interface Props {
  type: string;
  payload: number;
}

export function* load(props: Props) {
  let page = props.payload;

  try {
    const response = yield call(api.get, `?page=${page}&results=20`);

    yield put(loadSuccess(response.data.results));
  } catch (err) {
    yield put(loadFailure());
  }
}
