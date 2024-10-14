//      1

// class Animal  {
//     name:  string
//     species: string

// constructor(name: string, species: string){
//     this.name = name
//     this.species = species
// }
// sound(): void{
//     console.log('The animal makes a sound')
// }
// }

// class Dog extends Animal {
//     breed: string

//     constructor(name: string, breed: string){
//         super(name, 'Dog')
//         this.breed = breed
// }
//     sound(): void {
//         console.log(`The dog ${this.name} & ${this.breed} barks`)
//     }
    
// }
// const animal = new Animal('', '')
// animal.sound()

// const dog = new Dog('Tarzan','lion')
// dog.sound()


//      2

// class Library {
//     static totalBooks: number = 0
    
//     addBook(): void{
//         Library.totalBooks++
//     }
//     static getTotalBooks():number{
//         return Library.totalBooks
//     }
// }
// const library1 = new Library()

// library1.addBook()
// console.log(Library.getTotalBooks())

//      3

class Vehicle {
    make: string
    model: string

    constructor(make: string, model: string){
        this.make = make
        this.model = model
    }
}
class Motorcycle extends Vehicle {
    type: string

    constructor(type: string){
        super( 'BMW', type)
        this.type = type
    }
}

const Vehicle1 = new Motorcycle('Harley')

console.log(Vehicle1)