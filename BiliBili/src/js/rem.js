/**
 * Created by liuxiaoer on 2017/12/4.
 */

 (function() {
     var htmlEle = document.documentElement;
     function setFontSize() {
         htmlEle.style.fontSize = htmlEle.clientWidth/750 * 46.875 + 'px'
         if (parseFloat(htmlEle.style.fontSize) > 67.5) {
            htmlEle.style.fontSize = 67.5 + 'px'
         } 
     }
     window.addEventListener('resize',function() {
         setFontSize()
     })
     window.onload = function() {
         setFontSize()
     }
 })()