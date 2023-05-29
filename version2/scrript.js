//map
/*const map = L.map('map').setView([38.546719, -121.744339], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker([38.5414, -121.7410]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>My Burma").openPopup();

const popup = L.popup()
    .setLatLng([38.544123,-121.7391475])
    .setContent("Temple Coffee Roaster at G street")
    .openOn(map);

    const circle = L.circle([38.54475754871805,-121.73894408741701], {
        color: 'greem',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 20
    }).addTo(map);
    circle.bindPopup("Woodstock Piza Davis");*/
//upload photos
//app id and js key from B4A
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


