const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get appetizers() {},
    set appetizers(appetizers) {},
    get mains() {},
    set mains(mains) {},
    get desserts() {},
    set desserts(desserts) {},
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal() {
      const appetizers = this.getRandomDishFromCourse("appetizers");
      const mains = this.getRandomDishFromCourse("mains");
      const desserts = this.getRandomDishFromCourse("desserts");
  
      const totalPrice = appetizers.price + mains.price + desserts.price;
      return `Your meal is ${appetizers.name}, ${mains.name}, ${desserts.name}. The price is ${totalPrice}.`;
    },
  };
  // adding dishes to menu apps
  menu.addDishToCourse("appetizers", "Garlic Bread", 4.99);
  menu.addDishToCourse("appetizers", "Chicken Wings", 8.99);
  menu.addDishToCourse("appetizers", "MeatBalls", 6.99);
  // mains
  menu.addDishToCourse("mains", "Chicken Parmesian", 14.99);
  menu.addDishToCourse("mains", "Penne Ala Vodka", 12.99);
  menu.addDishToCourse("mains", "Lasagna", 13.99);
  // desserts
  menu.addDishToCourse("desserts", "Fried Dough", 5.99);
  menu.addDishToCourse("desserts", "Cinnamon Cake", 5.99);
  menu.addDishToCourse("desserts", "Tiramisu", 6.99);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);
  