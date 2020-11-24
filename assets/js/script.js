function init(){
    // gsap.registerPlugin(ScrollTrigger);
    const t1=gsap.timeline({scrollTrigger:{
        trigger:'.first-section',
        pin:'.first-section',
        start:'600 300',
        end:'1200 600',
	    scrub:1,
        // markers:true
    }});
    t1.from('.section_1_01',{y: -100,x: -150,ease: Power3.easeInOut})
    .from('.section_1_02', 4, {
        y: -150,
        x: -250,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_03', 4, {
        y: -80,
        x: -100,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_04', 4, {
        y: -100,
        x: -150,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_05', 4, {
        y: -80,
        x: -200,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_06', 4, {
        y: -100,
        x: -350,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_07', 4, {
        y: -50,
        x: -150,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_08', 4, {
        y: 50,
        x: -350,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_09', 4, {
        y: 100,
        x: -200,
        ease: Power3.easeInOut
    }, '-=4')
// second animation
const t2=gsap.timeline({scrollTrigger:{
    trigger:'.second-section',
    pin:'.second-section',
    start:'100 100',
    end:'1200 600',
    scrub:1,
    // markers:true
}});
t2
.to('.top .image-container', 4, {
    height: 0
});

const t3=gsap.timeline({scrollTrigger:{
    trigger:'.third-section',
    pin:'.third-section',
    start:'200 100',
    end:'1500 600',
    scrub:1,
    // markers:true
}});
t3.to('.section_3_01', 4, {
    y: -250,
    ease: Power3.easeInOut
})
.to('.section_3_02', 4, {
    y: -200,
    ease: Power3.easeInOut
}, '-=4')
.to('.section_3_03', 4, {
    y: -100,
    ease: Power3.easeInOut
}, '-=4')
.to('.section_3_04', 4, {
    y: 0,
    ease: Power3.easeInOut
}, '-=4')
.to('.section_3_05', 4, {
    y: 150,
    ease: Power3.easeInOut
}, '-=4')
.to('.section_3_06', 4, {
    y: 250,
    ease: Power3.easeInOut
}, '-=4')
const t4=gsap.timeline({scrollTrigger:{
    trigger:'.forth-section',
    pin:'.forth-section',
    start:'400 200',
    end:'1500 600',
    scrub:1,
    markers:true
}});
t4 .to('.section_4_01', 4, {
    autoAlpha: 0
})
.from('.section_4_02', 4, {
    autoAlpha: 0
}, '-=4')
.from('.section_4_03', 4, {
    autoAlpha: 0
})
.from('.section_4_04', 4, {
    autoAlpha: 0
})

}
window.addEventListener("load",function(event){
    init();
});