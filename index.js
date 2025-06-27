let userInput = document.getElementById("date");
        userInput.max = new Date().toISOString().split("T")[0];
        let result = document.getElementById("result"); 
        let feed = document.getElementById("feed");

        function calculateAge(){
            let birthDate = new Date(userInput.value);

            let d1 = birthDate.getDate();
            let m1 = birthDate.getMonth() + 1;
            let y1 = birthDate.getFullYear();

            let today = new Date();

            let d2 = today.getDate();
            let m2 = today.getMonth() + 1;
            let y2 = today.getFullYear();

            let d3, m3, y3;

            y3 = y2 - y1;

            if(m2 >= m1){
                m3 = m2 - m1;
            }else{
                y3--;
                m3 = 12 + m2 - m1;
            }

            if (d2 >= d1){
                d3 = d2 - d1;
            }else{
                m3--;
                d3 = getDaysInMonth(y1, m1) + d2 - d1;
            }

            if(m3 < 0){
                m3 = 11;
                y3--;
            }
        
            feed.innerHTML = lifeInWeeks(y3);
            result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span> ${d3}</span> days old.`;
        }

        function getDaysInMonth(){
            return new Date(year, month, 0).getDate();
        }

        function lifeInWeeks(yourAge){
            let maxAge = 100;
            let timeLeftInYears = maxAge - yourAge;
            let timeLeftInDays = timeLeftInYears * 365;
            let timeLeftInWeeks = timeLeftInYears * 52;
            let timeLeftInMonths = timeLeftInYears * 12;
            let feedback = `You have <span>${timeLeftInDays}</span> days,  <span>${timeLeftInWeeks}</span> weeks, and <span>${timeLeftInMonths}</span> months left.`;
            return feedback;
}