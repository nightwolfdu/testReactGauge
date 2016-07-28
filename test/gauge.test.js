import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { Gauge } from '../src';

describe('Linear Gauge', () => {
    it('should return svg', () => {
        expect(shallow(<Gauge />).name()).to.equal('svg');
    });
    it('should contains axis', () => {
        expect(shallow(<Gauge />).children('Axis')).to.have.length(1);
    });
    it('should contains valueIndicator', () => {
        expect(shallow(<Gauge />).children('ValueIndicator')).to.have.length(1);
    });
    it('should rethrow linearScale function to children', () => {
        expect(shallow(<Gauge />).children('Axis').prop('linearScale')).that.is.a('function');
        expect(shallow(<Gauge />).children('ValueIndicator')
                                 .prop('linearScale')).that.is.a('function');
    });
    it('should calculate linearScale by ticks and width', () => {
        expect(
            shallow(<Gauge scale={{ customTicks: [1, 2, 3] }} size={{ width: 100 }} />)
                .children('Axis').prop('linearScale')(2)).to.be.equal(50);
        expect(
            shallow(<Gauge scale={{ customTicks: [1, 2, 3] }} size={{ width: 100 }} />)
                .children('ValueIndicator').prop('linearScale')(2)).to.be.equal(50);
    });
    it('should calculate linearScale by start/end value and width', () => {
        expect(
            shallow(
                <Gauge
                    scale={{ startValue: 0, endValue: 100, customTicks: [] }}
                    size={{ width: 100 }}
                />)
                .children('Axis').prop('linearScale')(40)).to.be.equal(42);
        expect(
            shallow(
                <Gauge
                    scale={{ startValue: 0, endValue: 100, customTicks: [] }}
                    size={{ width: 100 }}
                />)
                .children('ValueIndicator').prop('linearScale')(40)).to.be.equal(42);
    });
    it('should calculate linearScale by ticks, but not start/end value when all of this desclared',
        () => {
            expect(
                shallow(
                    <Gauge
                        scale={{ startValue: 0, endValue: 100, customTicks: [1, 2, 4] }}
                        size={{ width: 50 }}
                    />)
                    .children('Axis').prop('linearScale')(2.5)).to.be.equal(25);
            expect(
                shallow(
                    <Gauge
                        scale={{ startValue: 0, endValue: 100, customTicks: [1, 2, 4] }}
                        size={{ width: 50 }}
                    />)
                    .children('ValueIndicator').prop('linearScale')(2.5)).to.be.equal(25);
        }
    );
    it('should throw value to ValueIndicator',
        () => {
            expect(
                shallow(<Gauge value={10} />)
                    .children('ValueIndicator').prop('value')).to.be.equal(10);
        }
    );
    it('should set y-offset from rangeContainer to ValueIndicator and axis',
        () => {
            expect(
                shallow(
                    <Gauge
                        value={10}
                        rangeContainer={{ axisOffset: 40, valueIndicatorOffset: 20 }}
                    />
                ).children('ValueIndicator').prop('y')).to.be.equal(20);
            expect(
                shallow(
                    <Gauge
                        value={10}
                        rangeContainer={{ axisOffset: 40, valueIndicatorOffset: 20 }}
                    />
                ).children('Axis').prop('y')).to.be.equal(40);
        }
    );
    it('should set color ValueIndicator',
        () => {
            expect(
                shallow(
                    <Gauge
                        value={10}
                        valueIndicator={{ color: 'red' }}
                    />
                ).children('ValueIndicator').get(0)
                .props.style.fill).to.be.equal('red');
        }
    );
});
