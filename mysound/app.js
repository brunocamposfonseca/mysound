//window.oncontextmenu = function() {return false;}

let profileDropdownList = document.querySelector(".ul1-pfllist-topbar");
let btn = document.querySelector(".div2-pfldropbtn-topbar");
const cookieBox = document.querySelector(".div1-cookie-modal"),
    btnCookie = document.querySelectorAll(".btn1-cookiebtn-modal");

const executeCodes = () => {
    if (document.cookie.includes("MySound")) return
    cookieBox.classList.add("actshow");

    btnCookie.forEach(button => {
        button.addEventListener("click", () => {
            cookieBox.classList.remove("actshow");

            if(button.id == "aceitarcookie") {
                document.cookie = "cookieBy= MySound; max-age=" + 60 * 60 * 24 * 30;
            }
        });
    });
};

window.addEventListener("load", executeCodes);

function toggle(){
    profileDropdownList.classList.toggle("activepfl");
}

window.addEventListener('click', function(e){
    if(!btn.contains(e.target)){
        profileDropdownList.classList.remove("activepfl");
    }
});

function voltar(){
    window.history.back();
}

function ir(){
    window.history.go(1);
}