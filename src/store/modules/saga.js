import { all } from "redux-saga/effects";

import pokemon from "./pokemon/saga";

export function* rootSaga() {
  return yield all([pokemon]);
}
