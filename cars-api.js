const cars = document.querySelector('.cars');
const carTemplate = document.querySelector('.carTemplate');
var car_Template = Handlebars.compile(carTemplate.innerHTML)

const colors = document.querySelector('.colors');
const makes = document.querySelector('.makes');




document.addEventListener("DOMContentLoaded", function () {

    axios
        .get(`http://api-tutor.herokuapp.com/v1/cars`)
        .then(result => {
            const car = result.data;
            console.log(car);
            let html = car_Template({
                carslist: car
            });
            cars.innerHTML = html;
          
});

axios
        .get(`https://api-tutor.herokuapp.com/v1/colors`)
        .then(result => {
            const thecolor = result.data;
            console.log(thecolor);
            let html = car_Template({
                carslist: thecolor
            });

            colors.innerHTML = html;
          
});


axios
        .get(`https://api-tutor.herokuapp.com/v1/makes`)
        .then(result => {
            const make = result.data;
            console.log(make);
            let html = car_Template({
                carslist: make
            });
           colors.innerHTML = html;
          
});

})