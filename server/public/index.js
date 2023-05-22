import { CircleData } from "./circleData.js";
import { Item } from "./item.js";

function game(item) {
  var next = items.getNext(item);
  if (item === comCurrentItem) {
    alert("비겼습니다");
  } else if (next === comCurrentItem) {
    alert("졌습니다");
  } else {
    alert("이겼습니다");
  }
  clearInterval(setTime);
  startEl.removeAttribute("disabled");
  items.getAll().forEach(function (item) {
    item.disable(true);
  });
}

var items = new CircleData([
  new Item("가위", game),
  new Item("바위", game),
  new Item("보", game),
]);

var startEl = document.getElementById("start");
var comEl = document.getElementById("com");
var comCurrentItem = items.getAll()[0];
var itemButtonEl = document.getElementById("item-buttons");
var setTime;

//항목 렌더링
items.getAll().forEach(function (item) {
  item.render(itemButtonEl);
  item.disable(true);
});

//시작 클릭이벤트 핸들링
startEl.onclick = function () {
  startEl.setAttribute("disabled", true);
  items.getAll().forEach(function (item) {
    item.disable(false);
  });

  setTime = setInterval(() => {
    comCurrentItem = items.getNext(comCurrentItem);
    comEl.textContent = comCurrentItem.name;
  }, 100);
};
