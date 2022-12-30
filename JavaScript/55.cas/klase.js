// class Car {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
//   fullName() {
//     console.log(this.name + " " + this.type);
//   }
// }
// const newCar = new Car("audi", "limo");
// console.log(newCar);

// newCar.fullName();

// class User {
//   constructor(name, lName) {
//     this.name = name;
//     this.lName = lName;
//   }
//   fullName() {
//     console.log(this.name + " " + this.lName);
//   }
// }
// const newUser = new User("Muhamed", "Krkmisevic");

// newUser.fullName();

// Create a new class User with data like name , lName ,yearOfBirth

class User {
  constructor(name, lName, yearOfBirth) {
    this.name = name;
    this.lName = lName;
    this.yearOfBirth = yearOfBirth;
    this.age = this.yearsOfUser(yearOfBirth);
  }
  yearsOfUser() {
    return 2022 - this.yearOfBirth;
  }
}

class AditionalInfo extends User {
  //street , city , state , phone number
  stateArr = [
    { state: "USA", cId: "+1" },
    { state: "Mexico", cId: "+51" },
    { state: "India", cId: "+91" },
    { state: "China", cId: "+86" },
    { state: "Serbia", cId: "+381" },
  ];
  constructor(street, city, state, phoneNmber) {
    super(this.name, this.lName, tihs.yearOfBirth, this.age);
    this.street = street;
    this.city = city;
    this.state = state;
    this.phoneNumber = phoneNmber;
    this.cId = cId;
  }
  brojevi() {
    stateArr.forEach((el) => {
      if (this.state === "Serbia") {
        return "+381";
      } else if (this.state === "Mexico") {
        return "+51";
      }
    });
  }
}
const newUser = new User("Muhamed", "Krkmisevic", 2005);

console.log(newUser);
