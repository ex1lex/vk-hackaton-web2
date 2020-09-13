$(document).ready(function () {
  var retrievedObject = localStorage.getItem("feesList");

  feesList = JSON.parse(retrievedObject);

  console.log("retrievedObject: ", JSON.parse(retrievedObject));

  var mainText = document.getElementById("main-text");

  for (var obj in feesList) {
    let parent = document.querySelector("#content-container");
    let child = document.querySelector("#fee-container");

    let contains = parent.contains(child);

    if (!contains) {
      mainText.innerHTML = "";
      let ul = document.createElement("ul");
      ul.className = "col-12 fee-container row";
      ul.id = "fee-container";
      parent.append(ul);
    }

    var img = "data:image/png;base64," + feesList[obj].img;

    var ul = document.getElementById("fee-container");

    let li = document.createElement("li");
    li.className = "col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 fee";
    li.innerHTML =
      "<h1 id='label-name'>" +
      feesList[obj].name +
      "</h1> <button data-toggle='modal' class='btn' data-target='#modal-" +
      obj +
      "'> Подробнее </button> <div class='modal fade' id='modal-" +
      obj +
      "' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true' > <div class='modal-dialog modal-dialog-centered' role='document'> <div class='modal-content'> <div class='modal-body'> <img src='" +
      img +
      "' alt='' id='modal-img' class='modal__img' /> <h2 class='modal__name' id='modal-name'>" +
      feesList[obj].name +
      "</h2> <span id='modal-author' style='font-family: 'SFP Thin'; font-family: 12px' >" +
      feesList[obj].author +
      "</span ><br /> <span id='modal-summ' style='font-family: 'SFP Thin'; font-family: 12px' >Собрано 3300 &#8381; из " +
      feesList[obj].summ +
      "</span > <div> <progress id='modal__progressbar' value='30' max='100' ></progress> </div> <p id='modal-about' style='font-family: 'SFP Medium'; font-family: 12px' >" +
      feesList[obj].about +
      "</p> </div> <div class='modal-footer' style='text-align: center'> <a href='http://www.vk.com' target='_blank' class='btn' style='width: 100%' >Опубликовать на стене</a > <button type='button' class='btn' data-dismiss='modal' style=' padding: 8px 16px; background: #e5ebf1; border-radius: 10px; color: #55677d; text-decoration: none; width: 100%; ' > Закрыть </button> </div> </div> </div> </div>";
    ul.append(li);
  }
});

function getRandomID(min, max) {
  var int = Math.floor(Math.random() * (max - min + 1)) + min;

  return int.toString(36);
}

function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  var dataURL = canvas.toDataURL("image/png");

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
