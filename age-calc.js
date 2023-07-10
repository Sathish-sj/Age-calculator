 <script>
        var currentPageUrl = window.location.href;
        var calcLink = document.getElementById("calc-link");
        var bmiLink = document.getElementById("bmi-link");
        var ageLink = document.getElementById("age-link");
        var aboutLink = document.getElementById("about-link");

        if (currentPageUrl.includes("index.html")) 
        {
        calcLink.classList.add("active");
        } else if (currentPageUrl.includes("bmi.html")) {
        bmiLink.classList.add("active");
        } else if (currentPageUrl.includes("age_calc.html")) {
        ageLink.classList.add("active");
        } else if (currentPageUrl.includes("about.html")) {
        aboutLink.classList.add("active");
        }



        let userName = document.querySelector("#name");
        let userDOB = document.querySelector("#dob");
        let popup = document.querySelector("#Mymodal");
        function calc() {
            if(userDOB.value == "") {
                document.querySelector(".Popup-text").innerHTML = "Choose a date to calculate";
                popup.style.display = "block";
            }

            else if (userName.value =="") {
                document.querySelector(".Popup-text").innerHTML = "Your name please!";
                popup.style.display = "block";
            }

            else {
                age_calc();
            }
        }
        
        function age_calc() {

            let dob = new Date(userDOB.value);
            let month_diff = Date.now() - dob.getTime();
            let age_diff = new Date(month_diff);
            let year = age_diff.getUTCFullYear();
            let month = age_diff.getUTCMonth();
            let age = Math.abs(year - 1970);

            document.querySelector("#age-result").style.display = "block";
            document.querySelector(".age-text").innerHTML = "Hey " + userName.value + ",<span style='color: #ee1774;'> You are " + age + " years and " + month + " months old!</span>";
        }

    document.addEventListener("keydown", function(event) {
    const key = event.key;
    if(key === "Enter") {
        calc();    
    }
})

    let close = document.querySelector(".close")

    close.addEventListener("click", function(){
        popup.style.display = "none";
    } ) 

    window.onclick = function(event) {
        if (event.target == popup) {
        popup.style.display = "none";
        clr();
        }
    }

    </script>
