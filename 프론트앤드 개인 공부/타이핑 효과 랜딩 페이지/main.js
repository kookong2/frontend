let target = document.querySelector("#dynamic");


function randomString(){
    let stringArr = ["Learn to HTML","Learn to CSS","Learn to JavaScript"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    // math.floor 소수점을 날려줌
    let selectStringArr = selectString.split("");
    // split : 문자열을 가로안 기준을 이용해서 배열로 분리 시켜라
    // console.log(selectStringArr);
    //-> 문자열이 하나의 문자씩 쪼개져서 배열을 이루게 됨

    return selectStringArr;
}

// 커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);


// 한 글자씩 텍스트 출력 함수
function dynamic(randomArr){

    // console.log(randomArr)
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80);
    }else{
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());


// 타이핑 리셋
function resetTyping(){
    target.textContent = "";

    dynamic(randomString());
}




