const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
    <div class="box">
      ${event.key === " " ? "Space" : event.key}
      <span>event.key</span>
    </div>
    <div class="box">
      ${event.keyCode}
      <span>event.keyCode</span>
    </div>
    <div class="box">
      ${event.code}
      <span>event.code</span>
    </div>
  `;
});
