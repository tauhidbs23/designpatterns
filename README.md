# designpatterns

# null object pettern
```JS
class User{
  constructor(id,name){
    this.id = id
    this.name = name
  }

  hasAccess(){
    return this.name === 'Bob'
  }
}

const users = [
  new User(1,'Bob'),
  new User(2,'John')
]

function getUser(id){
  return users.find(user => user.id === id)
}

function printUser(id){
  const user = getUser(id)

  let name = 'Guest'

  if(user != null && user.name != null){
    name = user.name
    console.log('Hello '+ name)
  }

  if(user != null && user.hasAccess !=null && user.hasAccess()){
    console.log('You have access');
  }else{
    console.log('You are not allowed here');
  }
  
}
```

# now null object pattern 
```JS
class User {
  constructor(id, name) {
    this.id = id
    this.name = name
  }

  hasAccess() {
    return this.name === 'Bob'
  }
}

class NullUser {
  constructor() {
    this.id = -1
    this.name = 'Guest'
  }

  hasAccess() {
    return false;
  }
}

const users = [
  new User(1, 'Bob'),
  new User(2, 'John')
]

function getUser(id) {
  const user = users.find(user => user.id === id)
  if(!user){
    return new NullUser()
  }else{
    return user
  }
}

function printUser(id) {
  const user = getUser(id)
  console.log('Hello ' + user.name)
  
  if (user.hasAccess()) {
    console.log('You have access');
  } else {
    console.log('You are not allowed here');
  }

}
```
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



