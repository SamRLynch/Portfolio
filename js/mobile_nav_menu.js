    function myFunction() {
        var x = document.getElementById("myMobilenav");
        if (x.className === "mobilenav") { x.className += " responsive"; } else { x.className = "mobilenav"; }
    }

    function nav_close() {
        var x = document.getElementById("myMobilenav");
        if (x.className === "mobilenav") {
            x.className += " nav_close";
        } else {
            x.className = "mobilenav";
        }
    }
