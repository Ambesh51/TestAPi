import React from 'react';
import App,{ dataFunction } from './App'
import renderer from 'react-test-renderer';
import { async } from 'q';
import { func } from 'prop-types';

// test("two plus 1 is three",()=>{
//   // expect(2+1).toBe(3) // toBe is matcher   
//   expect(2+1).toEqual(3) //want to check the value of an object

// const value = 0.1 + 0.2;
// //expect(value).toBe(0.3);           This won't work because of rounding error
// expect(value).toBeCloseTo(0.3); // This works.

// })

//exapmle for toEqual 
// toEqual recursively checks every field of an object or array
// expect(2 + 2) returns an "expectation" object

// -----------------------------------------------------------
// test('object assignment',()=>{
//   const data ={one:1};
//   data['two']=2;
//   expect(data).toEqual({one:1, two:2});
// });


// --------------------------------------------------------------

// You can also test for the opposite of a matcher using not:

// test('adding positive numbers is not zero', () => {
//   for (let a = 1; a < 10; a++) {
//     for (let b = 1; b < 10; b++) {
//       expect(a + b).not.toEqual(0);
//     }
//   }
// });

//--------------------------------------------------------------------

// JEST helpers

// test('null', () => {
//   const n = null;
//   expect(n).toBeNull();
//   expect(n).toBeDefined();
//   expect(n).not.toBeUndefined();
//   expect(n).not.toBeTruthy();
//   expect(n).toBeFalsy();
// });

// test('zero', () => {
//   const z = 0;
//   expect(z).not.toBeNull();
//   expect(z).toBeDefined();
//   expect(z).not.toBeUndefined();
//   expect(z).not.toBeTruthy();
//   expect(z).toBeFalsy();
// });

//-----------------------------------------
//string Matcher

// test('there is no "I" in ambesh', () => {
//   expect('ambesh').not.toMatch(/I/);
// });

// test('there is a "pune" in PUNE in INDIA', () => {
//   expect('PUNE in INDIA').toMatch(/pune/i);
// });
// -------------------
// loop

// test('adding positive numbers is not zero and less than or equal to 18', () => {
//   for (let a = 1; a < 10; a++) {
//     for (let b = 1; b < 10; b++) {
//       // Check if the sum of a and b is not zero
//       expect(a + b).not.toBe(0);

//       // Check if the sum of a and b is less than or equal to 18
//       expect(a + b).toBeLessThanOrEqual(18);
//     }

//     // After the inner loop, check if a is equal to 9 for each iteration of the outer loop
//     expect(a).toBeLessThanOrEqual(9);
//   }
// });

//----------------------------------------
// array or iterable contains a value check 
// const fields = [
//   'UI',
//   'DEV',
//   'BAckend',
//   'Test',
//   'Deploy',
// ];

// test('the tech list has "backend" on it', () => {

//   expect(fields).toContain('BAckend');

//   expect(new Set(fields)).toContain('BAckend');

//   expect(fields.join(',')).toMatch(/backend/i); // checking using reg by split a array in string form by using join(,)
// });

//------------------------------------------------------------
//snapshot to check changes prev code.


// test('First snapshot test', ()=>{
//     const component = renderer.create(
//   <App/>
//   );
//     let tree= component.toJSON();
//     expect(tree).toMatchInlineSnapshot();
    
// })

//--------------------------------------------------------
//function test cases

// ???????????????????????????????????????????????????????---- error
// test("Function Testing1",()=>{
//   let component = renderer.create(<App/>).getInstance()
//   let tree = component.dataFunction(10)
//   expect(tree).toBe(20);
//  })

// ???????????????????????????????????????????????????????---- error
// test('Test dataFunction2', () => {
//   const component = renderer.create(<App />);
//   const instance = component.root;
//   const result = instance.dataFunction(10);

//   expect(result).toBe(20);
// })

// ->>>>>>>>>>>>>>>>>>>>>>>>>> output >>>>>>>>>>>>>>>>>>>>>>>>>>>>
// test('Test dataFunction3', () => {

//   const result = dataFunction(10);
//   const expectedValue = 20;

//   expect(result).toBe(expectedValue);
// })

//---------------------
//basic api test function
import Movies, { api } from './Movies';

test("API Testing", async function () {
  try {
    const response = await api();
    console.warn(response); // Logging the fetched data
    expect(response).toBeDefined(); // Assert that the response is not undefined
    expect(response.movies[0].title).toEqual("Star Wars")
  } catch (error) {
    console.error("Error in API Testing:", error);
    fail("API call failed");
  }
});

