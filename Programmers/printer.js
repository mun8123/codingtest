function solution(priorities, location) {
  var answer = 0;
  //현재 인덱스와 우선순위가 같이있는 배열(큐 대신) 만들기
  //큐 맨 앞 요소랑 priorities를 정렬한 배열의 맨 앞의 요소랑 비교
  //여기서 priorities의 순서는 그저 우선순위가 높은 순일 뿐 그 외에는 의미가 없다
  //큐가 실제로 인쇄 대기목록 역할
  const queue = priorities.map((priority, i) => [priority, i]);
  priorities.sort((a, b) => b - a);

  let count = 0;

  while (queue.length > 0) {
    //큐 맨 앞에거랑 우선순위 배열 맨 앞에꺼 비교

    const current = queue[0];

    //큐 맨앞에꺼가 젤 크면 출력
    //큐 맨 앞에꺼가 현재 젤 큰거보다 작으면 맨 뒤로 보내기
    console.log(current[0], priorities[count]);
    if (current[0] < priorities[count]) {
      queue.push(queue.shift());
    } else {
      queue.shift();
      count += 1;

      if (current[1] === location) return count;
    }
  }

  return answer;
}
