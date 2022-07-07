const { parse } = require('csv-parse');
const fs = require('fs')


const habitablePlanet = []

const isHabitablePlanet = (planet) => {
    if (planet['koi_disposition'] === 'CONFIRMED') {
        return planet
    }
}

// will create event emitter
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
        console.log(habitablePlanet)
        console.log("Done parsing Kepler data")
})

