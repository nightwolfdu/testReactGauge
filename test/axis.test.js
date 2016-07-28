import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Axis from '../src/components/axis';

describe('Axis', () => {
    it('should return g', () => {
        expect(shallow(
            <Axis
                linearScale={(x) => x}
                customTicks={[1, 2, 3]}
            />)
            .name()).to.equal('g');
    });

    it('should return path for rangeContainer', () => {
        expect(
            shallow(shallow(
                <Axis
                    linearScale={(x) => x}
                    customTicks={[1, 2, 3]}
                />
            )
            .children().get(0)).name()
        )
        .to.equal('rect');
    });

    it('should return valid coords for rangeContainer', () => {
        const wrapper = shallow(shallow(
            <Axis
                linearScale={(x) => x}
                customTicks={[1, 2, 3]}
                startTick={1}
            />
        )
        .children().get(0));

        expect(wrapper.prop('x')).to.equal(1);
        expect(wrapper.prop('y')).to.equal(0);
        expect(wrapper.prop('width')).to.equal(2);
        expect(wrapper.prop('height')).to.equal(5);
    });

    it('should return valid backgroundColor for rangeContainer', () => {
        expect(
            shallow(shallow(
                <Axis
                    linearScale={(x) => x}
                    customTicks={[1, 2, 3]}
                    backgroundColor={'red'}
                />
            )
            .children().get(0)).props().fill
        )
        .to.equal('red');
    });

    it('should return ticks and labels', () => {
        expect(
            shallow(
                <Axis
                    linearScale={(x) => x}
                    customTicks={[1, 2, 3]}
                />
            )
            .children()
        )
        .to.have.length(7);
    });

    it('should return ticks with path', () => {
        const wrapper = shallow(
            <Axis
                linearScale={(x) => x}
                customTicks={[1, 2, 3]}
            />
        );

        expect(wrapper.children('path')).to.have.length(3);
    });

    it('should return ticks with labels', () => {
        const wrapper = shallow(
            <Axis
                linearScale={(x) => x}
                customTicks={[1, 2, 3]}
            />
        );

        expect(wrapper.children('Label')).to.have.length(3);
    });

    it('should return valid dAttribute for every path', () => {
        const wrapper = shallow(
            <Axis
                linearScale={(value) => (value - 1) * 500 / 2}
                customTicks={[1, 2, 3]}
            />
        );
        expect(wrapper.children().get(1).props.d).to.equal('M0 0 L0 10');
        expect(wrapper.children().get(2).props.d).to.equal('M250 0 L250 10');
        expect(wrapper.children().get(3).props.d).to.equal('M500 0 L500 10');
    });

    it('should return valid stroke', () => {
        const wrapper = shallow(
            <Axis
                customTicks={[1, 2, 3]}
                linearScale={(x) => x}
                tickColor={'red'}
            />
        );

        expect(wrapper.children().get(1).props.stroke).to.equal('red');
    });

    it('should return valid tickWidth', () => {
        const wrapper = shallow(
            <Axis
                customTicks={[1, 2, 3]}
                linearScale={(x) => x}
                tickWidth={3}
            />
        );

        expect(wrapper.children().get(1).props.strokeWidth).to.equal(3);
    });
    it('should set labels correct offset', () => {
        const wrapper = shallow(
            <Axis
                customTicks={[1, 2, 3]}
                linearScale={(x) => x}
                strokeWidth={3}
                labelOffset={50}
            />
        );

        expect(wrapper.children('Label').get(0).props.y).to.equal(50);
    });
});
