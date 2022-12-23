const showData = (data) => {
  data = [
    {user: "ivan",
     score: "100"
    },
    {user: "ivan",
     score: "100"
    },
    {user: "ivan",
     score: "100"
    }
  ]                                     
  const scoresContainer = document.querySelector('.scores-container');
  scoresContainer.innerHTML = '';
  for (let i = 0; i < 10; i += 1) {
    const newScore = document.createElement('li');
    newScore.innerHTML = `${i + 1}. ${data[i].user}: ${data[i].score}`;
    newScore.classList = 'scores';
    scoresContainer.appendChild(newScore);
  }
};

export default showData;