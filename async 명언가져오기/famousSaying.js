const quoteURL = 'https://dummyjson.com/quotes';
fetch(quoteURL)
    .then(res => res.json()) //json 데이터 -> 객체로 변환
    .then(data => {
        console.log(data);

        //결과를 보여줄 result 라는 변수에 저장
        const result = document.querySelector('#result');
        const random = Math.floor(Math.random() * 30); //0~29 사이의 수를 랜덤으로 출력
        result.querySelector(`.quote`).innerHTML = data.quotes[random].quote;
        result.querySelector(`.author`).innerHTML = data.quotes[random].author;


    }) //데이터 구조 파악
    .catch(err => console.log(err))