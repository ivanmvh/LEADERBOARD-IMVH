/* import getLeadersData from '../cuarentena/getServerData';
import newLeader from '../cuarentena/postNewScore';
import quoteGenerator from './modules/quoteGenerator'; */
import showData from '../src/modules/showData';
import './style.css';
/* Selectors */
/*
const leaderNameInput = document.querySelector('.leader-name');
const leaderScoreInput = document.querySelector('.leader-score');
const leaderForm = document.querySelector('.leader-form');
const refreshBtn = document.querySelector('.refresh');
*/
/* Array */

/*
refreshBtn.addEventListener('click', () => {
  getLeadersData();
});

leaderForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  await newLeader(leaderNameInput.value, parseInt(leaderScoreInput.value, 10));
  leaderNameInput.value = '';
  leaderScoreInput.value = '';
});
*/
/* quoteGenerator(); */
/*
getLeadersData();
*/

showData();
