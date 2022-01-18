//GSAP Animations Timeline

const tl = gsap.timeline({default: { ease: "power1.out" }});
tl.fromTo('.loaderImg', { duration: 1, scale: 0, ease: "power1.out" }, { duration: 1, scale: 1, ease: "power1.out" });
tl.to('.loader', { duration: 0.5, y: "-100%", ease: "power1.out", delay: 1 });
tl.from('nav', { duration: 1, opacity: 0, y: -100 })
tl.from('#adobe-dc-view', { duration: 1, opacity: 0 })