class Address {
  constructor(zip, street) {
    this.zip = zip
    this.street = street
  }
}

class User {
  constructor(name,{age= 4,phone,address} = {} ) {
    this.name = name
    this.age = age
    this.phone = phone
    this.address = address
  }
}

let user = new User('Bob',{ address: new Address('1','Main')})
console.log(user);