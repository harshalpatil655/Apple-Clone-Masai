var iphone_img = [{
    name: 'green',
    colour: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-green-select?wid=470&hei=556&fmt=png-alpha&.v=1644969385505"
},

{
    name: 'gold',
    colour: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-gold-select?wid=470&hei=556&fmt=png-alpha&.v=1645552345862"
},

{
    name: 'silver',
    colour:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-silver-select?wid=470&hei=556&fmt=png-alpha&.v=1645552345849'
},

{
    name: "blue",
    colour: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-blue-select?wid=470&hei=556&fmt=png-alpha&.v=1645552346275"
}

]
// display_data(iphone_img)
document.querySelector('#colour').addEventListener('change', filter_by_colour)
window.onload = display_default;


function display_default(){
    console.log('amit')
    // var colour=document.querySelector("#colour").value
    const randomNumber = Math.floor(Math.random() * iphone_img.length);
    const output = iphone_img[randomNumber];
    display_data([output]);
   
}


function filter_by_colour(){
    console.log('amit')
    var colour=document.querySelector("#colour").value
    var output=iphone_img.filter(function(elem){
        if(elem.name==colour){
            return elem.colour
        }
    })
    console.log(output)
    display_data(output)
}





function display_data(iphone_img){
    document.querySelector('#img').innerHTML = ''
iphone_img.map(function (elem){
    // console.log(elem)
    // var card=document.createElement("div")
    var name= document.createElement('p')
    name.textContent=elem.name;

    var image = document.createElement('img');
    image.src = elem.colour;
    // console.log(image)
    
//    card.append(image)
    document.querySelector('#img').append(image)

})
}

