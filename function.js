const { default: axios } = require("axios");

const functions = {
   add: (num1, num2) => num1 + num2,
   isNull: () => null,
   checkValue:(n) => n,
   createUser: () => {
      const user = {firstName: 'adarsh'};
      user.lastName = 'pathak';
      return user
   },
   fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(res => 'error')
}


module.exports = functions;