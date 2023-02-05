// SIDE-BAR
const menuItems = document.querySelectorAll('.menu-item');

const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontsize = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPrimary = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
        
    })
}

////////////////////////// SIDE-BAR //////////////////////
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        document.querySelector('.notifications-popub').
            style.boxShadow = '0 0 2rem var(--color-primary)';
            notifications_popub = document.querySelector('.notifications-popub')
            setTimeout(() => {
                notifications_popub.style.boxShadow = 'none'
            }, 2000);
        if(item.id !='notifications'){
            document.querySelector('.notifications-popub').
            style.display = 'none';
            document.querySelector('#notifications .notification-count').
            style.display = 'block';
        }else{
            document.querySelector('.notifications-popub').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').
            style.display = 'none';
            
        }
    })
});


///////////////////////// MESSAGE /////////////////////
// search bar 
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    // console.log(val);
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }else{
            chat.style.display = 'none'
        }
    })
}
messageSearch.addEventListener('keyup', searchMessage);
// search bar end

messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').
    style.display = 'none'
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000);
    if(item.id !='notifications'){
        document.querySelector('.notifications-popub').
        style.display = 'none';
        document.querySelector('#notifications .notification-count').
        style.display = 'block';
    }else{
        document.querySelector('.notifications-popub').
        style.display = 'block';
        document.querySelector('#notifications .notification-count').
        style.display = 'none';
        
    }
});


// ////// THEME ///////////

// opens modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

// close modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none'
    }
}
themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);

// font size

const removeSizeSelector = () => {
    fontsize.forEach(size => {
        size.classList.remove('active');
    })
}

fontsize.forEach(size => {

    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize = '13px'
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','-7rem');
        }else if(size.classList.contains('font-size-3')){
            fontSize = '16px'
            root.style.setProperty('--sticky-top-left','-2rem');
            root.style.setProperty('--sticky-top-right','-17rem');
        }else if(size.classList.contains('font-size-4')){
            fontSize = '19px'
            root.style.setProperty('--sticky-top-left','-5rem');
            root.style.setProperty('--sticky-top-right','-25rem');
        }else if(size.classList.contains('font-size-5')){
            fontSize = '22px'
            root.style.setProperty('--sticky-top-left','-12rem');
            root.style.setProperty('--sticky-top-right','-35rem');
        }

        document.querySelector('html').style.fontSize = fontSize;
    });

});


// change primary color

const removeColorPri = () => {
    colorPrimary.forEach(color => {
        color.classList.remove('active');
    })
};

colorPrimary.forEach(color =>{
    color.addEventListener('click', () => {
        removeColorPri();
        let primaryAsi;
        if(color.classList.contains('color-1')){
            primaryAsi = 252;
            
        }else if(color.classList.contains('color-2')){
            primaryAsi = 52;
        }else if(color.classList.contains('color-3')){
            primaryAsi = 352;
        }else if(color.classList.contains('color-4')){
            primaryAsi = 152;
        }else if(color.classList.contains('color-5')){
            primaryAsi = 202;
        }

        color.classList.add('active');
        root.style.setProperty('--primary-color-Asi', primaryAsi);
    })
});

// changes backgournd color
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
};

Bg1.addEventListener('click', () => {
    // add active class
    Bg1.classList.add('active');
    // remove active class

    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
});

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // add active class
    Bg2.classList.add('active');
    // remove active class

    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // add active class
    Bg3.classList.add('active');
    // remove active class

    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
});

// END






