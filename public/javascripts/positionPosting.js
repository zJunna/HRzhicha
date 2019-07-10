window.onpageshow = function(event){
  if (event.persisted) {
      window.location.reload();
  }
}
	$(function(){
	  var city_color=localStorage.getItem("city_color");
	  var city_html=localStorage.getItem("city_html");
      var city_mark=localStorage.getItem("city_mark");
      var workPos_color=localStorage.getItem("workPos_color");
      var workPos_html=localStorage.getItem("workPos_html");
      var workPos_mark=localStorage.getItem("workPos_mark");
       var salaryRange_color=localStorage.getItem("salaryRange_color");
	  var salaryRange_html=localStorage.getItem("salaryRange_html");
      var salaryRange_mark=localStorage.getItem("salaryRange_mark");
       var minEducation_color=localStorage.getItem("minEducation_color");
      var minEducation_html=localStorage.getItem("minEducation_html");
      var minEducation_mark=localStorage.getItem("minEducation_mark");
       var sex_color=localStorage.getItem("sex_color");
      var sex_html=localStorage.getItem("sex_html");
      var sex_mark=localStorage.getItem("sex_mark");
      var age_color=localStorage.getItem("age_color");
      var age_html=localStorage.getItem("age_html");
      var age_mark=localStorage.getItem("age_mark");
       var status_color=localStorage.getItem("status_color");
      var status_html=localStorage.getItem("status_html");
      var status_mark=localStorage.getItem("status_mark");
		        if(city_html!=null){
                  $("#cityname").html(city_html);
                  $("#cityname").css("color",city_color);
                  }
                    if(city_mark!=null){
                  $("#city").attr("mark",city_mark);
                  }
                   if(workPos_html!=null){
                        $("#position_id").css("color",workPos_color);
                      $("#position_id").html(workPos_html);
                      }
                        if(workPos_mark!=null){
                      $("#position_id").attr("mark",workPos_mark);
                      }
                       if(salaryRange_html!=null){
                        $("#salaryRange_name").css("color",salaryRange_color);
                      $("#salaryRange_name").html(salaryRange_html);
                      }
                        if(salaryRange_mark!=null){
                      $("#salaryRange_name").attr("mark",salaryRange_mark);
                      }
                      if(minEducation_html!=null){
                        $("#minEducation_name").css("color",minEducation_color);
                        $("#minEducation_name").html(minEducation_html);
                      }
                        if(minEducation_mark!=null){
                      $("#minEducation_name").attr("mark",minEducation_mark);
                      }
                        if(sex_html!=null){
                        $("#sex_name").css("color",sex_color);
                        $("#sex_name").html(sex_html);
                      }
                        if(sex_mark!=null){
                      $("#sex_name").attr("mark",sex_mark);
                      }
                       if(age_html!=null){
                        $("#age_name").css("color",age_color);
                        $("#age_name").html(age_html);
                      }
                        if(age_mark!=null){
                      $("#age_name").attr("mark",age_mark);
                      }
                       if(status_html!=null){
                        $("#status_name").css("color",status_color);
                        $("#status_name").html(status_html);
                      }
                        if(status_mark!=null){
                      $("#status_name").attr("mark",status_mark);
                      }
	})