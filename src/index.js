import getAllScoresData from './modules/getServerData.js'; 
import postNewScore from './modules/postNewScore';
import './style.css';

// refresh button
const refreshScoresBtn = document.querySelector('.refresh-scores');

// Form fields
const leaderName = document.querySelector('.leader-name');
const leaderScore = document.querySelector('.leader-score');
const leaderForm = document.querySelector('.leader-form');

// form submit button event
leaderForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  await postNewScore(leaderName.value, parseInt(leaderScore.value, 10));
  leaderName.value = '';
  leaderScore.value = '';
});

refreshScoresBtn.addEventListener('click', () => {
  getAllScoresData();
});

getAllScoresData();


