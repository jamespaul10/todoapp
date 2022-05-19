
document.getElementById("btn").addEventListener("click", function(e) {
  const item = document.querySelector(".input").value;
  const itemNo = document.createTextNode(item);
  const list = document.createElement("li");
  list.setAttribute("class", "item");
  list.appendChild(itemNo);
  document.getElementById("items").appendChild(list);
  document.querySelector(".input").value = "";

  const currentTask = document.querySelectorAll(".item");

  for (let i = 0; i < currentTask.length; i++) {
    currentTask[i].onclick = function() {
      currentTask[i].remove();
    }
  }

});
