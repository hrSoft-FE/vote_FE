import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-log';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools'


const configStore = (initialState) => {
    const log = createLogger();
    const middleWare = [thunkMiddleware, log];
    const enhancer = compose(
        DevTools.instrument()
    );
    const store = compose(
        applyMiddleware(...middleWare),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore)(rootReducer, initialState, enhancer);
    //热替换
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers/index');
            store.replaceReducer(nextReducer);
        });
    }
    return store;
};

export default configStore;