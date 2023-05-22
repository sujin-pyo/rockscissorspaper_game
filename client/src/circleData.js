//가위-바위-보 동그랗게 연결되어 있다고 가정
//나보다 앞인 항목한테는 지고, 뒤인 항목한테는 이긴다. 같으면 비긴다.
export function CircleData(items) {
  this.items = items;
}
CircleData.prototype.getAll = function () {
  return this.items;
};
CircleData.prototype.getNext = function (item) {
  var index = this.items.indexOf(item);
  //이 아이템의 다음 것을 줘.
  var next = this.items[index + 1];
  //인덱스 넘어가면 undefined니까 ?연산자
  return next ? next : this.items[0];
};
