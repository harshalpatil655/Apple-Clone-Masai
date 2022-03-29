var nav_data = [{
    image_url: "https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_13_pro_light__bywz8u012wk2_large.svg",
    name: 'iphone 13',
    status: "New"
},

{
    image_url: "https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_13_pro_light__bywz8u012wk2_large.svg",
    name: 'iphone 13',
    status: "New"
},

{
    image_url: "https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_13_pro_light__bywz8u012wk2_large.svg",
    name: 'iphone 13',
    status: "New"
},

{
    image_url: "https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_13_pro_light__bywz8u012wk2_large.svg",
    name: 'iphone 13',
    status: "New"
},

{
    image_url: "https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_13_pro_light__bywz8u012wk2_large.svg",
    name: 'iphone 13',
    status: "New"
},

{
    image_url: "https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_13_pro_light__bywz8u012wk2_large.svg",
    name: 'iphone 13',
    status: "New"
},

{
    image_url: "https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_13_pro_light__bywz8u012wk2_large.svg",
    name: 'iphone 13',
    status: "New"
},

{
    image_url: "https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_13_pro_light__bywz8u012wk2_large.svg",
    name: 'iphone 13',
    status: "New"
},

{
    image_url: "https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_13_pro_light__bywz8u012wk2_large.svg",
    name: 'iphone 13',
    status: "New"
},

{
    image_url: "https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_13_pro_light__bywz8u012wk2_large.svg",
    name: 'iphone 13',
    status: "New"
},

{
    image_url: "https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_13_pro_light__bywz8u012wk2_large.svg",
    name: 'iphone 13',
    status: "New"
},

{
    image_url: "https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_13_pro_light__bywz8u012wk2_large.svg",
    name: 'iphone 13',
    status: "New"
}
]

nav_data.map(function (elem) {
    var card = document.createElement('div')

    var logo = document.createElement('img')
    logo.src = elem.image_url;

    var name = document.createElement('p')
    name.textContent = elem.name;

    var status = document.createElement('p')
    status.textContent = elem.status;
    // console.log(logo,name,status)
    card.append(logo, name, status)

    document.querySelector('#con').append(card)
})