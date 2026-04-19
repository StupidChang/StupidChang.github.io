/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> */
/* <script src="./turn.min.js"></script>   */
// import $ from "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
// import $ from "./turn.min.js";
//  <script src='http://www.turnjs.com/lib/turn.min.js'></script>  
//  <script src="https://cdnjs.cloudflare.com/ajax/libs/turn.js/3/turn.min.js"></script>


$(document).ready(function() {
    let prizes = ["🎉 大獎！", "🥈 二獎", "🥉 三獎", "🎁 安慰獎"];
    let randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
    $('#prizePage').text(randomPrize);
    $('#prizePageRight').text(randomPrize);
    
    console.log("test...");

    // 撕開音效
    function playTearSound() {
        let audio = document.getElementById("tearSound");
        audio.play();
    }

    $('#book').turn({
        width: 600,
        height: 300,
        autoCenter: true,
        display: 'single',
        gradients: true,
        acceleration: true,
        corners: "tl", // 只允許左上角翻頁
        peel: "tl", // 只允許左上角翻頁 
        elevation: 50,
        pages: 2, // 確保至少有三頁，以強制第一頁為空白，從第二頁開始翻
        page: 2,
        when: {
            end: function(event, page, view) {
                playTearSound();
            },
            first: function(event, page, view) {
                // console.log("first...");
                $("#book").turn("disable", true); // 禁止翻頁，防止再次操作
            },
        }
    });

    $('#bookRight').turn({
        width: 600,
        height: 300,
        autoCenter: true,
        display: 'single',
        gradients: true,
        acceleration: true,
        corners: "tr", // 只允許左上角翻頁
        peel: "tr", // 只允許左上角翻頁
        elevation: 50,
        pages: 1, // 確保至少有三頁，以強制第一頁為空白，從第二頁開始翻
        page: 1,
        when: {
            end: function(event, page, view) {
                playTearSound();
            },
            last: function(event, page, view) {
                // console.log("first...");
                $("#bookRight").turn("disable", true); // 禁止翻頁，防止再次操作
            },
        }
    });

});

document.addEventListener('contextmenu', event => event.preventDefault()); // 禁止右鍵
document.addEventListener("keydown", function(event) {
    if (event.key === "F12" || event.ctrlKey && event.shiftKey && event.key === "I") {
        event.preventDefault();
    }
});
