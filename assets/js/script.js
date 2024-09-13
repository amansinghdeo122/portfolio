const scroll = new LocomotiveScroll({
    el: document.querySelector('.wrapper'),
    smooth: true
});

document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.left-section h1, .portfolio-text', {
        y: -50, 
        opacity: 0, 
        duration: 1, 
        ease: 'power2.out'
    });

    gsap.from('.subtitle, .contact-info p, .last-updated', {
        x: -50, 
        opacity: 0, 
        duration: 1, 
        delay: 0.5, 
        stagger: 0.2, 
        ease: 'power2.out'
    });
    
});
gsap.from('.page-tow, .left-section, h1', {
    x: -50, 
    opacity: 0, 
    duration: 2, 
    delay: 0.5, 
    stagger: 0.2, 
    ease: 'power2.out'
});

gsap.from('.page-tow, .right-section, .menu', {
    x: 50, 
    opacity: 0, 
    duration: 0, 
    delay: 0.5, 
    stagger: 0.2, 
    ease: 'power2.out'
});
gsap.from('.pagethree, .text-section, .intro', {
    x: -50, 
    opacity: 0, 
    duration: 2,
    scrollTrigger: {
      scroller: "body",  // Corrected from 'string' to 'body'
    //   markers: true,
      start:"top 50%"
    } 
  });
// gsap.from(".pagethree .text-section .name ", {
//     x: -20, 
//     opacity: 0,
//     duration: 1,
//     scrollTrigger: {
//         trigger: ".pagethree .text-section .name ",
//         scroller: "body"
//     } 
// });