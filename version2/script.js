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


