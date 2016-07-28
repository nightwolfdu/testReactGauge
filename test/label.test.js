import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Label from '../src/components/label';

describe('Label', () => {
    it('should return text', () => {
        expect(shallow(<Label />).name()).to.equal('text');
    });
    it('should be label with expected x attribute', () => {
        expect(shallow(<Label x={11} />).prop('x')).to.equal(11);
    });
    it('should be label with expected y attribute', () => {
        expect(shallow(<Label y={12} />).prop('y')).to.equal(12);
    });
});
