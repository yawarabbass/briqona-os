/* =====================================================
   BRIQONA OS — REGISTER PAGE SCRIPT
   ===================================================== */


document.addEventListener(
  "DOMContentLoaded",
  () => {


    const registerForm =
      document.getElementById("registerForm");


    if (!registerForm) {
      return;
    }



    registerForm.addEventListener(
      "submit",
      (event) => {


        event.preventDefault();



        const inputs =
          registerForm.querySelectorAll("input");



        const password =
          inputs[4].value;


        const confirmPassword =
          inputs[5].value;



        if (password !== confirmPassword) {

          alert(
            "Passwords do not match."
          );

          return;

        }




        const button =
          registerForm.querySelector(
            "button"
          );



        button.innerHTML =
          "Creating Account...";


        button.disabled = true;




        setTimeout(
          () => {


            button.innerHTML =
              "Account Created ✓";



            /*
              Future:
              Connect backend,
              database,
              email verification
              and payment flow here.
            */



          },
          1500
        );



      }
    );


  }
);
