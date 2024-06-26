const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const postList = document.querySelector('#container');

posts.forEach((post) => {
    const singlePost = createDOMElement(post);
    postList.innerHTML += singlePost;
});

const likesButton = document.querySelectorAll('.js-like-button');
const likesCounter = document.querySelectorAll('.js-likes-counter');

likesButton.forEach((button, index) => {
    const relatedCounter = likesCounter[index];
    let likes = relatedCounter.innerHTML;
    let likesIncrease = false;
    button.addEventListener('click', function () {
        if (!likesIncrease) {
            button.classList.add('like-button--liked');
            likes++;
            likesIncrease = true;
        } else if (likesIncrease) {
            button.classList.remove('like-button--liked');
            likes--;
            likesIncrease = false;
        }
        relatedCounter.innerHTML = likes;
    });
});

//FUNCTIONS

function createDOMElement(postsObject) {

    let { id, content, media, author, likes, created } = postsObject;

    let {name} = author;
    const namesToDivide = name.split(' ');
     const [firstName, surname] = namesToDivide;
     const nameInits = `${firstName[0]}${surname[0]}`

    const dateToConvert = created.split('-');
    const [year, month, day] = dateToConvert;
    const dateConverted = `${day}-${month}-${year}`;

    let profileImgae;
    if (author.image) {
        profileImgae = `<img class="profile-pic" src="${author.image}" alt="${author.name}">`;
    } else {
        profileImgae = `<span class="profile-pic-default">${nameInits}</span>`
    }

    const singlePost = `
<div class="post">
<div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            ${profileImgae}                   
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${author.name}</div>
            <div class="post-meta__time">${dateConverted}</div>
        </div>                    
    </div>
</div>
<div class="post__text">${content}</div>
<div class="post__image">
    <img src="${media}" alt="">
</div>
<div class="post__footer">
    <div class="likes js-likes">
        <div class="likes__cta">
            <a class="like-button  js-like-button" data-postid="1">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        </div>
        <div class="likes__counter">
            Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
        </div>
    </div> 
</div>            
</div>
`;

return singlePost;
};