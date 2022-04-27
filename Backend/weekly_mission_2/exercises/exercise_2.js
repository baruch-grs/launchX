const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: [
      "js",
      "c#"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true
      }
    }
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: [
      "js"
    ],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: [
      "elixir"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  }
];

explorers.forEach((explorer) => console.log(explorer.name));

explorers.forEach((explorer) => console.log(explorer.stack)); // Prints the stack array
// Prints the content of the stach array
explorers.forEach((explorer) => {
  explorer.stack.forEach((tech) => console.log(tech));
});

const stackList = explorers.map((explorer) => explorer.stack);
console.log(stackList);

const filteredList = explorers.filter((explorer) => explorer.stack.includes('js'));
console.table(filteredList);

const cdmxExplorer = explorers.find((explorer) => explorer.city === 'CDMX');
console.table(cdmxExplorer);

const sumOfExercises = explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0);
console.log(`Ejercicios completados: ${sumOfExercises}`);

const frontendFinished = explorers.some((explorer) => explorer.missions.frontend.exercisesFinished === true);
console.log(`Frontend terminado: ${frontendFinished}`);

