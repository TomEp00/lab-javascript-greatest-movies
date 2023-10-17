// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);
    return directors;
}


const allDirectors = getAllDirectors(movies);

console.log(allDirectors);



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    const stevenSpielbergDramas = moviesArray.filter((movie) => {
      return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    });
  
    
    return stevenSpielbergDramas.length;
  }
  
  
  function validateHowManyMoviesFunction(moviesArray) {
    
    const resultType = typeof howManyMovies(moviesArray);
    if (resultType !== "number") {
      console.error("The function should return a number, but it returned", resultType);
    }
  
  
    if (howManyMovies([]) !== 0) {
      console.error("The function should return 0 for an empty array.");
    }
  
   
    if (howManyMovies([{ director: "Christopher Nolan", genre: ["Drama"] }]) !== 0) {
      console.error("The function should return 0 if none of the movies were directed by Steven Spielberg.");
    }
  
  
    if (howManyMovies(moviesArray) !== 4) {
      console.error("The function should count only drama movies, and there are 4 drama movies in the sample data.");
    }
  
  
    if (howManyMovies([
      { title: "Movie 1", director: "Steven Spielberg", genre: ["Drama"] },
      { title: "Movie 2", director: "Steven Spielberg", genre: ["Drama"] },
      { title: "Movie 3", director: "Steven Spielberg", genre: ["Comedy"] },
    ]) !== 2) {
      console.error("The function should return 2 when there are only 2 Steven Spielberg movies in the array.");
    }
  
    console.log("All requirements are met.");
  }
  
  
  validateHowManyMoviesFunction();
    



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0){

  return 0;
}
  const sumOfScores = moviesArray.reduce((total, score) => total + score, 0);
  const averageScore = sumOfScores / moviesArray.length;
  return parseFloat(averageScore.toFixed(2));
}

const moviesArray = [8, 8];
const average = scoresAverage(moviesArray);
console.log(average);

const emptyArray = [];
const averageEmpty = scoresAverage(emptyArray);
console.log(averageEmpty);


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => movie.genre === 'Drama');
  console.log('Filtering: ${movie.title}');
  return movie.genre === 'Drama';

  if (dramaMovies.length === 0){
    return 0;
  }
  const dramaMoviesScore = dramaMovies.map(movie => movie.score);
  const totalScore = dramaMoviesScore.reduce((accumilate, score) => accumilate + score, 0);
  const averageScore = totalScore / dramaMoviesScore.length;

  // I found  explanation on "parseFloat" that help me here https://www.geeksforgeeks.org/how-to-parse-float-with-two-decimal-places-in-javascript/
  // And of corse in the programer bible https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
  return parseFloat(averageScore.toFixed(2));

}








// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMvies = [...movies];
// from those two websides I took the .localeCompere
//https://www.w3schools.com/jsref/jsref_localecompare.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
  sortedMvies.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompere(b.title)
    }
    
    return a.year - b.year;
  }) ;
  
  return sortedMvies;
}

function dramaMoviesAverage(movies) {
  const dramaMovies = movies.filter(movie =>movie.genre.includes('Drama'));
  if (dramaMovies.length === 0){
    return 0;
  }
  const totalRating = dramaMovies.reduce((sum, movie) => sum + movie.rating, 0);
  const averageRating = totalRating / dramaMovies.length;

  return parseFloat(averageRating.toFixed(2));
};






// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const copyOfMovies = [...moviesArray]; 

    copyOfMovies.sort((a, b) => a.title.localeCompare(b.title));
    
    const slicedArray = copyOfMovies.slice(0, 20);

    const titlesArray = slicedArray.map(movie => String(movie.title));

    return titlesArray;
}





// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const modifiedMovies = moviesArray.map(movie => {
    const durationParts = movie.duration.split(' ');

    const hours = parseInt(durationParts[0], 10) || 0;

    const minutes = parseInt(durationParts[1], 10) || 0;

    const durationInMinutes = hours * 60 + minutes;
    return {...movie, duration: durationInMinutes};
  });
  return modifiedmoviesArray;
};






// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
