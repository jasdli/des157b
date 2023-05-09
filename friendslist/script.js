// JS here
Parse.initialize("uTzhBbNOtemishzIVAZ65SEAkcK7oeI6TvEE1KHC","RynaU1vLGLGJy02mMY8L0SzSWgbQJt3BlDUO4YDr"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/'
const newBtn = document.getElementById("newbtn");
const editBtns = document.querySelectorAll(".fa-edit");
const addFriendForm = document.getElementById("add-friend");
const editFriendForm = document.getElementById("edit-friend");

async function displayFriends() {
    const friends = Parse.Object.extend('Friends');
    const query = new Parse.Query(friends);
    const results = await query.ascending('lname').find();
    console.log(results);
}

displayFriends();

newBtn.addEventListener("click", function(event){
    event.preventDefault();
    addFriendForm.className = "add-friend-onscreen";
})
addFriendForm.addEventListener("submit", function(event){
    event.preventDefault();
    addFriendForm.className = "add-friend-offscreen";
});

for(let i =0; i<editBtns.length; i++){
    editBtns[i].addEventListener("click", function(event){
        event.preventDefault();
        editFriendForm.className = "edit-friend-onscreen";
    })
}
editFriendForm.addEventListener("submit",  function(event){
    event.preventDefault();
    editFriendForm.className = "edit-friend-offscreen";
})