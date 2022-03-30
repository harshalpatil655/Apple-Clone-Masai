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
    image_url: "https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_se_light__fhg8duy6ffau_large.svg",
    name: 'iphone 13',
    status: "New"
},

{
    image_url: "https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_13_pro_light__bywz8u012wk2_large.svg",
    name: 'iphone 13',
    status: ""
},

{
    image_url: "https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_11_light__b9p04p2r2vqu_large.svg",
    name: 'iphone 13',
    status: ""
},

{
    image_url: "https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_compare_light__f4jj7brpbvm2_large.svg",
    name: 'iphone 13',
    status: ""
},

{
    image_url: "https://www.apple.com/v/iphone/home/be/images/chapternav/airpods_light__8oj157p2476a_large.svg",
    name: 'iphone 13',
    status: ""
},

{
    image_url: "https://www.apple.com/v/iphone/home/be/images/chapternav/airtag_light__cb2bmnv6aoeu_large.svg",
    name: 'iphone 13',
    status: ""
},

{
    image_url: "https://www.apple.com/v/iphone/home/be/images/chapternav/accessories_light__ed5l6ipsevqu_large.svg",
    name: 'iphone 13',
    status: ""
},

{
    image_url: "https://www.apple.com/v/iphone/home/be/images/chapternav/accessories_light__ed5l6ipsevqu_large.svg",
    name: 'iphone 13',
    status: ""
},

{
    image_url: "https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_apple_card_light__dtut839e76c2_large.svg",
    name: 'iphone 13',
    status: ""
},

{
    image_url: "https://www.apple.com/v/iphone/home/be/images/chapternav/shop_iphone_light__b2toggskllle_large.svg",
    name: 'iphone 13',
    status: ""
}
];

// var iphone_data=[{


//     icon_url: "https://www.apple.com/v/iphone/home/be/images/overview/compare/icon_13_pro_camera__fonn9igfi7qm_large.png",

// }]

nav_data.map(function (elem) {
    var card = document.createElement('div')

    var logo = document.createElement('img')
    logo.src = elem.image_url;
    logo.setAttribute('class','logo')
    

    var name = document.createElement('p')
    name.textContent = elem.name;

    var status = document.createElement('p')
    status.textContent = elem.status;
    status.style.color='red'
    // console.log(logo,name,status)
    card.append(logo, name, status)

    document.querySelector('#con').append(card)
})