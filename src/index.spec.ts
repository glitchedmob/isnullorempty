import { isNotNullOrEmpty, isNotNullOrWhiteSpace, isNullOrEmpty, isNullOrWhiteSpace } from './index';
import { expect } from 'chai';
import 'mocha';

function isNullOrTests(
    isNullOrFn: typeof isNullOrEmpty | typeof isNullOrWhiteSpace | typeof isNotNullOrEmpty | typeof isNotNullOrWhiteSpace,
    { inverseCheck = false } = {},
) {
    it(`returns ${inverseCheck ? 'false' : 'true'} for null`, () => {
        expect(isNullOrFn(null)).to.equal(inverseCheck ? false : true);
    });

    it(`returns ${inverseCheck ? 'false' : 'true'} for undefined`, () => {
        expect(isNullOrFn(undefined)).to.equal(inverseCheck ? false : true);
    });

    it(`returns ${inverseCheck ? 'false' : 'true'} for empty string`, () => {
        expect(isNullOrFn('')).to.equal(inverseCheck ? false : true);
    });

    it(`returns ${inverseCheck ? 'true' : 'false'} for string value`, () => {
        expect(isNullOrFn('test')).to.equal(inverseCheck ? true : false);
    });

    it(`returns ${inverseCheck ? 'true' : 'false'} for numbers`, () => {
        expect(isNullOrFn(0)).to.equal(inverseCheck ? true : false);
        expect(isNullOrFn(1)).to.equal(inverseCheck ? true : false);
        expect(isNullOrFn(Infinity)).to.equal(inverseCheck ? true : false);
    });

    it(`returns ${inverseCheck ? 'false' : 'true'} for NaN`, () => {
        expect(isNullOrFn(NaN)).to.equal(inverseCheck ? false : true);
        expect(isNullOrFn(Number('test'))).to.equal(inverseCheck ? false : true);
    });

    it(`returns ${inverseCheck ? 'true' : 'false'} for boolean values`, () => {
        expect(isNullOrFn(false)).to.equal(inverseCheck ? true : false);
        expect(isNullOrFn(true)).to.equal(inverseCheck ? true : false);
    });

    it(`returns ${inverseCheck ? 'false' : 'true'} for empty object literal`, () => {
        expect(isNullOrFn({})).to.equal(inverseCheck ? false : true);
    });

    it(`returns ${inverseCheck ? 'true' : 'false'} for object literal with properties`, () => {
        expect(isNullOrFn({ value: true })).to.equal(inverseCheck ? true : false);
        expect(isNullOrFn({ value: true, value2: false })).to.equal(inverseCheck ? true : false);
    });

    it(`returns ${inverseCheck ? 'false' : 'true'} for empty array`, () => {
        expect(isNullOrFn([])).to.equal(inverseCheck ? false : true);
    });

    it(`returns ${inverseCheck ? 'true' : 'false'} for non empty array`, () => {
        expect(isNullOrFn([1])).to.equal(inverseCheck ? true : false);
        expect(isNullOrFn([1, 2])).to.equal(inverseCheck ? true : false);
    });

    it(`returns ${inverseCheck ? 'false' : 'true'} for empty NodeList`, () => {
        const element = document.createElement('div');

        expect(isNullOrFn(element.childNodes)).to.equal(inverseCheck ? false : true);
    });

    it(`returns ${inverseCheck ? 'true' : 'false'} for non empty NodeList`, () => {
        const element = document.createElement('div');

        element.appendChild(document.createElement('p'));
        element.appendChild(document.createElement('p'));

        expect(isNullOrFn(element.childNodes)).to.equal(inverseCheck ? true : false);
    });

    it(`returns ${inverseCheck ? 'false' : 'true'} for empty HTMLCollection`, () => {
        const element = document.createElement('div');
        const collection = element.getElementsByTagName('p');

        expect(isNullOrFn(collection)).to.equal(inverseCheck ? false : true);
    });

    it(`returns ${inverseCheck ? 'true' : 'false'} for non empty HTMLCollection`, () => {
        const element = document.createElement('div');

        element.appendChild(document.createElement('p'));
        element.appendChild(document.createElement('p'));

        const collection = element.getElementsByTagName('p');

        expect(isNullOrFn(collection)).to.equal(inverseCheck ? true : false);
    });

    it(`returns ${inverseCheck ? 'true' : 'false'} for instance of a class`, () => {
        class MyClass {
        }

        expect(isNullOrFn(new MyClass())).to.equal(inverseCheck ? true : false);
        expect(isNullOrFn(new Date())).to.equal(inverseCheck ? true : false);
    });

    it(`returns ${inverseCheck ? 'true' : 'false'} for function`, () => {
        function myFunction() {
        }

        expect(isNullOrFn(myFunction)).to.equal(inverseCheck ? true : false);
        expect(isNullOrFn(() => {
        })).to.equal(inverseCheck ? true : false);
    });

    it(`returns ${inverseCheck ? 'true' : 'false'} for symbol`, () => {
        expect(isNullOrFn(Symbol())).to.equal(inverseCheck ? true : false);
    });

    it(`returns ${inverseCheck ? 'true' : 'false'} for BigInt`, () => {
        expect(isNullOrFn(BigInt(1))).to.equal(inverseCheck ? true : false);
    });
}

function isNullOrEmptyTest(
    isNullOrEmptyFn: typeof isNullOrEmpty | typeof isNotNullOrEmpty,
    { inverseCheck = false } = {},
) {
    isNullOrTests(isNullOrEmptyFn, { inverseCheck });

    it(`returns ${inverseCheck ? 'true' : 'false'} for whitespace string`, () => {
        expect(isNullOrEmptyFn(' ')).to.equal(inverseCheck ? true : false);
        expect(isNullOrEmptyFn('   ')).to.equal(inverseCheck ? true : false);
    });
}

function isNullOrWhiteSpaceTest(
    isNullOrWhiteSpaceFn: typeof isNullOrWhiteSpace | typeof isNotNullOrWhiteSpace,
    { inverseCheck = false } = {},
) {
    isNullOrTests(isNullOrWhiteSpaceFn, { inverseCheck });

    it(`returns ${inverseCheck ? 'false' : 'true'} for whitespace string`, () => {
        expect(isNullOrWhiteSpaceFn(' ')).to.equal(inverseCheck ? false : true);
        expect(isNullOrWhiteSpaceFn('   ')).to.equal(inverseCheck ? false : true);
    });

    it(`returns ${inverseCheck ? 'true' : 'false'} for string value with whitespace around it`, () => {
        expect(isNullOrWhiteSpaceFn(' test')).to.equal(inverseCheck ? true : false);
        expect(isNullOrWhiteSpaceFn('  test  ')).to.equal(inverseCheck ? true : false);
        expect(isNullOrWhiteSpaceFn('test  ')).to.equal(inverseCheck ? true : false);
    });
}

describe('isNullOrEmpty', () => {
    isNullOrEmptyTest(isNullOrEmpty, { inverseCheck: false });
});

describe('isNotNullOrEmpty', () => {
    isNullOrEmptyTest(isNotNullOrEmpty, { inverseCheck: true });
});

describe('isNullOrWhiteSpace', () => {
    isNullOrWhiteSpaceTest(isNullOrWhiteSpace, { inverseCheck: false });
});

describe('isNotNullOrWhiteSpace', () => {
    isNullOrWhiteSpaceTest(isNotNullOrWhiteSpace, { inverseCheck: true });
});
