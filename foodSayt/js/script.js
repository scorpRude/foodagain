'use strict'

const tabs = document.querySelectorAll('.tabheader__item');
const tabsContent = document.querySelectorAll('.tabcontent');
const tabsParent = document.querySelector('.tabheader__items');

function hideTabsContent() {
    tabsContent.forEach(item => {
        item.classList.remove('show');
        item.classList.add('hide', 'fade');
    });

    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
};

function showTabsContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active')

};

hideTabsContent();
showTabsContent();


tabsParent.addEventListener('click', (e) => {
    const target = e.target;
    
    if(target && target.classList.contains('tabheader__item')) {
     tabs.forEach((item, i) => {
        if (target == item) {
            hideTabsContent();
            showTabsContent(i);   
        };
     })
    }
});

