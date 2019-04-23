const Pizza = require('./Pizza');
const margherita = new Pizza();

margherita.setBase('Whole Wheat');
margherita.setSauce('Tomato Basil');

margherita.setToppings(['Olive', 'Basil']);

margherita.bake();