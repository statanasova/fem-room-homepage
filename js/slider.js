/* Slider */

  const slides = [
    {
      imageMobile: '/images/mobile-image-hero-1.jpg',
      imageDesktop: '/images/desktop-image-hero-1.jpg',
      heading: 'Discover innovative ways to decorate',
      text: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    },
    
    {
      imageMobile: '/images/mobile-image-hero-2.jpg',
      imageDesktop: '/images/desktop-image-hero-2.jpg',
      heading: 'We are available all across the globe',
      text: 'With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today.',
    },
  
    {
      imageMobile: '/images/mobile-image-hero-3.jpg',
      imageDesktop: '/images/desktop-image-hero-3.jpg',
      heading: 'Manufactured with the best materials',
      text: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
    },
    
  ];

  const sliderAnimation = document.querySelector('#sliderAnimation');
  const sliderHeading = document.querySelector('#sliderHeading');
  const sliderText = document.querySelector('#sliderText');
  const sliderPicture = document.querySelector('#sliderPicture');
  const pictureSource = sliderPicture.querySelector('source');
  const imgSource = sliderPicture.querySelector('img');
  
  const prevButton = document.querySelector('#sliderButtonPrev');
  const nextButton = document.querySelector('#sliderButtonNext');
  
  currentIndex = 0;
  
  function nextSlide() {
    if ( (currentIndex + 1) < slides.length ){
        currentIndex++;
    } 
    else currentIndex = 0;
    
    return slides[currentIndex];
  }
  
  function prevSlide() {
    if ( (currentIndex - 1) >= 0 ){
      currentIndex--;
    } 
    else currentIndex = slides.length - 1;
  
    return slides[currentIndex];
  }
  
  function updateSlide(slide) {
    sliderHeading.innerHTML = slide.heading;
    sliderText.innerHTML = slide.text;
    pictureSource.setAttribute('srcset', slide.imageDesktop);
    imgSource.setAttribute('src', slide.imageMobile);
  }
 
  function buttonHandler(e) {
    sliderPicture.classList.add('fade-out');
    sliderAnimation.classList.add('fade-out');
    sliderAnimation.addEventListener('transitionend', afterFade);
    
    function afterFade(ev) {
      if(e.toElement.id === 'sliderButtonPrev' || e.target.parentNode.id === 'sliderButtonPrev') {
        var slide = prevSlide();
      }

      if(e.toElement.id === 'sliderButtonNext' || e.target.parentNode.id === 'sliderButtonNext') {
        var slide = nextSlide();
      }

      updateSlide(slide);
      
      sliderPicture.classList.remove('fade-out');
      sliderAnimation.classList.remove('fade-out');      
      sliderAnimation.removeEventListener('transitionend', afterFade);
    }
    
  }
  
  prevButton.addEventListener('click', buttonHandler);
  nextButton.addEventListener('click', buttonHandler);
  
  


