import showData from './showData';

const getAllScoresData = async (id = 'Q4cft8wpKdezWg6GZ6qV') => {
  await fetch(`http://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`)
    .then((response) => response.json()) 
    .then((data) => { 
      const scoresArr = data.result;
      const scoresArrSorted = scoresArr.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
      showData(scoresArrSorted);
    });
};

export default getAllScoresData;