 var navLeft = document.querySelector(".nav-left");
    var navRight = document.querySelector(".nav-right");
    var rightBody = document.querySelector(".right-body");
    var rightBodyForm = document.querySelector(".right-body-form")
        navLeft.onclick = function(){
        rightBody.className = "right-body"
        rightBodyForm.className = "right-body-form right-hide"
        navLeft.style.color = "#f10180"
        navRight.style.color = "#666"
    }
        navRight.onclick = function(){
        // rightBody.className = "right-hide"
        rightBody.className = "right-body right-hide"
        rightBodyForm.className = "right-body-form"
        navRight.style.color = "#f10180";
        navLeft.style.color = "#666"
    }
