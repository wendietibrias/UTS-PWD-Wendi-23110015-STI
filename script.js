
const typingContainerAnimate = document.getElementById('typing-animate-container');


const scrollRevealConfig = {
    duration:2700,
    reset:true,
    origin:'left',
    distance:'150px'
}

const scrollRevealHandler = (className, config) => {
      ScrollReveal().reveal(className,config);
}

scrollRevealHandler('.content--left' , {...scrollRevealConfig,delay:0});

scrollRevealHandler('.content--right', {...scrollRevealConfig,origin:'right',delay:1200});

scrollRevealHandler('.hero--media-social' , {...scrollRevealConfig,delay:1500,origin:'left'});

scrollRevealHandler('.about--left' , {...scrollRevealConfig,delay:0,origin:'left'});

scrollRevealHandler('.about--right' , {...scrollRevealConfig,delay:1200,origin:'right'});

scrollRevealHandler('.services--container',{...scrollRevealConfig, origin:'left'});

scrollRevealHandler('.skills--container',{...scrollRevealConfig, origin:'right'});

scrollRevealHandler('.feedback--container', {...scrollRevealConfig, origin:'left'});