function solution(answers) {
  let a = [1, 2, 3, 4, 5];
  let b = [2, 1, 2, 3, 2, 4, 2, 5];
  let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let result = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === a[i % a.length]) result[0]++;
    if (answers[i] === b[i % b.length]) result[1]++;
    if (answers[i] === c[i % c.length]) result[2]++;
  }

  const maxScore = Math.max(...result);
  const answer = [];

  for (let i = 0; i < result.length; i++) {
    if (result[i] === maxScore) answer.push(i + 1);
  }

  return answer;
}