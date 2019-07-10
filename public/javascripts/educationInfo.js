window.onpageshow = function(event){
  if (event.persisted) {
      window.location.reload();
  }
} 
$(function(){ 
              var edname_color=localStorage.getItem("edname_color");
              var edname_html=localStorage.getItem("edname_html1");
              var education_color=localStorage.getItem("education_color");
              var education_html=localStorage.getItem("education_html");
              var education_mark=localStorage.getItem("education_mark");
              var specialty_color=localStorage.getItem("specialty_color");
              var specialty_html=localStorage.getItem("specialty_html1");
              var date_html=localStorage.getItem("date_html");
              var date_html1=localStorage.getItem("date_html1");
               if(edname_html!=null){
                    $("#name_val").css("color",edname_color);
                    $("#name_val").html(edname_html);
                  }
                   if(education_html!=null){
                        $("#education_name").css("color",education_color);
                      $("#education_name").html(education_html);
                      }
                        if(education_mark!=null){
                      $("#education_name").attr("mark",education_mark);
                      }
                       if(specialty_html!=null){
                    $("#specialty_val").css("color",specialty_color);
                    $("#specialty_val").html(specialty_html);
                  }
                    if(date_html!=null){
                    $("#kinerDatePickerInput1").html(date_html);
                  }
                   if(date_html1!=null){
                    $("#kinerDatePickerInput2").html(date_html1);
                  }
})