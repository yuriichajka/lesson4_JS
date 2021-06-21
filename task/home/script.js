// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// const user1 = new User('1', 'Yurii', 'Chaika', 'yuriichajka@gmail.com', '0931098933')
// const user2 = new User('2', 'Anna', 'Black', 'gagaea@gmail.com', '0556562651')
// const user3 = new User('3', 'Vova', 'Hims', 'fafasc@gmail.com', '0945465123')
// const user4 = new User('4', 'Kolya', 'Hell', 'gsdgsg@gmail.com', '62363256235')
// const user5 = new User('5', 'Nastya', 'Facl', 'dsfs@gmail.com', '32675474')
// const user6 = new User('6', 'Vira', 'Gyti', 'gsdfhj@gmail.com', '525242')
// const user7 = new User('7', 'Nadia', 'Loka', 'gsdhsdh@gmail.com', '523635745')
// const user8 = new User('8', 'Andrii', 'Miko', 'fsfs@gmail.com', '252354235')
// const user9 = new User('9', 'Johny', 'Vito', 'gsgsdgs@gmail.com', '243634624')
// const user10 = new User('10', 'Oleg', 'Ferys', 'gsdgsdg@gmail.com', '6236234634')

// let arr = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];


// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client{
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }

// const user1 = new Client('1', 'Yurii', 'Chaika', 'yuriichajka@gmail.com', '0931098933', ['bread', 'milk', 'ice-cream'])
// const user2 = new Client('2', 'Anna', 'Black', 'gagaea@gmail.com', '0556562651', ['bread', 'milk', 'ice-cream'])
// const user3 = new Client('3', 'Vova', 'Hims', 'fafasc@gmail.com', '0945465123', ['bread', 'milk', 'ice-cream'])
// const user4 = new Client('4', 'Kolya', 'Hell', 'gsdgsg@gmail.com', '62363256235', ['bread', 'milk', 'ice-cream'])
// const user5 = new Client('5', 'Nastya', 'Facl', 'dsfs@gmail.com', '32675474', ['bread', 'milk', 'ice-cream'])
// const user6 = new Client('6', 'Vira', 'Gyti', 'gsdfhj@gmail.com', '525242', ['bread', 'milk', 'ice-cream'])
// const user7 = new Client('7', 'Nadia', 'Loka', 'gsdhsdh@gmail.com', '523635745', ['bread', 'milk', 'ice-cream'])
// const user8 = new Client('8', 'Andrii', 'Miko', 'fsfs@gmail.com', '252354235' , ['bread', 'milk', 'ice-cream'])
// const user9 = new Client('9', 'Johny', 'Vito', 'gsgsdgs@gmail.com', '243634624', ['bread', 'milk', 'ice-cream'])
// const user10 = new Client('10', 'Oleg', 'Ferys', 'gsdgsdg@gmail.com', '6236234634', ['bread', 'milk', 'ice-cream'])

// let arr = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
// console.log(arr);


// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let drivers = {name: 'Ivan Popov', age: 45};

// function Car(model, produser, year, max_speed, engine) {
//     this.model = model || '318';
//     this.produser = produser || 'BMW';
//     this.year = year || 1999;
//     this.max_speed = max_speed || 240;
//     this.engine = engine || 1.8;

//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.max_speed} на годину`);
//     };

//     this.info = function () {
//         if (this.shafer) {
//               console.log(`
//         model: ${this.model}
//         produser: ${this.produser}
//         year: ${this.year}
//         max-speed: ${this.max_speed}
//         engine: ${this.engine}
//         shafer: ${this.shafer.name}`);
//     } else {
//         console.log(`
//         model: ${this.model}
//         produser: ${this.produser}
//         year: ${this.year}
//         max-speed: ${this.max_speed}
//         engine: ${this.engine}`);
//         }
//     } 

//     this.increaseMaxSpeed = function(newSpeed) {
//         this.max_speed += newSpeed;
//     }

//     this.changeYear = function(newValue) {
//         this.year = newValue;
//     }

//     this.addDriver = function(driver) {
//         this.shafer = driver;
//     }
// };

// let car = new Car();
// car.changeYear(2021);
// car.increaseMaxSpeed(50);
// car.addDriver(drivers);
// car.info();
// car.drive();


// 4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let drivers = {name: 'Ivan Popov', age: 45};

// class Car {
//     constructor(model, produser, year, max_speed, engine) {
//         this.model = model || '318';
//         this.produser = produser || 'BMW';
//         this.year = year || 1999;
//         this.max_speed = max_speed || 240;
//         this.engine = engine || 1.8;
//     }
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.max_speed} на годину`);
//     };

//     info () {
//         if (this.shafer) {
//             console.log(`
//                 model: ${this.model}
//                 produser: ${this.produser}
//                 year: ${this.year}
//                 max-speed: ${this.max_speed}
//                 engine: ${this.engine}
//                 shafer: ${this.shafer.name}`);
//             } else {
//                 console.log(`
//                 model: ${this.model}
//                 produser: ${this.produser}
//                 year: ${this.year}
//                 max-speed: ${this.max_speed}
//                 engine: ${this.engine}`);
//                 }
//             } ;
        
//             increaseMaxSpeed(newSpeed) {
//                 this.max_speed += newSpeed;
//             };
        
//             changeYear(newValue) {
//                 this.year = newValue;
//             };
        
//             addDriver(driver) {
//                 this.shafer = driver;
//             };
// };
//     let car = new Car;
//     car.changeYear(2021);
//     car.increaseMaxSpeed(50);
//     car.addDriver(drivers);
//     car.info();
//     car.drive();
    








