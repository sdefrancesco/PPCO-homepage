var CustomAlert = function(element, content, duration) {
    this.element = element
    this.content = content

    this.show = function() {
        let newAlert = document.createElement('div')
        let alertContent = document.createElement(element)
        let closeBtn = document.createElement('i')
        let closeContainer = document.createElement('div')
        closeContainer.className='close'
        closeBtn.className ='fas fa-times'
        alertContent.innerHTML = content
        newAlert.className = 'alert'
        alertContent.className = 'content'
        closeContainer.addEventListener('click', function() {
            this.parentElement.remove()
        })
        newAlert.style.display = 'none'
        anime({
            targets: newAlert,
            opacity: [0, 1],
            easing: 'easeInOutQuint',
            duration: 300,
            translateX: [-50, 0],
            begin: function() {
                newAlert.style.display = 'flex'
            }
        })
        closeContainer.appendChild(closeBtn)
        newAlert.appendChild(alertContent)
        newAlert.appendChild(closeContainer)
        document.querySelector('body').appendChild(newAlert)
        setTimeout(function() {
            newAlert.remove()
        }, duration)
    }
}