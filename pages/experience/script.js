const scrollRevealConfig = {
    duration:2700,
    reset:true,
    origin:'left',
    distance:'150px'
}

const scrollRevealHandler = (className, config) => {
      ScrollReveal().reveal(className,config);
}

scrollRevealHandler('.item-1',{...scrollRevealConfig, origin:'left',delay:1000});
scrollRevealHandler('.item-2',{...scrollRevealConfig, origin:'right',delay:1500});
