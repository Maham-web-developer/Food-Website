const bar = document.getElementById('bar');
const close =document.getElementById('close');
const nav =document.getElementById('navbar');
if (bar) {
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}
// =======navbar end=====

function toggleDetails(itemIndex) {
    var details = document.getElementsByClassName("details")[itemIndex];
    var readMoreBtn = document.getElementsByClassName("read-more-btn")[itemIndex];

    if (details.style.display === "none") {
      details.style.display = "block";
      readMoreBtn.textContent = "Read less";
    } else {
      details.style.display = "none";
      readMoreBtn.textContent = "Read more";
    }
  }

  let countNumber = document.querySelectorAll('.countNumber')
   countNumber.forEach(countNumber => {
    countNumber.innerText = '0'
    let updateCountNumber = () => {
        let target = +countNumber.getAttribute('data-target')
        let a = +countNumber.innerText
        let increment = target / 150
        if(a< target) {
            countNumber.innerText = `${Math.ceil(a + increment)}`
            setTimeout(updateCountNumber, 0)
        } else {
            countNumber.innerText = target
        }
    }
    updateCountNumber()
})

  