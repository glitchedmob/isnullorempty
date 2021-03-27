import { isNullOrEmpty, isNullOrWhiteSpace } from './index';
import { expect } from 'chai';
import 'mocha';

function isNullOrTests(isNullOrFn: typeof isNullOrEmpty | typeof isNullOrWhiteSpace ) {
    it('returns true for null', () => {
        expect(isNullOrFn(null)).to.be.true;
    });

    it('returns true for undefined', () => {
        expect(isNullOrFn(undefined)).to.be.true;
    });

    it('returns true for empty string', () => {
        expect(isNullOrFn('')).to.be.true;
    });

    it('returns false for string value', () => {
        expect(isNullOrFn('test')).to.be.false;
    });

    it('returns false for numbers', () => {
        expect(isNullOrFn(0)).to.be.false;
        expect(isNullOrFn(1)).to.be.false;
        expect(isNullOrFn(Infinity)).to.be.false;
    });

    it('returns true for NaN', () => {
        expect(isNullOrFn(NaN)).to.be.true;
        expect(isNullOrFn(Number('test'))).to.be.true;
    });

    it('returns false for boolean values', () => {
        expect(isNullOrFn(false)).to.be.false;
        expect(isNullOrFn(true)).to.be.false;
    });

    it('returns true for empty object literal', () => {
        expect(isNullOrFn({})).to.be.true;
    });

    it('returns false for object literal with properties', () => {
        expect(isNullOrFn({ value: true })).to.be.false;
        expect(isNullOrFn({ value: true, value2: false })).to.be.false;
    });

    it('returns true for empty array', () => {
        expect(isNullOrFn([])).to.be.true;
    });

    it('returns false for non empty array', () => {
        expect(isNullOrFn([1])).to.be.false;
        expect(isNullOrFn([1, 2])).to.be.false;
    });

    it('returns true for empty NodeList', () => {
        const element = document.createElement('div');

        expect(isNullOrFn(element.childNodes)).to.be.true;
    });

    it('returns false for non empty NodeList', () => {
        const element = document.createElement('div');

        element.appendChild(document.createElement('p'));
        element.appendChild(document.createElement('p'));

        expect(isNullOrFn(element.childNodes)).to.be.false;
    });

    it('returns true for empty HTMLCollection', () => {
        const element = document.createElement('div');
        const collection = element.getElementsByTagName('p');

        expect(isNullOrFn(collection)).to.be.true;
    });

    it('returns false for non empty HTMLCollection', () => {
        const element = document.createElement('div');

        element.appendChild(document.createElement('p'));
        element.appendChild(document.createElement('p'));

        const collection = element.getElementsByTagName('p');

        expect(isNullOrFn(collection)).to.be.false;
    });

    it('returns false for instance of a class', () => {
        class MyClass {
        }

        expect(isNullOrFn(new MyClass())).to.be.false;
        expect(isNullOrFn(new Date())).to.be.false;
    });

    it('returns false for function', () => {
        function myFunction() {
        }

        expect(isNullOrFn(myFunction)).to.be.false;
        expect(isNullOrFn(() => {
        })).to.be.false;
    });

    it('returns false for symbol', () => {
        expect(isNullOrFn(Symbol())).to.be.false;
    });

    it('returns false for BigInt', () => {
        expect(isNullOrFn(BigInt(1))).to.be.false;
    });
}

describe('isNullOrEmpty', () => {
    isNullOrTests(isNullOrEmpty);

    it('returns false for whitespace string', () => {
        expect(isNullOrWhiteSpace(' ')).to.be.true;
        expect(isNullOrWhiteSpace('   ')).to.be.true;
    });
});

describe('isNullOrWhiteSpace', () => {
    isNullOrTests(isNullOrWhiteSpace);

    it('returns true for whitespace string', () => {
        expect(isNullOrWhiteSpace(' ')).to.be.true;
        expect(isNullOrWhiteSpace('   ')).to.be.true;
    });

    it('returns false for string value with whitespace around it', () => {
        expect(isNullOrWhiteSpace(' test')).to.be.false;
        expect(isNullOrWhiteSpace('  test  ')).to.be.false;
        expect(isNullOrWhiteSpace('test  ')).to.be.false;
    });
});
