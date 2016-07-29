import React from 'react';

const ValueIndicator = (props) => {
    const defaultProps = ValueIndicator.defaultProps;
    const width = props.linearScale(props.value) - props.x;
    const height = props.height;

    return (
        <rect
            x={props.x}
            y={props.y}
            width={width}
            height={height}
            fill={props.style.color || defaultProps.style.color}
            stroke={props.style.stroke || defaultProps.style.stroke}
            strokeWidth={props.style.strokeWidth || defaultProps.style.strokeWidth}
            className="valueIndicator"
        />);
};

ValueIndicator.propTypes = {
    value: React.PropTypes.number,
    x: React.PropTypes.number,
    y: React.PropTypes.number,
    height: React.PropTypes.number,
    style: React.PropTypes.object,
    linearScale: React.PropTypes.func.isRequired
};

ValueIndicator.defaultProps = {
    value: 0,
    x: 0,
    y: 0,
    height: 10,
    style: {
        color: '#C2C2C2',
        stroke: '#C2C2C2',
        strokeWidth: 0
    }
};

export default ValueIndicator;
