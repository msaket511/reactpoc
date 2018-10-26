import { takeEvery, takeLatest } from "redux-saga";
import { call, put } from "redux-saga/effects";
import axios from "axios";

//worker saga
export function* getUserDataAsync() {
  try {
    // console.log("saga worker running");
    const response = yield call(axios.get, "userStub.json");
    // console.log("response", response);
    yield put({ type: "GET_USER_DATA_AYNC", val: response.data });
  } catch (e) {
    console.log("saga worker falied");
  }
}

export function* getUserDataByIdAsync(val) {
  console.log("saga called ib id ascy", val);
}

//watcher saga
export function* watchGetUserData() {
  // console.log("saga running");
  yield takeEvery("GET_USER_DATA", getUserDataAsync);
}

export function* watchGetUserDataById() {
  // console.log("saga called ib id", action);
  yield takeLatest("GET_USER_DATA_BY_ID", getUserDataByIdAsync);
}

//root saga
export default function* rootSaga() {
  yield [watchGetUserData(), watchGetUserDataById()];
}
