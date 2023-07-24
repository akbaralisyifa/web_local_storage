// incrementButton
// clear
// count


const localStorageKey = "PRESS_FREQUENCECY";

// pengecekan storage tersedia apa tidak 
if(typeof Storage !== 'undefined'){
    if(localStorage.getItem(localStorageKey) === null){
        // jika item pada session blum ada / kosong
        localStorage.setItem(localStorageKey, 0);
    }

    const incrementButton = document.querySelector('#incrementButton');
    const clearButton = document.querySelector('#clear');
    const countDisplay = document.querySelector('#count');

    // memberikan nilai item dari localstorage
    countDisplay.innerText = localStorage.getItem(localStorageKey);

    // update nilai
    incrementButton.addEventListener('click', function () {
        let count = localStorage.getItem(localStorageKey);
        count++;
        localStorage.setItem(localStorageKey, count);
        countDisplay.innerText = localStorage.getItem(localStorageKey);
      });

    // memberi nilai 0
    clearButton.addEventListener('click', function () {
        localStorage.removeItem(localStorageKey);
        countDisplay.innerText = 0;
      });
}else{
    alert('Browsernya Update dulu bro, gunakaan google chrome')
}


