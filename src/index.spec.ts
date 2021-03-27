import { isNullOrEmpty } from './index';
import { expect } from 'chai';
import 'mocha';

describe('isNullOrEmpty', () => {
    it('returns true for null', () => {
        expect(isNullOrEmpty(null)).to.be.true;
    });

    it('returns true for undefined', () => {
        expect(isNullOrEmpty(undefined)).to.be.true;
    });

    it('returns true for empty string', () => {
        expect(isNullOrEmpty('')).to.be.true;
    });

    it('returns false for string value', () => {
        expect(isNullOrEmpty('test')).to.be.false;
    });

    it('returns false for numbers', () => {
        expect(isNullOrEmpty(0)).to.be.false;
        expect(isNullOrEmpty(1)).to.be.false;
        expect(isNullOrEmpty(Infinity)).to.be.false;
    });

    it('returns true for NaN', () => {
        expect(isNullOrEmpty(NaN)).to.be.true;
        expect(isNullOrEmpty(Number('test'))).to.be.true;
    });

    it('returns false for boolean values', () => {
        expect(isNullOrEmpty(false)).to.be.false;
        expect(isNullOrEmpty(true)).to.be.false;
    });

    it('returns true for empty object literal', () => {
        expect(isNullOrEmpty({})).to.be.true;
    });

    it('returns false for object literal with properties', () => {
        expect(isNullOrEmpty({ value: true })).to.be.false;
        expect(isNullOrEmpty({ value: true, value2: false })).to.be.false;
    });

    it('returns true for empty array', () => {
        expect(isNullOrEmpty([])).to.be.true;
    });

    it('returns false for non empty array', () => {
        expect(isNullOrEmpty([1])).to.be.false;
        expect(isNullOrEmpty([1, 2])).to.be.false;
    });

    it('returns false for instance of a class', () => {
        class MyClass {
        }

        expect(isNullOrEmpty(new MyClass())).to.be.false;
        expect(isNullOrEmpty(new Date())).to.be.false;
    });

    it('returns false for function', () => {
        function myFunction() {
        }

        expect(isNullOrEmpty(myFunction)).to.be.false;
        expect(isNullOrEmpty(() => {
        })).to.be.false;
    });

    it('returns false for symbol', () => {
        expect(isNullOrEmpty(Symbol())).to.be.false;
    });

    it('returns false for BigInt', () => {
        expect(isNullOrEmpty(BigInt(1))).to.be.false;
    });
});
