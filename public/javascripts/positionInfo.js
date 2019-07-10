window.onpageshow = function(event){
  if (event.persisted) {
      window.location.reload();
  }
} 
	$(function(){ 
	          var position_color=localStorage.getItem("position_color");
              var position_html=localStorage.getItem("position_html1");
              var position_mark=localStorage.getItem("position_mark1");
              var positioncity_color=localStorage.getItem("positioncity_color");
              var positioncity_html=localStorage.getItem("positioncity_html1");
              var positioncity_mark=localStorage.getItem("positioncity_mark1");
              var salary_color=localStorage.getItem("salary_color");
              var salary_html=localStorage.getItem("salary_html");
              var salary_mark=localStorage.getItem("salary_mark");
              var current_color=localStorage.getItem("current_color");
              var current_html=localStorage.getItem("current_html");
              var current_mark=localStorage.getItem("current_mark");
                  if(position_html!=null){
                    $("#position_val").css("color",position_color);
                  $("#position_val").html(position_html);
                  }
                    if(position_mark!=null){
                  $("#position_id").attr("mark",position_mark);
                  }
                    if(positioncity_html!=null){
                    $("#city_val").css("color",positioncity_color);
                  $("#city_val").html(positioncity_html);
                  }
                    if(positioncity_mark!=null){
                  $("#city_id").attr("mark",positioncity_mark);
                  }
                    if(salary_html!=null){
                        $("#salary_name").css("color",salary_color);
                      $("#salary_name").html(salary_html);
                      }
                        if(salary_mark!=null){
                      $("#salary_name").attr("mark",salary_mark);
                      }
                        if(current_html!=null){
                            $("#current_name").css("color",current_color);
                          $("#current_name").html(current_html);
                          }
                            if(current_mark!=null){
                          $("#current_name").attr("mark",current_mark);
                          }
	})