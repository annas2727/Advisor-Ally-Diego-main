
const dropdowns = document.querySelectorAll('.dropdown');

//Loop through all dropdown elements
dropdowns.forEach(dropdown => {
    //get inner elements from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        //Add clicked select styles to the select element
        select.classList.toggle('select-clicked');
        //Add the rotate styles to the caret element
        caret.classList.toggle('caret-rotate');
        //Add the open styles to the menu element
        menu.classList.toggle('menu-open');
    });

    //Loop through all the option elements
    options.forEach(option => {
        //Add a click event to the option element 
        option.addEventListener('click', () => {
            //change selected inner text to the clicked option inner text
            selected.innerText = option.innerText;
            //add the clicked select styles to the select element
            select.classList.remove('select-clicked');
            //add the rotate styles to the caret element
            caret.classList.remove('caret-rotate');
            //add the open styles to the menu element
            menu.classList.remove('menu-open');
            //remove active class from all option elements
            options.forEach(option => {
                option.classList.remove('active');
            });
            //add active class to clicked option element
            option.classList.add('active');
        });
    });
});
