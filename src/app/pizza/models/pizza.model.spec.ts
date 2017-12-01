import { Ingredient } from "./ingredients.model";
import { Pizza } from "./pizza.model";

describe('PizzaModel', function () {

  it('creates pizza', function(){
    //Initialize
    const id = '1';
    const name = 'Margerita';
    const price = 15.50;
    const ingredients = [
      {Name: 'pomidor',
       Price: 20.10,
       canAdd: true} as Ingredient
    ];
    //Execution->create
    let pizza = new Pizza(id, name, price, ingredients);
    //Assert
    expect(pizza.Price).toEqual(price);
    expect(pizza.Ingredients).toEqual(ingredients);
  })

  it('set properties in pizza', function(){
    //Initialize
    const id = '1';
    const name = 'Margerita';
    const price = 15.50;
    const ingredients = [
      {Name: 'pomidor',
       Price: 20.10,
       canAdd: true} as Ingredient
    ];
    const newName = 'NewPizza';
    const newPrice = 3.50;
    //Execution->create
    let pizza = new Pizza(id, name, price, ingredients);
    pizza.Name = newName;
    pizza.Price = newPrice;
    //Assert
    expect(pizza.Name).toEqual('Pizza ' + newName);

  })
})
