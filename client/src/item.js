//가위바위보 공통(객체지향)
export function Item(name, onClick) {
  this.name = name;
  //동적으로 버튼 만들기
  this.buttonEl = document.createElement("button");
  this.buttonEl.textContent = name;

  //클릭 이벤트 핸들링(가위바위보 동작하기)
  //함수를 호출하는 애가 this라서 여기서 this.key 를 하면 buttonE1을 잡는다.
  var _self = this;
  this.buttonEl.onclick = function () {
    onClick(_self);
  };
}
Item.prototype.render = function (parentEl) {
  parentEl.append(this.buttonEl);
};
Item.prototype.disable = function (value) {
  if (value) {
    this.buttonEl.setAttribute("disabled", true);
  } else {
    this.buttonEl.removeAttribute("disabled");
  }
};
