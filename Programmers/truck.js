function solution(bridge_length, weight, truck_weights) {
  //들어온 대로 나가니까 큐 사용
  //큐의 길이는 bridge_length 만큼
  //큐 요소들의 합이 weight을 넘을 수 없다

  //배열을 한 개 더 만들어서(큐) 0으로 채워두기
  //반복문을 돌면서 (1부터 시작)
  //트럭들 앞으로 한 칸씩 보내기 (1초마다 한 칸 앞으로는 무조건 움직이니까)
  //[0,0]이렇게 배열을 미리 채워두지 않으면 앞으로 보내는게 필요없다
  //돌 때마다 현재 들어갈 트럭과 이미 들어가있는 트럭의 무게가 10kg 넘는지 확인
  //큐가 비면 반복문 탈출 경과 시간 리턴

  let time = 1;
  const bridge = Array.from({ length: bridge_length }, (_, i) => {
    if (i === bridge_length - 1) return truck_weights.shift();
    return 0;
  });

  while(bridge.length > 0) {
    if (truck_weights.length === 0 && bridge.reduce((a,b) => a + b) === 0) return time;

    bridge.shift();

    const bridgeWeight = bridge.reduce(
      (sum, truckWeight) => (sum += truckWeight),
      0,
    );

    if (truck_weights && bridgeWeight + truck_weights[0] <= weight) {
      bridge.push(truck_weights.shift());
    } else {
      bridge.push(0);
    }

    time += 1;
  }

  return time;
}

console.log(solution(2, 10, [7,4,5,6]))