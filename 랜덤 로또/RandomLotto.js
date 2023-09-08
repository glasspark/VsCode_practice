document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generate');
    const resultDiv = document.getElementById('result');

    generateButton.addEventListener('click', function () {
        const numbers = new Set(); // Set 객체를 생성

        while (numbers.size < 6) { // Set 객체의 크기가 6보다 작을 동안 루프 실행
            const num = Math.floor(Math.random() * 45) + 1; // 랜덤 숫자 생성
            numbers.add(num); // Set에 랜덤 숫자 추가 (중복은 자동으로 무시됨)
        }

        // Set을 배열로 변환한 후 정렬
        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        // 결과를 HTML에 표시
        resultDiv.innerHTML = '생성된 로또 번호: ' + sortedNumbers.join(', ');
    });
});
