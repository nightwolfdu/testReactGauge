import React from 'react';

const ValueIndicator = (props) => {
    const scaledWidth = props.linearScale(props.value) - props.x;
    let width;
    let height;
    if (props.vertical) {
        width = props.height;
        height = scaledWidth;
    } else {
        height = props.height;
        width = scaledWidth;
    }
    return (
        <rect
            x={props.x}
            y={props.y}
            width={width}
            height={height}
            style={props.style}
        />);
};

ValueIndicator.propTypes = {
    value: React.PropTypes.number,
    x: React.PropTypes.number,
    y: React.PropTypes.number,
    height: React.PropTypes.number,
    vertical: React.PropTypes.bool,
    style: React.PropTypes.object,
    linearScale: React.PropTypes.func.isRequired
};

ValueIndicator.defaultProps = {
    value: 1.2,
    x: 0,
    y: 0,
    height: 10,
    vertical: false,
    style: { fill: 'blue', stroke: 'blue', strokeWidth: '1' }
};

export default ValueIndicator;
