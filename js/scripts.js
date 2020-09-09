//Define pizza object and methods
function PizzaSize(id, displayName, cost) {
    this.id = id;
    this.displayName = displayName;
    this.cost = cost;
}

function PizzaCrust(id, displayName, cost) {
    this.id = id;
    this.displayName = displayName;
    this.cost = cost;
}

function PizzaTopping(id, displayName, costSmall, costMedium, costLarge) {
    this.id = id;
    this.displayName = displayName;
    this.costSmall = costSmall;
    this.costMedium = costMedium;
    this.costLarge = costLarge;
}



var myPizzaSizes = [
    new PizzaSize(1, 'Small', 100),
    new PizzaSize(2, 'Medium', 200),
    new PizzaSize(3, 'Large', 300),
];

var myPizzaCrusts = [
    new PizzaCrust(1, 'Crispy', 400),
    new PizzaCrust(2, 'Fluffy', 500),
    new PizzaCrust(3, 'Gluten-Free', 300),
];

var myPizzaToppings = [
    new PizzaTopping(1, 'Chicken', 100, 120, 150),
    new PizzaTopping(2, 'Bacon', 110, 130, 160),
    new PizzaTopping(3, 'Sausage', 120, 140, 170),
    new PizzaTopping(4, 'Mushroom', 130, 150, 180),
    new PizzaTopping(5, 'Green-Peppers', 140, 160, 190),
    new PizzaTopping(6, 'Red-Peppers', 140, 160, 190),
];

/* console.log('myPizzaSizes: ', myPizzaSizes);
console.log('myPizzaCrust: ', myPizzaCrust);
console.log('myPizzaToppings: ', myPizzaToppings); */

function Pizza() {
    this.total = 0;
    this.count = 1;
    this.size = new PizzaSize();
    this.crust = new PizzaCrust();
    this.toppings = [];
}

Pizza.prototype.addTopping = function (newToppings) {
    /* console.log('Clearing :', this.toppings);
    this.toppings.splice(0, this.toppings.length);
    console.log('End Clearing :', this.toppings);
    this.toppings.push(newToppings);
    console.log('After :', this.toppings); */

    //console.log('newToppings :', newToppings);
    this.toppings.splice(0, this.toppings.length);
    let instance = this;
    newToppings.forEach(function (item) {
        instance.toppings.push(item);
    });
    this.calculateTotal();
}

Pizza.prototype.calculateTotal = function () {
    var total = 0;
    total += this.size.cost;
    total += this.crust.cost;

    let id = this.size.id;

    let toppingTotal = this.toppings.reduce(function (sum, topping) {
        if (id === 1) {//small
            return sum + topping.costSmall;
        } else if (id === 2) {//medium
            return sum + topping.costMedium;
        } else if (id === 3) {// large
            return sum + topping.costLarge;
        }
    }, 0);

    total += toppingTotal;

    this.total = total * this.count;
}

/* var myPizzaTest = new Pizza();
myPizzaTest.size = myPizzaSizes[1];
myPizzaTest.crust = myPizzaCrust[2];
myPizzaTest.count = 2;

var myTestToppings = [
    myPizzaToppings[1],
    myPizzaToppings[2],
    myPizzaToppings[4]
]
myPizzaTest.addTopping(myTestToppings);
myPizzaTest.calculateTotal(); */

//console.log('myPizzaTest: ', myPizzaTest);

function DeliveryAddress(email, phoneNumber, physicalAddress, building) {
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.physicalAddress = physicalAddress;
    this.building = building;

}

//Define order
function CustomerOrder() {
    this.customerName = '';
    this.deliver = false;
    this.deliveryAddress = null;
    this.pizzas = [];
    this.deliveryCost = 300;
    this.total = 0;
}
CustomerOrder.prototype.addPizza = function (pizza) {
    this.pizzas.push(pizza);
    this.calculateTotal();
}

CustomerOrder.prototype.calculateTotal = function () {
    let pizzaCost = this.pizzas.reduce(function (sum, pizza) {
        return sum + pizza.total;
    }, 0);

    this.total = pizzaCost + (this.deliver ? this.deliveryCost : 0);
};


//Create order

var myOrder = new CustomerOrder();
/* myOrder.customerName = 'Dennis Kwaku';
myOrder.deliver = true;
myOrder.addPizza(myPizzaTest);
myOrder.addPizza(myPizzaTest);
myOrder.deliveryAddress = new DeliveryAddress('dennis@kwaku.com', '0722 123 456', 'Right here right now', 'Empire state');
myOrder.calculateTotal(); */


/* if (myOrder.deliver && myOrder.deliveryAddress == null) {
    console.error('Delivery address required');
}

console.log('myOrder: ', myOrder); */

function refreshPizzaTable() {
    $('#tablePizzas tbody').html('');
    myOrder.pizzas.forEach(function (pizza, index) {
        let toppings = pizza.toppings.map(function (topping) {
            return topping.displayName;
        });
        let rowDisplay = pizza.size.displayName + ' - ' + pizza.crust.displayName + '<br/>' + '<small>' + toppings + '</small>';

        let row = '<tr>'
            + '<td>' + (index + 1) + '</td>'
            + '<td>' + rowDisplay + '</td>'
            + '<td>' + pizza.count + '</td>'
            + '<td>' + pizza.total + '</td>'
            + '</tr>';

        $('#tablePizzas tbody').append(row);
    });
    $('#tablePizzasTotal').html(myOrder.total);


}





    // function Pizza(pizzasize, crust, toppings, delivery) {
    /*
    

    const txtSize = document.getElementById('inlineFormCustomSelectPref');
    const txtCrust = document.getElementById('inlineFormCustomSelectPref2');
    const txtChicken = document.getElementById('chicken');
    const txtBacon = document.getElementById('bacon');
    const txtSausage = document.getElementById('sausage');
    const txtMushrooms = document.getElementById('mushrooms');
    const txtgreenPeppers = document.getElementById('greenPeppers');

    let size = txtSize.value;
    let chicken = txtChicken.value;
    let bacon = txtBacon.value;
    let sausage = txtSausage.value;
    let mushrooms = txtMushrooms.value;
    let greenPeppers = txtgreenPeppers.value;



    $('#inlineFormCustomSelectPref').change(function () {
        let size = $('#inlineFormCustomSelectPref option:selected').val();
        let large = 500;
        let medium = 400;
        let small = 300;
        if (size == 'large') {
            return (large);
        }
        if (size == 'medium') {
            return (medium);
        }
        if (size == 'small') {
            return (small);
        }

    });

    // let pizzaCrust = function () {
    $('#inlineFormCustomSelectPref2').change(function () {
        let crust = $('#inlineFormCustomSelectPref2 option:selected').val();
        let crispy = 200;
        let fluffy = 250;
        let gluttenFree = 300;
        if (crust == 'crispy') {
            return (crispy);
        }
        if (crust == 'fluffy') {
            return (fluffy);
        }
        if (crust == 'gluttenFree') {
            console.log(gluttenFree);
        }

    });
    // pizzaCrust();
    // };
    // console.log(pizzaCrust)

    $('#chicken').click(function () {
        let chicken = 150;
        console.log(chicken);
    });

    $('#bacon').click(function () {
        let bacon = 150;
        console.log(bacon);
    });

    $('#sausage').click(function () {
        let sausage = 150;
        console.log(sausage);
    });

    $('#mushrooms').click(function () {
        let mushrooms = 100;
        console.log(mushrooms);
    });

    $('#greenPeppers').click(function () {
        let greenPeppers = 100;
        console.log(greenPeppers);
    });
    let toppings = [chicken + bacon + sausage + mushrooms + greenPeppers];


    let howMany = $('#howMany').val();
    console.log(howMany);


    */


    // let bacon = 150;
    // let sausage = 150;
    // let mushrooms = 100;
    // let greenPeppers = 100;
    // if (chicken = true) {
    //     alert(toppings);
    // });
    // let toppings = chicken + bacon + sausage + mushrooms + greenPeppers;
    // $.each($("input[name='top']:checked"), function () {
    //     toppings.push($(this).val());
    // });
    // alert("The toppings on your pizza will be: " + toppings);


    // $('#chicken').change(function () {
    //     let topping = $('#chicken option:check').val();
    //     let chicken = 150;
    //     let bacon = 150;
    //     let sausage = 150;
    //     let mushrooms = 100;
    //     let greenPeppers = 100;
    //     if (chicken == true) {
    //         alert(chicken);
    //     }
    //     if (size == 'Medium') {
    //         console.log(medium);
    //     }
    //     if (size == 'Small') {
    //         console.log(small);
    //     }

    // });



});


    // let size = ['large', 'medium', 'small'];
    // let crust = ['crispy', 'stuffed', 'glutenFree']
    // let toppings = ['chicken', 'bacon', 'sausage', 'mushrooms', 'greenPeppers']
    // let pizza = [size + crust[2] + toppings[1]]
    // price = function () {

    //     alert(size);

    // };
    // alert(price);



    // var result = [{"id":"1","price":"20.46"},{"id":"2","price":"40.00"}]
    // var userinputid = 1;

    // result.forEach(function(e, index){
    //   if(userinputid == result[index].id){
    //     alert(result[index].price);
    //   };
// });






//This will calculate the total amount
// let total = ingredients.reduce((currentTotal, ingredint) => {
//     return ingredint.price + currentTotal
// }, 0)
// console.log(Pizza)