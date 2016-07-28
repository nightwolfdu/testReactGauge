import React, { PropTypes } from 'react';
import _ from 'lodash';
import { scaleLinear } from 'd3-scale';

import ValueIndicator from './valueIndicator';
import Axis from '../axis';

const Gauge = (props) => {
    const domainPadding = props.size.width / 10;
    let linearScale = scaleLinear().range([domainPadding, props.size.width - domainPadding]);
    let ticks;
    if (props.scale.customTicks && props.scale.customTicks.length > 0) {
        linearScale = linearScale.domain([
            _.min(props.scale.customTicks),
            _.max(props.scale.customTicks)
        ]);
        ticks = props.scale.customTicks;
    } else {
        linearScale = linearScale.domain([props.scale.startValue, props.scale.endValue]);
        ticks = linearScale.ticks();
    }
    return (
        <svg width={props.size.width} height={props.size.height}>
            <ValueIndicator
                x={linearScale(props.scale.startValue)}
                y={props.rangeContainer.valueIndicatorOffset}
                value={props.value}
                style={{ fill: props.valueIndicator.color }}
                linearScale={linearScale}
            />
            <Axis
                y={props.rangeContainer.axisOffset}
                height={props.size.height}
                tickColor={props.tickColor}
                tickWidth={props.tickWidth}
                customTicks={ticks}
                startTick={props.scale.startValue}
                labelOffset={props.rangeContainer.labelOffset}
                linearScale={linearScale}
                backgroundColor={props.backgroundColor}
            />
        </svg>
    );
};

Gauge.propTypes = {
    size: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number
    }),
    tickColor: PropTypes.string,
    tickWidth: PropTypes.number,
    scale: PropTypes.shape({
        customTicks: PropTypes.arrayOf(PropTypes.number),
        startValue: PropTypes.number,
        endValue: PropTypes.number
    }),
    value: PropTypes.number,
    rangeContainer: PropTypes.object,
    valueIndicator: PropTypes.shape({
        color: PropTypes.string
    }),
    backgroundColor: PropTypes.string
};

Gauge.defaultProps = {
    tickColor: 'white',
    tickWidth: 2,
    backgroundColor: 'gray',
    scale: {
        startValue: 0,
        endValue: 100,
        customTicks: []
    },
    size: {
        width: 500,
        height: 500
    },
    value: 50,
    rangeContainer: { valueIndicatorOffset: 5, axisOffset: 0, labelOffset: 30 },
    valueIndicator: ({
        color: 'blue'
    })
};

export default Gauge;
