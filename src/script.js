const slideDivs=document.querySelectorAll(".s2");function slidePrev(e){e.parentElement.querySelector(".content .s2").scrollLeft-=window.innerWidth-96-230}function slideNext(e){e.parentElement.querySelector(".content .s2").scrollLeft+=window.innerWidth-96-230}slideDivs.forEach(e=>{e.addEventListener("wheel",function(t){e.scrollLeft-=2*t.deltaY,t.preventDefault()})});