// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);



class Cat {
    constructor(){
      this.name = `Boots`;  
      this.species = `cat`;
      this.breed = `Siamese`;
      this.tiredness = 0;
      this.hunger = 0;
      this.loneliness = 0;
      this.happiness = 0;
    }
wait = (minutes) => {
      this.tiredness += (0.10*minutes);
      this.hunger += (0.15*minutes);
      this.loneliness += (0.50*minutes);
      this.happiness -= (0.30*minutes);
}

}

const Weeb = new Cat();

Weeb.wait(20);
console.log(Weeb);