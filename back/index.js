const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;

// Middleware
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({
    gameList: [
      { id: 1, mainTitle: "APEX", subTitle: "에이팩스" },
      { id: 2, mainTitle: "Audition", subTitle: "오디션" },
      { id: 3, mainTitle: "Brawl Stars", subTitle: "브롤 스타즈" },
      { id: 4, mainTitle: "CS:GO", subTitle: "카운터 스트라이크" },
      { id: 5, mainTitle: "Cyphers", subTitle: "사이퍼즈" },
      { id: 6, mainTitle: "DUNGEON & FIGHTER", subTitle: "던전 앤 파이터" },
      { id: 7, mainTitle: "For Honors", subTitle: "포 아너" },
    ]
  });
});

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING AT ${PORT}`);
});
