const carTemplate = document.querySelector('.carTemplate');
const colorTempplate = document.querySelector('.colorTemplate');
const modelTempplate = document.querySelector('.modelTemplate');
const button = document.querySelector('.buttontype');

const themodel= document.querySelector('.model');
const thecolor= document.querySelector('.color');


var car_Template = Handlebars.compile(carTemplate.innerHTML);
var colorTemplate = Handlebars.compile(colorTempplate.innerHTML);
var modelTemp = Handlebars.compile(modelTempplate.innerHTML);

const cars = document.querySelector('.cars');
const colors = document.querySelector('.colors');
const model = document.querySelector('.model');
const datafilter = document.querySelector('.filterColor');


document.addEventListener("DOMContentLoaded", function () {
    
    axios
        .get(`https://api-tutor.herokuapp.com/v1/cars`)
        .then(result => {
            const car = result.data;
            let html = car_Template({
                carslist: car
            });
            cars.innerHTML = html;

        });

    axios
        .get(`https://api-tutor.herokuapp.com/v1/colors`)
        .then(result => {
            const thecolor = result.data;
            let html = car_Template({
                carslist: thecolor
            });
            colors.innerHTML = html;

        });


    axios
        .get(`https://api-tutor.herokuapp.com/v1/makes`)
        .then(result => {
            const make = result.data;
            let html = car_Template({
                carslist: make
            });
            colors.innerHTML = html;

        });


});


button.addEventListener("click", function () {
    console.log(themodel.value,thecolor.value);
    if (themodel && thecolor) {
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/make/${themodel.value}/color/${thecolor.value}`)
            .then(result => {
                const model = result.data;
                console.log(model);
                let html = car_Template({
                    carslist: model
                });
                cars.innerHTML = html;

            });
    }

});