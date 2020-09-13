$(document).ready(function () {
  var retrievedObject = localStorage.getItem("feesList");

  feesList = JSON.parse(retrievedObject);

  console.log("retrievedObject: ", JSON.parse(retrievedObject));

  var title = document.getElementById("exampleModalLongTitle");

  for (var obj in feesList) {
    console.log(feesList[obj].img);
    let parent = document.querySelector("#content-container");
    let child = document.querySelector("#fee-container");

    let contains = parent.contains(child);

    if (!contains) {
      let ul = document.createElement("ul");
      ul.className = "col-12 fee-container row";
      ul.id = "fee-container";
      parent.append(ul);
    }

    var ul = document.getElementById("fee-container");

    let li = document.createElement("li");
    li.className = "col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 fee";
    li.innerHTML =
      "<h1> Тестовый сбор</h1> <button data-toggle='modal' data-target='#exampleModalCenter'> Подробнее </button> <div class='modal fade' id='exampleModalCenter' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true' > <div class='modal-dialog modal-dialog-centered' role='document'> <div class='modal-content'> <div class='modal-header'> <h5 class='modal-title' id='exampleModalLongTitle'> Modal title </h5> </div> <div class='modal-body'>///</div> <div class='modal-footer'> <button type='button' class='' data-dismiss='modal'> Закрыть </button> </div> </div> </div> </div>";
    ul.append(li);
  }

  //title.innerHTML =
});

function getRandomID(min, max) {
  var int = Math.floor(Math.random() * (max - min + 1)) + min;

  return int.toString(36);
}
