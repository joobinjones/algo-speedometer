# An algorithm timing suite

Hi! Welcome and thank you for viewing this repo. A few of my colleagues and I were testing the speed of our algorithms, and we ended up writing this suite that I found to be fairly useful. So I decided to share it.

## What does this do..?

This suite will time and report the averages of your two algorithms' run times. By default, the suite runs each algorithm 100 times.

## Getting started

1. Clone
2. Run `npm i`
3. From here you have a bunch of options. You can:<br>
   - Demo the suite by running `npm start` (the data is provided in src/loadData & data.json when the script is run)
   - Paste in two algos to `algo1` and `algo2`. You will have to change the functionality of src/loadData to provide the kind of data needed for your algos.
4. To use this suite with data other than an array of strings (whatever is appropriate for the problem/algos you are testing), you will need to load in the data you need. Pay close attention to the areas in src/loadData and src/averages where the data is loaded and used. Change what you need to. For convenience, faker.js is provided.

## Usage

- Insert your algorithms in `src/algo1.js` and `src/algo2.js` between the start and end times. They look like this:<br>
  `const start = Date.now();`<br>
  `const end = Date.now() - start;`
- Keep the return statements the way they are unless you are unit testing your algorithms before you time them. They are returning the runtime.
- Run the command `npm start`. The command takes two arguments: the first is the number of times each algorithm will run, the second is number of data points you wish to iterate over.

## Examples:<br>

`npm start 10 1000`<br>
runs each algorithm 10 times with a data set of 1,000 elements.<br><br>
`npm start` <br>uses default arguments of 100 iterations over 10,000 elements.

## Contributors

- [Brady Christensen](https://github.com/brady-ch)
- [Austin Mckee](https://github.com/hoostin)
- [Jonathon Hopkins [Alcor]](https://github.com/AlcorSalvador)
- [Grey Elerson](https://github.com/elersong)

## Packages Used

- [faker.js](https://github.com/marak/Faker.js/)
- [CLI-Progress](https://www.npmjs.com/package/cli-progress)
