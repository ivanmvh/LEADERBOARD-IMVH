const showData = async (data) => {
  const scoresContainer = document.querySelector('.scores-container');
  scoresContainer.innerHTML = '';
  const titTab = document.createElement('div');
  titTab.innerHTML = `<div class="tit">
    <p class="col-index">Pos. </p>
    <p class="col-name">Leader Name </p>
    <p class="col-score">Score</p>    
  </div>`;
  scoresContainer.appendChild(titTab);

  for (let i = 0; i < 15; i += 1) {
    const newScore = document.createElement('li');
    newScore.innerHTML = `<li class="score">
    <p class="col-index">${i + 1} </p>
    <p class="col-name">${data[i].user} </p>
    <p class="col-score">${data[i].score}</p>    
    </li>`;
    newScore.classList = 'scores';
    scoresContainer.appendChild(newScore);
  }
};

export default showData;