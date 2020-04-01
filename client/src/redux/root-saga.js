import { all, call } from "redux-saga/effects";

import { shopSage } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.saga";

export default function* rootSaga() {
  yield all([call(shopSage), call(userSagas), call(cartSagas)]);
}
