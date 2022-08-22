const tutorials = {
  html: 32,
  css: 48,
  js: 60,
  jquery: 8,
  bootstrap: 25,
  react: 15,
  java: 155,
};

console.log(tutorials);


console.log(tutorials.html);

tutorials.html = 33;
console.log(tutorials.html);


tutorials.node = 5;
console.log(tutorials.node);

console.log("tutorial has property html: " + tutorials.hasOwnProperty("html"));

let studentInfo = {
  id: 101,
  personalInfo: {
    phone: {
      mobile: "01710444700",
      home: "01710",
    },
  },
};
console.log(studentInfo.personalInfo.phone.home);

const subjectName = "c plus plus";
tutorials[subjectName] = 65;
console.log(tutorials);

const addProperty = (property, value) => {
  tutorials[property] = value;
};

addProperty("python", 65);
console.log(tutorials);

for (const key in studentInfo) {
  console.log(`${key} = ${studentInfo[key]}`);
}

const students = {
  karim: {
    age: 25,
  },
  rahim: {
    age: 35,
  },
  sagor: {
    age: 30,
  },
  nehal: {
    age: 29,
  },
};

const checkAge = (std) => {
  for (const x in std) {
    if (std[x].age <= 30) {
      console.log(x);
    }
  }
};
checkAge(students);
console.log(Object.keys(students));