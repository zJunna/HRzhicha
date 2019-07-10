	window.onpageshow = function(event){
  if (event.persisted) {
      window.location.reload();
  }
} 
$(function(){
                  var race_color=localStorage.getItem("race_color");
                  var race_html=localStorage.getItem("race_html");
                  var race_mark=localStorage.getItem("race_mark");
                  var city_color=localStorage.getItem("city_color");
                  var city_html=localStorage.getItem("city_html");
                  var city_mark=localStorage.getItem("city_mark");
                  var marital_color=localStorage.getItem("marital_color");
                  var marital_html=localStorage.getItem("marital_html");
                  var marital_mark=localStorage.getItem("marital_mark");
                  var height_color=localStorage.getItem("height_color");
                  var height_html=localStorage.getItem("height_html");
                  var height_mark=localStorage.getItem("height_mark");
                  var weight_color=localStorage.getItem("weight_color");
                  var weight_html=localStorage.getItem("weight_html");
                  var weight_mark=localStorage.getItem("weight_mark");
                  var email_color=localStorage.getItem("email_color");
                  var email_html=localStorage.getItem("email_html");
                  var email_mark=localStorage.getItem("email_mark");
                  if(race_color!=null){
                  $("#racename").css("color",race_color);
                  }
                    if(race_html!=null){
                  $("#racename").html(race_html);
                  }
                    if(race_mark!=null){
                  $("#race_id").attr("mark",race_mark);
                  }
                   if(city_html!=null){
                  $("#cityname").html(city_html);
                  $("#cityname").css("color",city_color);
                  }
                    if(city_mark!=null){
                  $("#city").attr("mark",city_mark);
                  }
                    if(marital_html!=null){
                  $("#marital_name").html(marital_html);
                  $("#marital_name").css("color",marital_color);
                  }
                    if(marital_mark!=null){
                  $("#marital_name").attr("mark",marital_mark);
                  }
                    if(height_html!=null){
                  $("#height_name").html(height_html);
                   $("#height_name").css("color",race_color);
                  }
                    if(height_mark!=null){
                  $("#height_name").attr("mark",height_mark);
                  }
                    if(weight_html!=null){
                  $("#weight_name").html(weight_html);
                   $("#weight_name").css("color",weight_color);
                  }
                    if(weight_mark!=null){
                  $("#weight_name").attr("mark",weight_mark);
                  }
                  if(email_html!=null){
                  $("#email_val").html(email_html);
                   $("#email_val").css("color",email_color);
                  }
                  if(email_mark!=null){
                  $("#email").attr("mark",email_mark);
                  }
            })