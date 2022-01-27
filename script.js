window.onload = function () {
    //let elem = document.querySelector(".counter");    
    let list = document.querySelectorAll(".news-list");

    const countElement = (e) => {
        let element = e.target;
        console.log(element);
        //element.style.color = 'green';
                
        element = updateDisplay(++counterVal);
        //document.querySelector(".nstat").innerHTML = ++counterVal;
        //element.querySelector(".nstat").innerHTML = ++counterVal;
    }

    list.forEach (item => {
        item.addEventListener('click', countElement);        
    });
}

let counterVal = 0;

function updateDisplay(val) {    
    document.querySelector(".nstat").innerHTML = val;
}