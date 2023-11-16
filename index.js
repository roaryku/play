// function alert() {
//     Swal.fire({
//         title: "Done",
//         text: "Your information was submitted",
//         icon: "success"
//       });
// }
// alert();

// function alert(){
//     Swal.fire({
//         title: "The Internet?",
//         text: "That thing is still around?",
//         icon: "success"
//       });
// }
// alert();

const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random() * 20) + 1;

input.addEventListener("keypress", function(e) {
    if(e.keyCode === 13) 
       play();
})

button.addEventListener("click", play);

function play () {
    const userNumber = document.querySelector("#guess").value;
    if(userNumber < 1 || userNumber > 20) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Type a number from 1 to 20!",
        });
    }

    else if (isNaN (userNumber)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Type a number",
        }); 
    }

    else{
        if (userNumber < answer) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Choose bigger number",
            });  
        }
        else if(userNumber > answer) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Choose smaller number",
                });  
            }
            else{
                Swal.fire({
                    title: "Congradulation!",
                    text: "Your win!!!",
                    icon: "success"
                });
                    
            }
        }
    }