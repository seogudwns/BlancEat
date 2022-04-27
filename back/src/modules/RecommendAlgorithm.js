// 알고리즘의 원리 및 구조도는 같은 이름의 md파일로 저장되있습니다. 참고 바랍니다.

// recommend_nutrition 구성요소.
// Age,Sex,protein,fat,carbon,sugar,sugar_limit,fiber,VitA,VitA_limit,VitE,VitE_limit
// VitC,VitC_limit,VitB6,VitB6_limit,Niacin,Niacin_limit,Folate,Folate_limit,Ca,Ca_limit,Na,Na_limit

// 1. Age, Sex로부터 recomment_nutrition에서 사람 정보 뽑기.
// 2. carbon, protein, fat 계산 후 temp = [] 에 넣기. + 10% 계산해서 temp2 = [] 에 넣기.
// 3. 먹은 음식들로 carbon, protein, fat 추출, nutrient_table 만들기
// 4. nutrient_table =    [[temp[0]+temp2[0],temp[1]+temp2[1],temp[2]+temp2[2]] +
//                      [temp] +
//                      [[temp[0]-temp2[0],temp[1]-temp2[1],temp[2]-temp2[2]] +
//                      [[temp[0]//2,temp[1]//2,temp[2]//2]]

// 이때 각 값에서 -가 나올 가능성이 있으므로 최종적으로 max(0)과 비교.

// 5. async func  ~~~~    { if (nutrient_table[3].reduce((x, y) => x + y) == 0) {result.push =['물']; return result}  // 탄단지 모두 초과량을 먹음.
// 6. else { await find query items.
//
// };
//! pyhton으로 데이터를 그냥 보내버릴까??..
// .
// .
// .
// .

let abc = [1, 2, 3, 4];
console.log(abc.reduce((x, y) => x + y));
