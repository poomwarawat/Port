var count = 0
var input = document.getElementById('text1').value
input.innerHTML = "Hello"

function postFunction(){
    var box1 = document.getElementById('post1')
    var box2 = document.getElementById('reply1')
    var box3 = document.getElementById('reply2')    

    var input = document.getElementById('text1').value
    
    count += 1
    if(count == 1){
        box1.innerHTML = input
    }
    else if(count == 2){
        box2.innerHTML = input
    }else if(count == 3){
        box3.innerHTML = input
    }
}

function clearFunction(){
    var box1 = document.getElementById('post1')
    var box2 = document.getElementById('reply1')
    var box3 = document.getElementById('reply2')


    box1.innerText = ""
    box2.innerText = ""
    box3.innerText = ""
}

function clearContents(element) {
    element.value = '';
}
