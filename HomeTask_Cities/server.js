express = require('express');
app = express();

var cityRouter = express.Router();

var cities = [
    {'name': 'Oslo', 'population': 618683},
    {'name': 'Amsterdam', 'population': 779808},
    
]


var getCity = function(cityName){
    for(var i in cities){
        if(cities[i].name === cityName ){
            return cities[i];
        }
    }
    return null;
}

cityRouter.get('/:city', function(req, res){
    // res.sendStatus(200);
    console.log("Looking for city " + req.params.city);
    city = getCity(req.params.city);
    if(city){
        res.send(city.population.toString());
    } else{
        res.sendStatus(404);
    }
});

app.use('/cities', cityRouter);

var cities = [
    {'name': 'Oslo', 'population': 618683},
    {'name': 'Amsterdam', 'population': 779808},
    
]

app.listen(8080);