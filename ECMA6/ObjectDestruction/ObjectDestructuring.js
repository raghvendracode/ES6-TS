const Student = {
    firstName: 'Amit',
    lastName: 'Kumar',
    university: 'PTU',
    enrollno: 354354,
    social: {
        twitter: "@twitter",
        facebook: "@facebook"
    }

};
const firstName = Student.firstName;
const lastName = Student.lastName;
const university = Student.university;
const social = Student.social.facebook;

console.log(firstName, lastName, university, social);

//Destructuring 

        //  const { firstName, lastName, university, enrollno,social } = Student;
        //  console.log(firstName,lastName,university,social.facebook);

