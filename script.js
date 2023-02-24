
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  });
},
{ rootMargin: '-40px' });
const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));

const sections = [...document.querySelectorAll('section')];
const link = (id) => document.querySelector(`a[href="#${id}"]`);

const inView = (element) => {
  var top = element.offsetTop;
  var height = element.offsetHeight;
  
  while(element.offsetParent){
   element = element.offsetParent;
   top += element.offsetTop;
  }
  
    return (
      top < (window.pageYOffset + window.innerHeight) && 
      (top + height) > window.pageYOffset
    );
};

const init = () => {
  function update() {
    let next = false;
    
    sections.forEach(sections => {
      const current = link(sections.id);
      
      if (inView(sections) && !next){
        current.classList.add('current');
        next = true;
      } else {
        current.classList.remove('current');
      }
    });
  }
  update();
  window.addEventListener('scroll', update);
}

init();

