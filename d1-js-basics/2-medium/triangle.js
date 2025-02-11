/*
We are going to build some function to help us with triangles.
The functions will all take three numbers as arguments s1, s2, s3.
Each number given is the length of a line.
1. isTriangle: will return false if the three lines are unable to form a triangle
                or it will return true if the three lines can be used to construct a triangle.
2. findPerimeter: will return the perimeter of the triangle using the three side-lengths.
=====================================================================================
Code Below*/

// a + b > c
// a + c > b
// b + c > a
function isTriangle(s1, s2, s3) {
  if (!(s1 + s2 > s3 && s1 + s3 > s2 && s2 + s3 > s1)) {
    return false;
  } else {
    return true;
  }
}

function findPerimeter(s1, s2, s3) {
  return s1 + s2 + s3;
}

// Test command (in terminal) "npm run test:d1:medium:triangle"
module.exports = { isTriangle, findPerimeter };
