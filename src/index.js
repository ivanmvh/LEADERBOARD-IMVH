import getAllScoresData from './modules/getServerData.js'; 
import './style.css';


const refreshScoresBtn = document.querySelector('.refresh-scores');

refreshScoresBtn.addEventListener('click', () => {
  getAllScoresData();
});

getAllScoresData();


