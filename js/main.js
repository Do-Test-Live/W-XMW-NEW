gsap.registerPlugin(ScrollTrigger);function toTop(){gsap.to(window,{duration:2.5,scrollTo:0});}
document.getElementById("toTop").addEventListener("click",toTop);var elements=document.getElementsByClassName("nav_button");var menuGoTo=function(){var mainHeader=document.querySelector('.menu')
var attribute=this.getAttribute("data-goto")
console.log("Log run on JS");log(attribute);if(mainHeader.classList.contains('mob_open')){mainHeader.classList.remove("mob_open");}
gsap.to(window,{duration:1.5,scrollTo:"#"+attribute});};for(var i=0;i<elements.length;i++){elements[i].addEventListener('click',menuGoTo,false);}
function switch_mob_open(){var mainHeader=document.querySelector('.menu')
mainNav=document.querySelector('.menu nav');if(mainHeader.classList.contains('mob_open')){mainHeader.classList.remove("mob_open");mainNav.classList.remove("mob_open");}else{mainHeader.classList.add("mob_open");mainNav.classList.add("mob_open");};}
document.querySelector('.hambuger').addEventListener("click",switch_mob_open);function okPerpare(){console.log("ok Perapred");var mainMenu=document.querySelector('.menu')
introBG=document.querySelector('.intro_section')
bodyA=document.querySelector('body');if(mainMenu.classList.contains('not_perpared')){console.log("run if");mainMenu.classList.remove("not_perpared");introBG.classList.remove("not_perpared");bodyA.classList.remove("not_perpared");};}
function fadeItems(){gsap.to((".hambuger_wrapper .logo"),{autoAlpha:0});gsap.to((".totop"),{autoAlpha:1});}
gsap.to(".hambuger_wrapper .logo",{scrollTrigger:{trigger:".intro_section",start:"bottom top",end:"top top",toggleActions:"restart none none reverse"},autoAlpha:0});gsap.to(".totop",{scrollTrigger:{trigger:".intro_section",start:"bottom top",end:"top top",toggleActions:"restart none none reverse"},autoAlpha:1});function menuBg(){gsap.to(".menu_bg",{scrollTrigger:{trigger:".intro_section",scrub:true,start:"bottom center",end:"top top"},opacity:1});}
function textAnimation(){var random_dir=gsap.utils.random(-150,150,true);gsap.from(".char",{xPercent:random_dir,autoAlpha:0,duration:1,ease:Power3.easeOut});}
gsap.to(".intro_bg",{scrollTrigger:{trigger:".intro_section",scrub:true,start:"top top",end:"bottom top",},scale:1.2,filter:"blur(10px)"});function parallax_effect(){gsap.utils.toArray(".parallax_container").forEach(section=>{var parallax_img=section.getElementsByTagName('img')[0]
var section_H=section.offsetHeight
var image_H=parallax_img.offsetHeight-section_H
console.log(image_H)
gsap.to(parallax_img,{scrollTrigger:{trigger:section,start:"top bottom",end:"bottom top",scrub:1},y:()=>"-="+image_H});});}
function fadeinUp(container,card){const tl=gsap.timeline();tl.staggerFrom(card,.8,{ease:"back",yPercent:20,opacity:0},.2)
ScrollTrigger.create({animation:tl,trigger:container,start:"top 70%",toggleActions:"restart none none reverse"});}
fadeinUp(".about_section",".about_card");function airBG(yVal){gsap.to(".air_bg",{scrollTrigger:{trigger:".air",scrub:.4,start:"top bottom",end:"bottom top"},yPercent:yVal});}
function peakPin(){let st=ScrollTrigger.create({trigger:".about_section",pin:".about_peak",start:"top 50%",end:"bottom bottom"});}
function peakSlide(){gsap.from(".about_peak",{scrollTrigger:{trigger:".about_section",scrub:1,start:"top bottom",end:"bottom center"},xPercent:80});}
function roadmapPin(){let st2=ScrollTrigger.create({trigger:".roadmap_section",pin:".roadmap_title",start:"top top",end:"bottom bottom"});}
function roadmapBg(){gsap.to(".roadmapbg",{scrollTrigger:{trigger:".roadmap_section",scrub:1,start:"top bottom",end:"bottom top"},rotate:20});}
function slideInsideS(){gsap.utils.toArray(".roadmap_item").forEach(section=>{gsap.from(section,{scrollTrigger:{trigger:section,start:"top 65%",end:"bottom bottom",toggleActions:"restart none none reverse",},xPercent:40,autoAlpha:0,duration:1,ease:Power3.easeOut});});}
slideInsideS();function randomCard(){var divs=document.getElementsByClassName("why_card");for(var i=0;i<divs.length;i++){var thisDiv=divs[i];randomTop=getRandomNumber(-60,100);randomLeft=getRandomNumber(-10,20);thisDiv.style.top=randomTop+"px";thisDiv.style.left=randomLeft+"px";}
function getRandomNumber(min,max){return Math.random()*(max-min)+min;}}
function whyCardMove(){gsap.utils.toArray(".why_card").forEach(whyC=>{var random=gsap.utils.random(200,600,true);gsap.from(whyC,{scrollTrigger:{trigger:".why_section",start:"top bottom",end:"bottom top",scrub:2,toggleActions:"restart none none reverse",},yPercent:random,ease:Power3.easeOut});});}
function SlideIn(container,card){const tl=gsap.timeline();tl.staggerFrom(card,1,{ease:"back",yPercent:90,opacity:0},.15)
ScrollTrigger.create({animation:tl,trigger:container,start:"top 60%",toggleActions:"restart none none reverse"});}
SlideIn(".faq_section",".faq_card");document.querySelectorAll('.faq_card').forEach(item=>{item.addEventListener('click',event=>{var faqcards=document.querySelector('.faq_card');document.querySelectorAll('.faq_card').forEach(itemf=>{itemf.classList.remove("faq_open");});faqcards.classList.remove("faq_open");if(item.classList.contains('faq_open')){item.classList.remove("faq_open");}else{item.classList.add("faq_open");};})})
function footerBG(){gsap.from(".footer_bg",{scrollTrigger:{trigger:".footer",scrub:.4,start:"top bottom",end:"bottom bottom"},yPercent:50});}
function checkScreenSize(){if(window.innerWidth>=768){menuBg();peakSlide();roadmapBg();roadmapPin();randomCard();whyCardMove();footerBG();airBG(-90);parallax_effect();}else{peakPin();roadmapBg();airBG(-60);}}
window.addEventListener('load',function(){checkScreenSize();okPerpare();})
window.addEventListener('resize',function(event){checkScreenSize();okPerpare();});