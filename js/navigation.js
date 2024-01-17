var profile_btn=document.getElementById("n-profile-btn");
var home_btn=document.getElementById("n-home-btn");

var profile_icon=document.getElementById("n-profile-icon");
var home_icon=document.getElementById("n-home");

//sections
var home_section=document.getElementById("homepage");
var profile_section=document.getElementById("profilepage");


profile_btn.addEventListener("click",function(){
    //changing the home icon
home_icon.classList.remove("active");
home_icon.classList.add("passive");
//changing the profile icon
profile_icon.classList.remove("passive");
profile_icon.classList.add("active");
//toggling the views
home_section.classList.remove("shown");
home_section.classList.add("hidden");

profile_section.classList.remove("hidden");
profile_section.classList.add("shown");
});

home_btn.addEventListener("click",function(){
    //changing the home icon
home_icon.classList.remove("passive");
home_icon.classList.add("active");
//changing the profile icon
profile_icon.classList.remove("active");
profile_icon.classList.add("passive");

//toggling the views
home_section.classList.remove("hidden");
home_section.classList.add("shown");

profile_section.classList.remove("shown");
profile_section.classList.add("hidden");

}
);