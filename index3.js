const studentInfo = {
  id: 101,
  name: "Anisul Islam",
  gpa: 3.92,
};
const studentInfoJSON = JSON.stringify(studentInfo);
console.log(studentInfoJSON);

const studentInfoJSObject = JSON.parse(studentInfoJSON);
console.log(studentInfoJSObject);