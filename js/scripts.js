$(document).ready(function () {
    // function Pizza(pizzasize, crust, toppings, delivery) {

    $('#delivery').hide();
    $('#delivery-check').click(function () {
        $('#delivery').toggle();
    });

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