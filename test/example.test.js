// IMPORT MODULES under test here:

import { createUser, saveUser, getUser } from '../local-storage-utils.js';

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
    //Arrange
    // Set up your arguments and expectations
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
    //Act 

    // Call the function you're testing and set the result to a const
    // return an object from local storage
    const actual = JSON.parse(localStorage.getItem('USER'));

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('this test should get a user from local storage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    // 


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



    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getUser();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
