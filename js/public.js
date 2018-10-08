//页面字体大小
(function (doc, win) {    
            var docEl = doc.documentElement,    
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',    
            recalc = function () {    
            var clientWidth = docEl.clientWidth;    
            if (!clientWidth) return;    
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';    
        };    
        if (!doc.addEventListener) return;    
        win.addEventListener(resizeEvt, recalc, false);    
        doc.addEventListener('DOMContentLoaded', recalc, false);    
        })(document, window); 

//menu弹窗关闭打开

    function togs(obj){
    $('.'+obj).toggle();
    $(".body_bg").toggle();
}

//验证码倒计时
    var wait=60;  
        function time(o) {  
            if (wait == 0) {  
                o.removeAttribute("disabled");            
                o.value="重新发送";  
                wait = 60;  
            } else {  
                o.setAttribute("disabled", true);  
                o.value= wait+" S" ;  
                wait--;  
                setTimeout(function() {  
                    time(o)  
                },  
                1000)  
            }  
        } 


