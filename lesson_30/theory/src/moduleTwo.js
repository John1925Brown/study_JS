export default function moduleTwo() {
  setInterval(() => {
    document.body.innerHTML = Date();
  }, 1000);
}

// module.exports = moduleTwo; // Показываем что именно экспортировать
