 const user ="akash";
 // console.log(user);
 const email = "akash123@gamil.com";

  //console.log(`hello i am ${user} and my email this ${email}`); mujhe string ese hi define krni hai 

const newString = new  String('Akash kumar') // is se mujhe string ke method pta chlenge

  console.log(newString.toUpperCase())
  console.log(newString.trim());
//   console.log(newString.toString());

const city = "america is the best country";
console.log(`EN: ${city.toLocaleUpperCase('en')}`)

//console.log(city.substring(2));
const split= city.split('');// isme ye array me value leta hai 
console.log(split[2,5]);

  const url = "https://akash%20kumar";
  console.log(url.replace('%20', '-'))

  const paragraph = "i think this is very cruicial document";
  const search = "cruicial";

  const indexof = paragraph.indexOf(search);

  console.log(indexof);
