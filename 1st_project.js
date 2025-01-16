const boxes = document.querySelectorAll('.box')
const body = document.querySelector('body')

boxes.forEach(function(box) {

    box.addEventListener('click', function(e) {
        console.log(e)
        console.log(e.target)
        if (e.target.id === 'red') {
            body.style.backgroundColor = 'red'
                }
                if (e.target.id === 'green') {
                    body.style.backgroundColor = 'green'
                        }
                        if (e.target.id === 'yellow') {
                            body.style.backgroundColor = 'yellow'
                                }
                                if (e.target.id === 'gray') {
                                    body.style.backgroundColor = 'gray'
                                        }
    })
    
});