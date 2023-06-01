(function() {
  'use strict';
  alert("Welcome to my food guide. My project is about recommending davis local restaurants to my audience. They can upload food images to the website,and users can view not only their own gallery but also browse through images uploaded by other users. (i am not finished with the gallery feature yet.)Task 1: explore the map, find and interact with the icons. Task 2: upload your images to the website. Task 3: Click the button to read the seal connection");
})();

Parse.initialize("PUqIfC6upxBMI8ktgDLqsT0r5mAF3ma1q1bdaKkb", "FlP4kl3OqVBnEJ0yteYIH4BFCyPKnYhcRhEdQlJx");

Parse.serverURL = 'https://parseapi.back4app.com/';

document.querySelector('#upload').addEventListener('submit', function(event){
    event.preventDefault();

    const fileUploadControl = document.querySelector('#fileupload');
    // this is a good place to collect data from the other fields
    if (fileUploadControl.files.length > 0) {
        const file = fileUploadControl.files[0];
        const name = fileUploadControl.files[0].name;
        const type = fileUploadControl.files[0].type;
        const size = fileUploadControl.files[0].size;
        if(size < 100000 && type == 'image/jpeg' || type == 'image/png' || type == 'image/webp'){
          uploadPhoto(name, file);
        } else {
          alert('the file is too big or is not a .jpg or .png file');
        }
    }
});

async function uploadPhoto(name, file){
    const newPhoto = new Parse.Object('uploads');
    newPhoto.set('filename', name);
    newPhoto.set('file', new Parse.File(name, file));
    //This is a good place to save data from the other fields to the database
    try {
      const result = await newPhoto.save();
      console.log(result.id);
      getNewPhoto(result.id);
    } catch (error) {
      console.error('Error while uploading the photo: ', error);
    }
}

async function getNewPhoto(photoId){
  const records = Parse.Object.extend('uploads');
  const query = new Parse.Query(records);
  query.equalTo("objectId", photoId);
  try{
    const results = await query.find();
    const photoURL = results[0].get('file').url();
    const photoName = results[0].get('filename');
    // This is a good place to get data from the database fields
    showUploadedPhoto(photoURL, photoName);
    // This is a good place to run a function that clears out the form, which you will write below.
  } catch (error) {
      console.error('Error while getting photo', error);
  } 
}

function showUploadedPhoto(photoURL, photoName){
  let html = `<p>You just uploaded ${photoName}:</p>`;
  html += `<img src="${photoURL}">`;
  // This is a good place to add more data to the HTML 
  document.querySelector('#uploaded-img').innerHTML = html;
}

// This is a good place to write a function that clears out the form.

//map
(function () {
  'use strict';
const map = L.map('map').setView([38.546719, -121.744339], 17);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const coffeeIcon = L.icon({
  iconUrl: 'images/cup.png',
  iconSize: [38, 25],
  iconAnchor: [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76]
});
L.marker([38.544123,-121.7391475], { icon: coffeeIcon }).addTo(map).bindPopup("<strong>Restaurant:</strong>temple coffee<strong>Address:</strong>239 G St, Davis, CA 95616");
/*marker.bindPopup("<b>temple coffee</b><br>239 G St, Davis, CA 95616").openPopup();*/

const noodleIcon = L.icon({
  iconUrl: 'images/noodle.png',
  iconSize: [78, 65],
  iconAnchor: [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76]
});
L.marker([38.5464673,-121.7400401], { icon: noodleIcon }).addTo(map).bindPopup("<strong>Restaurant:</strong>lazi cow <strong>Address:</strong>407 G St #4, Davis, CA 95616");
/*marker.bindPopup("<b>lazi cow</b><br>407 G St #4, Davis, CA 95616").openPopup();*/


const sandwichIcon = L.icon({
  iconUrl: 'images/sandwich.png',
  iconSize: [68, 45],
  iconAnchor: [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76]
});
L.marker([38.543598, -121.739962], { icon: sandwichIcon }).addTo(map).bindPopup("<strong>Restaurant:</strong> ike's sandwiches <strong>Address:</strong>212 F St b, Davis, CA 95616");
/*marker.bindPopup("<b>ike's sandwiches</b><br>212 F St b, Davis, CA 95616").openPopup();*/

const pizzaIcon = L.icon({
  iconUrl: 'images/pizza.png',
  iconSize: [48, 35],
  iconAnchor: [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76]
});
L.marker([38.5441597, -121.7389437], { icon: pizzaIcon }).addTo(map).bindPopup("<strong>Restaurant:</strong> Woodstock Piza Davis <strong>Address:</strong>238 G St, Davis, CA 95616");
/*marker.bindPopup("<b>Woodstock Piza Davis</b><br> 238 G St, Davis, CA 95616").openPopup();*/
})();
AOS.init();