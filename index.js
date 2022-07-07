const { parse } = require('csv-parse');
const fs = require('fs')


const habitablePlanet = []
const exoPlanetList = []

const isHabitablePlanet = (planet) => {
    if (planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6) {
        return planet
    }
}

// will create event emitter
const checkKeplerPlanets = () => {
    fs.createReadStream('./kepler_data.csv')
    // pipe connects a readable stream source to a writeable stream destination which takes in data
    .pipe(parse({
        comment: "#",
        columns: true
    }))
    .on('data', (data) => {
    if (isHabitablePlanet(data)){
        habitablePlanet.push(data);
    }})
    .on('error', (err) => {
        console.log(err)
    })
    .on('end', () => {
        console.log(habitablePlanet.map((planet) => {
            return planet['kepler_name']
        }))
        console.log("Done parsing Kepler data \n")
        console.log(`The total number of habitable planets found is: ${habitablePlanet.length}`)
})
}


const comparePlanets = () => {
    fs.createReadStream('./exoplanet.eu_catalog.csv')
    .pipe(parse({
        // comment: "#",
        columns: true
    }))
    .on('data', (data) => {
        exoPlanetList.push(data)
    })
    .on('error', (err) => {
        console.log(err)
    })
    .on('end', () => {
        console.log(exoPlanetList.map((exo) => {
            return exo['name']
            // create a loop to check if any of the Kepler exoplanets are in the 
            // other exoplanet list
        }))
    })
}

checkKeplerPlanets()
comparePlanets()