const testimonials =[
    {
        name: "Ali Morshedlou",
        photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        text: "I love microsoft! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come.", 
    },
    {
        name: "Alexander Hipp",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
        text: "Microsoft makes me more productive and gets the job done in a fraction of the time. I'm glad I found Microsoft.",
    },   
       {
        name: "Christopher Campbell",
        photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        text: "Microsoft is the ultimate time saver for small business owners like me.",
    },
];

const imgEl = document.querySelector("img"); 
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTesimonial()

function updateTesimonial(){
    const {name, photoUrl, text} =
    testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++
    if(idx === testimonials.length){
       idx = 0; 
    }
    setTimeout(()=>{
        updateTesimonial()
    }, 10000)
}