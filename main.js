document.addEventListener('DOMContentLoaded', function() {
    //envelope animation for about us section
    // let envelope = document.querySelector('#envelope')
    // let aboutTimeline = anime.timeline({
    //     loop: true,
    // })

    // aboutTimeline.add({
    //     targets: envelope,
    //     translateY: [-150, 0],
    //     loop: true,
    //     direction: 'alternate',
    //     easing: 'easeInOutQuint',
    // })
    // .add({
    //     targets: '#entire-envelope',
    //     // translateX: [0, -150],
    //     // opacity: {value: [1, 0], delay: 100},
    //     // scale: [1, .2],
    //     translateX:[0 , 1000],
    //     loop: 6,
    //     'easing': 'easeInOutQuint',
    //     rotate: [0, -20]
    // })
    
        

    // var mySwiper = new Swiper ('.swiper-container', {
    //     // Optional parameters
    //     direction: 'horizontal',
    //     loop: true,
    //     // If we need pagination
    //     pagination: {
    //     el: '.swiper-pagination',
    //     },
    //     on: {
    //         init: function() {
    //             anime({
    //             targets: document.querySelector('#intro').children,
    //             opacity: [0, 1],
    //             duration: 550,
    //             easing: 'easeInOutQuint',
    //             delay: 1000,
    //         })
    //         }
    //     },
    //     // Navigation arrows
    //     navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //     },
    //     // And if we need scrollbar
    //     // scrollbar: {
    //     // el: '.swiper-scrollbar',
    //     // },
    // })
    
    // let sliderIn = anime({
    //         targets: document.querySelector('#intro').children,
    //         autoplay: false,
    //         opacity: [0, 1],
    //         duration: 550,
    //         easing: 'easeInOutQuint',
    //         delay: function(el,i,l) {
    //             return i * 200
    //     }
    // })


    // mySwiper.on('slideChange', function() {
    //     if(mySwiper.realIndex == 0) {
    //         sliderIn.play()
    //         if(sliderIn.completed) {
    //             sliderIn.restart()
    //             sliderIn.play()
    //         }
    //     }
    // })

    document.addEventListener('scroll', function() {

        let headerHeight = document.querySelector('header').offsetHeight
        let scrollAmt = window.pageYOffset
        let navFixed = document.querySelector('#main-nav')
        // let logo = document.querySelector('.logo-absolute')
        // let animatioN = anime({
        //         targets: logo,
        //         autoplay: false,
        //         opacity: [0, 1],
        //         duration: 500,
        //         translateY: [50, 0],
        //         easing: 'easeInOutQuint',
        //         begin: function() {
        //             logo.classList.remove('hidden')
        //         }
        //     })
        if(scrollAmt > headerHeight) {
            document.querySelector('.nav-fixed-wrapper').style.height = navFixed.offsetHeight + 'px'
            navFixed.classList.add('fixed-nav')
            
            //         if(navFixed.classList.contains('fixed-nav') && !logo.classList.contains('hidden')) {
            //            animatioN.play()
            //         }
        //   if(navFixed.classList.contains('fixed-nav')) {
        //         anime({
        //             targets: logo,
        //             opacity: [0, 1],
        //             duration: 500,
        //             translateY: [50, 0],
        //             easing: 'easeInOutQuint',
        //             begin: function() {
        //                 logo.classList.remove('hidden')
        //             }
        //         })

        // }
        } else {
          navFixed.classList.remove('fixed-nav')
          document.querySelector('.nav-fixed-wrapper').style.height = 'auto'
        //  logo.classList.add('hidden')
        //  if(!navFixed.classList.contains('fixed-nav')) { 
            // let logoOut = anime({
            //     autoplay: false,
            //     targets: logo,
            //     opacity: [0, 1],
            //     complete: function() {
            //         logo.classList.add('hidden')
            //     }
            // })
            // logoOut.play()
            // if(logoOut.completed) {
                
            // } else {
            //     logoOut.play()
            // }
            // console.log(logoOut)
        // }
        }
    })

    // handle dropdowns 
    let dropdowns = document.getElementsByClassName('with-dropdown')
    for(let i=0; i < dropdowns.length; i++) {
        dropdowns[i].addEventListener('click', function() {
            event.preventDefault()
            
            if(this.children[1].classList.contains('hidden')) {
                this.classList.add('open')
                this.children[0].children[0].classList.add('blue-text')
                anime({
                    targets: this.children[0].children[0],
                    opacity: [0, 1],
                    delay: 100,
                    easing: 'easeOutExpo',
                    duration: 200,
                    translateY: [-10, 0]

                })
                let dropdownAnimation = anime({
                    targets: this.children[1],
                    translateY: [-50, 0],
                    easing: 'easeOutQuint',
                    duration: 200,
                    opacity: [0,1],
                    begin: function() {
                        this.children[1].classList.remove('hidden')
                    }.bind(this)
                })
            } else {
                this.classList.remove('open')
                anime({
                    targets: this.children[1],
                    easing: 'easeInOutQuint',
                    duration: 200,
                    opacity: {value:[1, 0], delay: 50},
                    complete: function() {
                        this.children[1].classList.add('hidden')
                        this.children[0].children[0].classList.remove('blue-text')
                    }.bind(this)
                })
            }
        })
    }
});

function handleClick() {
    event.preventDefault()
    console.log(event.target.innerHTML)
    let clickedSection = event.target.innerHTML
    let one_page_sections = document.getElementsByClassName('one-page-section')
    for(let i=0; i < one_page_sections.length; i++) {
        if(one_page_sections[i].id === clickedSection) {
            let navHeight = document.querySelector('nav').offsetHeight
            let offsetTop = one_page_sections[i].offsetTop - navHeight
            let currentSection = one_page_sections[i]
            let currentPosition = window.pageYOffset

            let checkOffset = function(elem) {
                if(elem.getAttribute('data-offset')) {
                    return true
                }
                return false
            }
            //calculate the height of the nav
            if(currentPosition == 0 ) {
                anime({
                targets: 'html, body',
                scrollTop: function() {
                    if(checkOffset(currentSection)) {
                        return [currentPosition, currentSection.offsetTop]
                    }
                    return [currentPosition, offsetTop ]
                },
                easing: 'easeInOutQuint',
                duration: 1000,
                begin: function() {
                    // handleScrollToAnimations(one_page_sections[i])
                }
            })
            } else {
            anime({
                targets: 'html, body',
                scrollTop: function() {
                    if(checkOffset(currentSection)) {
                        return [currentPosition, currentSection.offsetTop]
                    }
                    return [currentPosition, offsetTop ]
                },
                easing: 'easeInOutQuint',
                duration: 300,
                begin: function() {
                    // handleScrollToAnimations(one_page_sections[i])
                }
            })
        }
        }
    }
}

function handleScrollToAnimations(element) {
    // animations
    
    let animationTarget = element.childNodes[1].childNodes[3].children[0]

    anime({
        targets: animationTarget,
        opacity: [0,1],
        easing: 'easeInOutQuint',
        duration: 500,
        delay: 200,
    })

}

function returnToTop() {
    anime({
        targets: 'html, body',
        scrollTop: [window.pageYOffset, 0],
        easing: 'easeInOutQuint',
        duration: 800,
        complete: function() {
            let alertt = new CustomAlert('p', 'You have returned to the top of the page.', 1000)
            alertt.show()
        }
    })
}


// handle the contact-form submission

let contactForm = document.querySelector('form')

contactForm.addEventListener('submit', function(e) {
    e.preventDefault()
    let newAlert = new CustomAlert('p',"Thank you. You're contact form has been sent. Please be patient and remember to check your inbox frequently for a response.", 4000)
    newAlert.show()

    // clear input values in contact form after submission
   for(let i=0; i < contactForm.elements.length; i++) {
    if(contactForm.elements[i].type != 'submit') {
        contactForm.elements[i].value = ''
    }
   }
})

