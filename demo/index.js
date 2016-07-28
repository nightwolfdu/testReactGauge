import React from 'react';
import ReactDOM from 'react-dom';
import { Gauge } from '../src';

ReactDOM.render(
    <Gauge
        size={{ width: 650, height: 200 }}
        scale={{ startValue: 20, endValue: 400 }}
        value={200}
        valueIndicator={{ color: 'green' }}
    />,
    document.getElementById('root')
);
