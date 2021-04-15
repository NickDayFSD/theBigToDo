// IMPORT MODULES under test here:

import { createUser, saveUser, getUser, verifyLogin } from '../local-storage-utils.js';

const test = QUnit.test;

test('this test should create the user object', (expect) => {

    const expected = {
        username: 'phil',
        password: '666',
        todo: []
    };

    const user = 'phil';
    const password = '666';

    const actual = createUser(user, password);

    expect.deepEqual(actual, expected);
});

test('this test should save user to local storage', (expect) => {

    const expected = {
        username: 'phil',
        password: '666',
        todo: []
    };

    const account = {
        username: 'phil',
        password: '666',
        todo: []
    };

    saveUser(account);

    const actual = JSON.parse(localStorage.getItem('USER'));

    expect.deepEqual(actual, expected);
});

test('this test should get a user from local storage', (expect) => {

    const expected = {
        username: 'phil',
        password: '666',
        todo: []
    };

    const account = {
        username: 'phil',
        password: '666',
        todo: []
    };

    saveUser(account);

    const actual = getUser();

    expect.deepEqual(actual, expected);
});

test('this test should compare input to existing account', (expect) => {

    const username = 'phil';
    const password = '666';
    const account = {
        username: 'phil',
        password: '666',
        todo: []
    };

    saveUser(account);

    const expected = true;

    const actual = verifyLogin(username, password);

    expect.equal(actual, expected);
});

