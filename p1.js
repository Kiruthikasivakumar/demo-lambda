//Using object destructuring, extract the following properties from the user object:
// name
// age
// city (from the location object)
// firstHobby (from the hobbies array, get the first hobby)


const user = {
    id: 1,
    name: "John Doe",
    age: 30,
    location: {
      city: "New York",
      state: "NY",
    },  
    hobbies: ["reading", "traveling", "coding"]
  };

  const {name: naam='', age=0, location:{city=''}={},hobbies:[firstHobby]=[]} = user;
  console.log(naam,age,city,firstHobby);