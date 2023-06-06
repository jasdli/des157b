(function() {
    'use strict';
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

  const coffeeMarker = L.marker([38.544123,-121.7391475], { icon: coffeeIcon });
  coffeeMarker.addTo(map);
  coffeeMarker.addEventListener('click', function(){
    showPopupContent("<strong>Restaurant:</strong> Temple Coffee<br><strong>Address:</strong> 239 G St, Davis, CA 95616 <img src='images/temple.jpeg'> <strong>Reason:</strong> Temple Coffee embraces a vegan-friendly approach by offering delectable vegan pastries and a variety of plant-based milks. They prioritize sustainability by utilizing organic ingredients and using reusable or recyclable materials. Temple Coffee's commitment extends to their 'Return to Origin' (RTO) program, ensuring a fair distribution of coffee bean retail prices to support farmers and the entire supply chain");
  });

  const cafeMarker = L.marker([38.5431628,-121.738657], { icon: coffeeIcon });
  cafeMarker.addTo(map);
  cafeMarker.addEventListener('click', function(){
    showPopupContent("<strong>Restaurant:</strong> Three Ladies Cafe<br><strong>Address:</strong> 130 G St Suite A, Davis, CA 95616");
  });

  /*marker.bindPopup("<b>temple coffee</b><br>239 G St, Davis, CA 95616").openPopup();*/
  const riceIcon = L.icon({
    iconUrl: 'images/.png',
    iconSize: [38, 25],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76]
  });

  /*const riceMarker = L.marker([38.5598886,-121.7569803], { icon: riceIcon });
  riceMarker.addTo(map);
  riceeMarker.addEventListener('click', function(){
    showPopupContent("<strong>Restaurant:</strong>Chickpeas Kitchen<br><strong>Address:</strong> 640 W Covell Blvd, Davis, CA 95616, USA");
  });*/


  const noodleIcon = L.icon({
    iconUrl: 'images/noodle.png',
    iconSize: [78, 65],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76]
  });

  const noodleMarker = L.marker([38.5464673,-121.7400401], { icon: noodleIcon });
  /*marker.bindPopup("<b>lazi cow</b><br>407 G St #4, Davis, CA 95616").openPopup();*/
  noodleMarker.addTo(map);
  noodleMarker.addEventListener('click', function() {
    showPopupContent("<strong>Restaurant:</strong> Lazi Cow<br><strong>Address:</strong> 407 G St #4, Davis, CA 95616 <img src='images/1.jpeg'><strong>Reason:</strong> Lazi Cow is an authentic East/Southeast Asian food restaurant with a dedicated vegan menu called Chay Corner. Enjoy locally-sourced vegan options such as fresh bread, spring rolls, pho, and banh mi sandwiches. ");
  });
  
  const sandwichIcon = L.icon({
    iconUrl: 'images/sandwich.png',
    iconSize: [68, 45],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76]
  });
  const sandwichMarker = L.marker([38.543598, -121.739962], { icon: sandwichIcon });
  /*marker.bindPopup("<b>ike's sandwiches</b><br>212 F St b, Davis, CA 95616").openPopup();*/
  sandwichMarker.addTo(map);
  sandwichMarker.addEventListener('click', function() {
  showPopupContent("<strong>Restaurant:</strong> Ike's Sandwiches<br><strong>Address:</strong> 212 F St b, Davis, CA 95616");
});

  const pizzaIcon = L.icon({
    iconUrl: 'images/pizza.png',
    iconSize: [48, 35],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76]
  });
  const pizzaMarker = L.marker([38.5441597, -121.7389437], { icon: pizzaIcon });
  /*marker.bindPopup("<b>Woodstock Piza Davis</b><br> 238 G St, Davis, CA 95616").openPopup();*/
  pizzaMarker.addTo(map);
  pizzaMarker.addEventListener('click', function() {
  showPopupContent("Restaurant: Woodstock Pizza Davis<br>Address: 238 G St, Davis, CA 95616");
});

const pizza2Marker = L.marker([38.543543,-121.738813], { icon: pizzaIcon });
pizza2Marker.addTo(map);
pizza2Marker.addEventListener('click', function() {
showPopupContent("<strong>Restaurant:</strong>Village Bakery, Davis<br><strong>Address:</strong> Chamber of Commerce, 814 2nd St, Davis, CA 95616");
});

function showPopupContent(content) {
  const popupElement = document.querySelector('#popup-content');
  popupElement.innerHTML = content;
}
  })();
  AOS.init();


  function toggleContent() {
    var content = document.querySelector('#seal-connection .content');
    var button = document.querySelector('#read-more-button');
    
    content.classList.toggle('show');
    if (content.classList.contains('show')) {
      button.textContent = 'Read Less';
    } else {
      button.textContent = 'Read More';
    }
  }
  