document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let searchIcon = document.querySelector('.search_icon'),
        searchInput = document.querySelector('.search_input');
    // console.log(searchIcon);

    
    function searchInputHiding() {
        searchInput.style.display = 'none';
    }
    searchInputHiding();

    searchIcon.addEventListener('click', function() {
        if (searchInput.style.display == 'inline-block') {
            searchInput.classList.remove('search_input_active');
            searchInput.classList.add('search_input_no-active');

            setTimeout(searchInputHiding, 500);
        } else {
            searchInput.style.display = 'inline-block';
            searchInput.classList.remove('search_input_no-active');
            searchInput.classList.add('search_input_active');
        }

    });
}); 