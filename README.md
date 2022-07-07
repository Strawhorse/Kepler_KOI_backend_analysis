# Kepler_KOI_backend_analysis

Using Node.js to analyse data from Kepler telescope to identify exoplanets; imported .csv file

Identified exoplanets capable of supporting life by criteria found at: https://www.centauri-dreams.org/2015/01/30/a-review-of-the-best-habitable-planet-candidates/

Created a stream from the csv file and piped the output of the stream to the csv-parser to turn the planets into objects in an array. Filtered through this parsed object according to criteria in above weblink

Found 8 exoplanets potentially capable of supporting life

** Additional work to do to check the 8 planets against another list from: https://phl.upr.edu/data
