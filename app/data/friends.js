var people = [
   { name: 'Cookie Monster',
   pic: 'https://images.homedepot-static.com/productImages/f3e27562-f051-4db6-9d34-b04b890972e4/svn/blue-roommates-wall-decals-rmk1483gm-64_600.jpg',
   answers: [ '0', '4', '0', '0', '0' ] },
   { name: 'Oscar the Grouch',
   pic: 'https://cdn-images-1.medium.com/max/1200/0*XUqoVTLGQsYacXs_',
   answers: [ '4', '0', '0', '0', '0' ] }
];
console.log("peopel loaed");


  
  // Note how we export the array. This makes it accessible to other files using require.
module.exports = people;