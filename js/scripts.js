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

function Pizza() {
    this.total = 0;
    this.count = 1;
    this.size = new PizzaSize();
    this.crust = new PizzaCrust();
    this.toppings = [];
}

Pizza.prototype.addTopping = function (newToppings) {
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

function initPizzaSizes() {
    $('#divPizzaSize').html();
    myPizzaSizes.forEach(function (pizzaSize) {//set value as json string
        let radioButton = '<div class="form-check form-check-inline">'
            + '<input class="form-check-input" type="radio" name="pizza-size" value=' + JSON.stringify(pizzaSize) + ' >'
            + '<label class="form-check-label" for="pizza-size">' + pizzaSize.displayName + '</label>'
            + '</div >';

        $('#divPizzaSize').append(radioButton);
    });
}

function initPizzaCrusts() {
    $('#divPizzaCrust').html();
    myPizzaCrusts.forEach(function (pizzaCrust) { //set value as json string
        let radioButton = '<div class="form-check form-check-inline">'
            + '<input class="form-check-input" type="radio" name="pizza-crust" value=' + JSON.stringify(pizzaCrust) + ' >'
            + '<label class="form-check-label" for="inlineRadio1">' + pizzaCrust.displayName + '</label>'
            + '</div >';

        $('#divPizzaCrust').append(radioButton);
    });
}

function initPizzaToppings() {
    $('#divPizzaToppings').html();
    myPizzaToppings.forEach(function (topping) {//set value as json string
        let checkBox = '<div class="form-group form-check form-check-inline">'
            + '<input type="checkbox" class="form-check-input" name="pizza-toppings" value=' + JSON.stringify(topping).toString() + '>'
            + '<label class="form-check-label" for="pizza-toppings">' + topping.displayName + '</label>'
            + '</div>';

        $('#divPizzaToppings').append(checkBox);
    });
}

function addNewPizza() {
    let pizzaSize = $('input[name="pizza-size"]:checked').val(); //in json string format
    let pizzaCrust = $('input[name="pizza-crust"]:checked').val();//in json string format
    let noOfPizzas = $('#txtHowMany').val();

    if (pizzaSize == undefined) {
        console.log('Please Select Size');
        return false;
    }
    if (pizzaCrust == undefined) {
        console.log('Please Select Crust');
        return false;
    }

    let myPizza = new Pizza();
    myPizza.size = JSON.parse(pizzaSize);//parse String back to PizzaSize object
    myPizza.crust = JSON.parse(pizzaCrust);//parse String back to PizzaCrust object

    let pizzaToppings = [];
    $('input[name="pizza-toppings"]:checked').each(function () {
        let jsonValue = $(this).val();
        console.log('jsonValue: ', jsonValue);
        pizzaToppings.push(JSON.parse(jsonValue)); //parse String back to PizzaTopping object
    });

    myPizza.addTopping(pizzaToppings);

    console.log('myPizza: ', myPizza);
    if (noOfPizzas == '' || noOfPizzas == undefined) {
        myPizza.count = 1;
    } else {
        myPizza.count = noOfPizzas;
    }

    myOrder.addPizza(myPizza);
    refreshPizzaTable();
    resetForm();
}

function resetForm() {
    console.log('Resseting form');
    $('input[name="pizza-size"]:checked').prop("checked", false);
    $('input[name="pizza-crust"]:checked').prop("checked", false);
    $('input[name="pizza-toppings"]:checked').prop("checked", false);
    $('#txtHowMany').val('1');
}

//place order
function placeOrder() {
    if (myOrder.pizzas.length < 1) {
        alert('Please add a pizza to proceed');
        return false;
    }

    $('#divPizzaOptions').hide();
    $('#divOrderDetails').show();
}

$(document).ready(function () {

    $('#divOrderDetails').hide();
    $('#delivery').hide();

    refreshPizzaTable();
    initPizzaSizes();
    initPizzaCrusts();
    initPizzaToppings();

    $('#delivery-check').click(function () {
        $('#delivery').toggle();
        myOrder.deliver = $(this).is(':checked');
        myOrder.calculateTotal();
        $('#tablePizzasTotal').html(myOrder.total);
        console.log('myOrder.deliver : ', myOrder.deliver);
    });

});
