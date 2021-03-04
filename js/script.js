function Mudarestado(el, eu, form, formlog, divform, divlog) {
        var display = document.getElementById(el).style.display;

        if(display == "none"){
            document.getElementById(el).style.display = 'block';
            document.getElementById(eu).style.display = 'none';

            document.getElementById(form).style.opacity = 1;
            document.getElementById(formlog).style.opacity = 0;

            document.getElementById(divform).style.width = "100%";

            document.getElementById(divlog).style.width = 0;

            document.getElementById(formlog).style.left = "999px";

            document.getElementById(form).style.left = 0;
            
        }
        else {
          
            document.getElementById(el).style.display = 'none';
            document.getElementById(eu).style.display = 'block';

            document.getElementById(form).style.opacity = 0;
            
            document.getElementById(formlog).style.opacity = 1;

            document.getElementById(divform).style.width = 0;

            document.getElementById(form).style.left = "999px";

            document.getElementById(divlog).style.width = "100%";

            document.getElementById(formlog).style.left = 0;

        }
    }