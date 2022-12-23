const showData = async (data) => {                    
  const scoresContainer = document.querySelector('.scores-container');
  scoresContainer.innerHTML = '';
  for (let i = 0; i < 15; i += 1) {
    const newScore = document.createElement('li');
    newScore.innerHTML = `${i + 1}. ${data[i].user}: ${data[i].score}`;
    newScore.classList = 'scores';
    scoresContainer.appendChild(newScore);
  }
};

export default showData;