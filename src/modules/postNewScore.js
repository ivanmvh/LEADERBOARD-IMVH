const postNewScore = async (user = '', score = 0, gameId = 'Q4cft8wpKdezWg6GZ6qV') => {
  const leader = {
    user,
    score,
  };

  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, {
    method: 'POST',
    body: JSON.stringify(leader),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => data.result);
};

export default postNewScore;