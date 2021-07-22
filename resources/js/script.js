const testimonials = [    
  {
    "username": "Tanya Sinclair",
    "imgURL": "images/image-tanya.jpg",
    "testimonial": "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    "profession": "UX Engineer"
  },
  {
    "username": "John Tarkpor",
    "imgURL": "images/image-john.jpg",
    "testimonial": "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    "profession": "Junior Front-end Developer"
  }
]

// Arrows
const sliderArrows = document.getElementById('slider-arrows')
let pos = 0


sliderArrows.addEventListener('click', changeTestimonial)

function changeTestimonial(e) {
  const username = document.getElementById('username')
  const testimonial = document.getElementById('testimonial')
  const profession = document.getElementById('profession')
  const sliderImage = document.getElementById('slider-image')

  if(e.target.id === 'prev') {
    console.log('prev')
    if(pos === 0){
      pos = testimonials.length - 1
    } else if(pos > 0 && pos <= testimonials.length - 1) {
      pos--
    }
  } else if (e.target.id === 'next') {
    console.log('next')
    if(pos >= 0 && pos < testimonials.length - 1) {
      pos++
    } else if(pos === testimonials.length - 1) {
      pos = 0
    }
  }
  
  username.innerHTML = testimonials[pos].username
  profession.textContent = testimonials[pos].profession
  testimonial.innerHTML = testimonials[pos].testimonial
  sliderImage.src = testimonials[pos].imgURL
  sliderImage.alt = testimonials[pos].username
}