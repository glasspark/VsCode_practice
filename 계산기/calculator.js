let currentInput = "";

//초기화 하는 기능
function clearDisplay() {
    currentInput = "";
    document.getElementById("display").value = "";
}

//입력받은 문자열들을 저장
function appendToDisplay(value) {
    currentInput += value;
    document.getElementById("display").value = currentInput;
}

function calculate() {
    try {
        // eval=> 표현식을 계산하고 결과값을 반환
        currentInput = eval(currentInput).toString();
        document.getElementById("display").value = currentInput;
    } catch (error) {
        alert("유효하지 않은 값 입니다.");
        clearDisplay();
    }
}