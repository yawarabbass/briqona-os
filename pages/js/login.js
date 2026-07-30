/* =====================================================
   BRIQONA OS — LOGIN PAGE SCRIPT
   ===================================================== */


document.addEventListener(
  "DOMContentLoaded",
  () => {


    const loginForm =
      document.getElementById("loginForm");


    if (!loginForm) {
      return;
    }


    loginForm.addEventListener(
      "submit",
      (event) => {

        event.preventDefault();


        const button =
          loginForm.querySelector(
            "button"
          );


        button.innerHTML =
          "Signing in...";


        button.disabled = true;



        setTimeout(
          () => {

            button.innerHTML =
              "Login Successful ✓";


            /*
              Future:
              Connect backend authentication here
            */


          },
          1200
        );


      }
    );


  }
);
