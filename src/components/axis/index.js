import React, { PropTypes } from 'react';
import { getDAttribute } from './helper';

import Label from '../label';

const Axis = (props) => {
    const scale = props.linearScale;
    const customTicks = props.customTicks;
    const axisTicks = customTicks.map((item, index) =>
        <path
            key={index}
            d={getDAttribute(scale(item), props.y)}
            stroke={props.tickColor}
            strokeWidth={props.tickWidth}
        />
    );

    const labels = customTicks.map((item, index) =>
        <Label
            key={index} x={scale(item)}
            value={Math.round(item * 100) / 100} y={props.labelOffset}
        />
    );
    const RangeContainer = () =>
        <rect
            x={scale(props.startTick)}
            y={props.y}
            height={5}
            width={scale(customTicks[customTicks.length - 1]) - scale(customTicks[0])}
            fill={props.backgroundColor}
        />;

    return (
        <g>
            <RangeContainer />
            {axisTicks}
            {labels}
        </g>
    );
};

Axis.propTypes = {
    customTicks: PropTypes.arrayOf(React.PropTypes.number),
    linearScale: PropTypes.func.isRequired,
    y: PropTypes.number,
    labelOffset: PropTypes.number,
    backgroundColor: PropTypes.string,
    tickColor: PropTypes.string,
    tickWidth: PropTypes.number,
    startTick: PropTypes.number
};

Axis.defaultProps = {
    customTicks: [],
    y: 0,
    labelOffset: 25
};

export default Axis;
