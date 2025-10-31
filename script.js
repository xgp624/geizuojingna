const tips = [
  "多喝热水，保持微笑～",
  "早点休息，元气满满！",
  "放松一下，不要太累哦！",
  "相信自己，你很棒！",
  "注意坐姿，保护颈椎！",
  "天冷了，多穿衣服～",
  "喝点水，润润嗓子！",
  "阳光正好，出去走走吧～",
  "金榜题名",
  "期待下一次见面",
  "顺顺利利",
  "多喜乐，长安宁"
];

const colors = ["#FFB6C1", "#FFD700", "#90EE90", "#ADD8E6", "#FFA07A", "#E6E6FA", "#FFC0CB", "#F0E68C"];

function createTip() {
  const tip = document.createElement("div");
  tip.className = "tip";
  tip.textContent = tips[Math.floor(Math.random() * tips.length)];
  tip.style.background = colors[Math.floor(Math.random() * colors.length)];

  const x = Math.random() * (window.innerWidth - 250);
  const y = Math.random() * (window.innerHeight - 60);
  tip.style.left = `${x}px`;
  tip.style.top = `${y}px`;

  document.body.appendChild(tip);
}

// 每 20ms 弹出一个新提示框（约等于 0.02 秒）
let count = 0;
const interval = setInterval(() => {
  createTip();
  count++;
  if (count >= 1000) clearInterval(interval);
}, 20);
