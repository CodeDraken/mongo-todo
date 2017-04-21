// JSON web tokens
const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
  id: 10
};

// data & secret
let token = jwt.sign(data, '123abc');
let decoded = jwt.verify(token, '123abc');

console.log('token', token);
console.log('decoded', decoded);

// let message = 'User number 1';
// let hash = SHA256(message).toString();
// // hash same everytime
// console.log(message, hash)

// // salt makes it different
// let data = {
//   id: 4
// };
// let token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// // salt prevents editing
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//   console.log('data is unchanged');
// } else {
//   // something edited the token & data
//   console.log('data was changed');
// }
