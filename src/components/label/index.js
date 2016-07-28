import React, { PropTypes } from 'react';

const Label = (props) =>
    <text
        alignmentBaseline={"middle"}
        textAnchor={"middle"}
        x={props.x}
        y={props.y}
    >
    {props.value}
    </text>;

Label.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    value: PropTypes.number
};

Label.defaultProps = {
    value: 0,
    x: 25,
    y: 25
};

export default Label;
