import createSagaMiddleware from "redux-saga";

import * as services from "../../services";

import Store from "../../store";
import reducer from "../../store/modules/reducers";
import { rootSaga } from "../../store/modules/saga";

const sagaMonitor = undefined;

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor,
  context: services,
});

const middlewares = [sagaMiddleware];

Store.create(reducer, middlewares);

sagaMiddleware.run(rootSaga);
