import React from 'react';
import ReactDOM from 'react-dom';


//引入redux
import {Provider} from 'react-redux';
import configStore from './stores';
const store = configStore();
import RouterApp from './router';
import DevTools from './containers/DevTools'

ReactDOM.render(
    <Provider store={store}>
        <div>
            {RouterApp}
            <DevTools/>
        </div>
    </Provider>,
    document.getElementById('app')
);