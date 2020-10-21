# problem
```JS
class Address{
  constructor(zip,street){
    this.zip = zip
    this.street = street
  }
}

class User{
  constructor(name,age,phone,address){
    this.name = name
    this.age = age
    this.phone = phone
    this.address = address
  }
}

const user = new User('Bob',undefined,undefined,new Address("1",'Main'))
console.log(user)
```

# tradition way 
```JS
class Address {
  constructor(zip, street) {
    this.zip = zip
    this.street = street
  }
}

class User {
  constructor(name) {
    this.name = name
  }
}

class UserBuilder {
  constructor(name) {
    this.user = new User(name)
  }
  
  setAge(age) {
    this.user.age = age;
    return this
  }
  
  setPhone(phone){
    this.user.phone = phone;
    return this
  }

  setAddress(address){
    this.user.address = address;
    return this
  }

  build(){
    return this.user;
  }

}

const user = new UserBuilder('Bob').setAge(10).setPhone('3424424234').build();

console.log(user)
```

# another way 
```JS
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
```