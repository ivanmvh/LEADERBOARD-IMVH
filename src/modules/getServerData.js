import showData from './showData';

const getAllScoresData = async (id = '0UlnJitfqGQD5uy8eJ6a') => {
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`)
    .then((response) => response.json()) 
    .then((data) => { 
      const scoresArr = data.result;
      const scoresArrSorted = scoresArr.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
      showData(scoresArrSorted);
    });
};

export default getAllScoresData;