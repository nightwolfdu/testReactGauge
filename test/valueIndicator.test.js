import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ValueIndicator from '../src/components/linearGauge/valueIndicator.js';

describe('valueIndicator', () => {
    it('should return rect', () => {
        expect(shallow(<ValueIndicator linearScale={(x) => x} />).name()).to.equal('rect');
    });
    it('should be rect with expected width', () => {
        expect(shallow(<ValueIndicator value={5} linearScale={(x) => x} />).prop('width'))
        .to.equal(5);
    });
    it('should have rect start point', () => {
        expect(shallow(<ValueIndicator x={200} y={210} linearScale={(x) => x} />).prop('x'))
            .to.equal(200);
        expect(shallow(<ValueIndicator x={200} y={210} linearScale={(x) => x} />).prop('y'))
            .to.equal(210);
    });
    it('should exchange rect width and height when vertical', () => {
        expect(
            shallow(<ValueIndicator
                height={200} vertical value={10} linearScale={(x) => x}
            />)
            .prop('height')
        ).to.equal(10);
        expect(
            shallow(<ValueIndicator
                height={200} vertical value={10} linearScale={(x) => x}
            />)
            .prop('width')
        ).to.equal(200);
    });
    it('should transmit style to internal rect', () => {
        expect(
            shallow(
                <ValueIndicator
                    linearScale={(x) => x}
                    style={{ fill: 'red', stroke: 'blue' }}
                />)
            .prop('style')
        ).to.deep.equal({ fill: 'red', stroke: 'blue' });
    });
    it('should calc width by scaledWidth and x ', () => {
        expect(
            shallow(<ValueIndicator x={200} y={210} linearScale={(x) => x} value={210} />)
            .prop('width')
        ).to.equal(10);
    });
});
