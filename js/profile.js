var thread=document.getElementById("p-threads");
var replies=document.getElementById("p-replies");
var reposts=document.getElementById("p-reposts");
var thread_btn=document.getElementById("thread-btn");
var replies_btn=document.getElementById("reply-btn");
var reposts_btn=document.getElementById("repost-btn");


thread_btn.addEventListener("click",function(){
    thread.classList.remove("hidden");
    thread.classList.add("shown");
    replies.classList.remove("shown");
    replies.classList.add("hidden");
    reposts.classList.remove("shown");
    reposts.classList.add("hidden");
    
    thread_btn.classList.add("active-tab");
    replies_btn.classList.remove("active-tab");
    reposts_btn.classList.remove("active-tab");

});

replies_btn.addEventListener("click",function(){

    thread.classList.remove("shown");
    thread.classList.add("hidden");
    replies.classList.remove("hidden");
    replies.classList.add("shown");
    reposts.classList.remove("shown");
    reposts.classList.add("hidden");
    
    thread_btn.classList.remove("active-tab");
    replies_btn.classList.add("active-tab");
    reposts_btn.classList.remove("active-tab");

});

reposts_btn.addEventListener("click",function(){
    thread.classList.remove("shown");
    thread.classList.add("hidden");
    replies.classList.remove("shown");
    replies.classList.add("hidden");
    reposts.classList.remove("hidden");
    reposts.classList.add("shown");
    
    thread_btn.classList.remove("active-tab");
    replies_btn.classList.remove("active-tab");
    reposts_btn.classList.add("active-tab");

}
);