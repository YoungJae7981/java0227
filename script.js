const days = ["월요일", "화요일"];

days.push("수요일", "목요일", "금요일", "토요일", "일요일");
// push(): 배열의 마지막에 새로운 요소를 추가한 후, 변경된 배열의 길이를 반환

days.pop();
days.pop();
days.pop();
// pop(): 배열의 마지막 요소를 제거한 후, 제거한 요소를 반환
// 배열의 마지막 요소를 제거

const days2 = ["금요일", "토요일", "일요일"];

const result = days.concat(days2);
// concat(): 두 개의 문자열을 하나의 문자열로 만들어주는 역활을 하는 함수

const 휴일 = result.slice(5);
// slice(): 아무리 많이 호출해도 원본 배열의 값은 절대 건드리지 않는다.(원본 보존)
// slice(5) -> 6번째 배열부터 반환
//myPrint(휴일);
//myPrint(result); //(원본 보존)

const result1 = result.splice(0, 2);
// slice(): 배열로 부터 특정 범위를 복사한 값들을 담고 있는 새로운 배열을 만드는데 사용
// 주의할 점은 첫번째 인자로 넘어온 시작 인덱스가 가리키는 값은 포함하지만,
// 두번째 인자로 넘어온 종료 인덱스가 가리키는 값은 포함하지 않는다.
// myPrint(result1);
const result2 = result.splice(0, 5);
// myPrint(result2);
// myPrint(result); // 없음(원본 훼손)

const arr = [1, 2, 3, 4, 5];
// const output = arr.map((a) => a * 50);
// const output = arr.map(function (a) {
//   return a * 2;
// });
function Multi(a) {
  return a / 20;
}
const output = arr.map(Multi);

myPrint(output);

const 객체배열 = [
  //객체 다섯개가 있는 함수
  { count: 1 },
  { count: 2 },
  { count: 3 },
  { count: 4 },
  { count: 5 },
];
const output2 = 객체배열.map((a) => a.count * 250);

console.log(output2);

const 학생기록 = [
  { name: "김가", score: 80 },
  { name: "이가", score: 100 },
  { name: "박가", score: 70 },
  { name: "최가", score: 90 },
  { name: "송가", score: 60 },
];

const output4 = 학생기록.filter(function (a) {
  if (a.score >= 80) {
    return true;
  }
});

const output3 = 학생기록.filter((a) => a.score >= 80);
console.log(output3);

myPrint(output3);
myPrint(output4);
// 필터는 맵의 역할을 대신할 수 없다.
// 필터는 뽑아서 줌

function myPrint(arr) {
  const p = document.createElement("p");
  // p를 만들어서 변수 p에 담음
  p.innerHTML = arr;
  // arr를  p.innerHTML에 담음
  document.body.appendChild(p);
  // body 요소의 끝에 붙임 appendChild(여기서 들어가는거: 새로운 단락 요소)
}
