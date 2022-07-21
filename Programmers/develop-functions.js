function solution(progresses, speeds) {
  var answer = [];
  //뒤에 기능들은 완성이 되어도 맨 앞에 기능이 완성될 때 배포될 수 있다.
  //배포가 될 때(맨 앞 기능이 배포가 될 때) 몇 개 기능이 배포되는가(뒤에꺼 같이 되니까)
  //먼저 다 되어도 먼저 나갈 수 없다 -> 스택 사용
  //며칠이 걸리는 지는 알 필요가 없다.

  //while문 돌면서 각 요소의 speed를 progress에 더해준다.
  while (progresses.length > 0) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    //그러다가 맨 앞 인덱스의 progress가 100을 넘을 때
    if (progresses[0] >= 100) {
      //뒤에 인덱스들 중 100을 넘은 요소들이랑 같이 아웃시킨다.
      //100을 안 넘은 요소가 있으면 그 뒤 요소가 100을 넘어도 그 전까지만 아웃
      let deployPerOnce = 0;
      for (let i = 0; i < progresses.length; i++) {
        if (progresses[i] >= 100) {
          deployPerOnce += 1;
        } else {
          break;
        }
      }

      progresses.splice(0, deployPerOnce);
      //이 부분 안해줘서 테케 통과 못했었음
      //progresses와 speeds는 같이 제거되어야 한다.
      speeds.splice(0, deployPerOnce);
      answer.push(deployPerOnce);
    }
  }

  //아웃시킨 개수를 answer배열에 push한다.
  //progresses 배열의 length가 0이 될 때 까지 반복한다.
  //반복문이 끝나면 answer을 리턴

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
