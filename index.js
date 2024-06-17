// 제출 예시

// 1. 입력 값이 공백으로 구분된 여러 값일 때 주로 사용
// const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
// const input = require('fs').readFileSync('example.txt').toString().split(' ');
// 입력: 1 2 3 4 5
// 출력: ['1', '2', '3', '4', '5']

// 2. 파일에 여러 줄로 구성된 데이터를 읽어올 때 사용
// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// const input = require('fs').readFileSync('example.txt').toString().split('\n');
// 입력:
// line1
// line2
// line3
// 출력: ['line1', 'line2', 'line3']

// 3. 입력을 줄 단위로 읽고 각 줄로 다시 공백으로 나누어 처리
// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
// const input = require('fs').readFileSync('example.txt').toString().trim();
// 입력: line1 \n line2 \n line3
// 출력: 'line1 \n line2 \n line3'

// 4. 여러 줄의 숫자 입력을 처리하는 경우
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
// 입력:
// 1
// 2
// 3
// 출력: ['1', '2', '3']
