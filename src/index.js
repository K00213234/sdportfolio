// site variables
let showcaseGallery = {
    PONE:
        "https://minuterice.com/static/placeholder-7dd7872204da927343ba853108f4aedb.png",
    PTWO:
        "https://minuterice.com/static/placeholder-7dd7872204da927343ba853108f4aedb.png",
    PTHREE:
        "https://minuterice.com/static/placeholder-7dd7872204da927343ba853108f4aedb.png"
};


let documentElementIds = {
    contact: "contact",
    github: "github",
    portrait: "portrait",
    PONE: "PONE",
    PTWO: "PTWO",
    PTHREE: "PTHREE",
    PTHREE: "PTHREE",
    name: "name",
    description: "description",
    showcaseMSG: "showcaseMSG"
}
let Name = "Lorem Ipsum";
let Description = `Lorem ipsum dolorsim luctus lectus. Vivamus consequat magna porta metus tristique, vel interdum purus dictum. Suspendisse bibendum pulvinar felis, at hendrerit felis rhoncus vel. Nullam volutpat pharetra scelerisque. Donec ac erat orci. Nulla tempor purus dolor, semper commodo elit rutrum vitae. Mauris non sagittis dui. Duis at purus sagittis, cursus risus et, cursus lectus. Morbi tincidunt neque sed tempor mollis. Nulla eleifend, elit id volutpat vestibulum, risus ex egestas tortor, sit amet accumsan dui libero quis nulla. Fusce elementum risus sed turpis molestie, non interdum massa facilisis.`;
let showcaseIMG = `https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80`;
let portrait = `https://wetlandsinstitute.org/wp-content/uploads/2010/10/Portrait-placeholder.jpg`;
let showcaseMSG = "My past work";
// main
(function () {
    // setting up nav link
    document.getElementById(documentElementIds.contact).href = "https://www.youtube.com";
    document.getElementById(documentElementIds.github).href = "https://github.com";
    // setting up images
    document.getElementById(documentElementIds.portrait).src = portrait;
    document.getElementById(documentElementIds.programmer
    ).style.backgroundImage = `url(${showcaseIMG})`;
    document.getElementById(documentElementIds.PONE).src = showcaseGallery.PONE;
    document.getElementById(documentElementIds.PTWO).src = showcaseGallery.PTWO;
    document.getElementById(documentElementIds.PTHREE).src = showcaseGallery.PTHREE;
    // setting up text
    document.getElementById(documentElementIds.name).textContent = Name;
    document.getElementById(documentElementIds.description).textContent = Description;
    document.getElementById(documentElementIds.showcaseMSG).textContent = showcaseMSG;
    // setting up gallery
})();
