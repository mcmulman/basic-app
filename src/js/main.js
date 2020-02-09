"use strict"

const test = () => {
    console.log('app started');
};

test();

const $navTrigger = document.getElementById('toggle'),
      $nav = document.querySelector('.navbar ul');

if ($navTrigger) {
    $navTrigger.addEventListener('click', (e) => {
        $nav.classList.toggle('visible');
        e.preventDefault();
        e.stopPropagation();
    });
}