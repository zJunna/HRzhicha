window.onpageshow = function(event){
  if (event.persisted) {
      window.location.reload();
  }
} 
$(function(){ 
              var work_color=localStorage.getItem("work_color");
              var work_html=localStorage.getItem("work_html1");
              var workPos_color=localStorage.getItem("workPos_color");
              var workPos_html=localStorage.getItem("workPos_html");
              var workPos_mark=localStorage.getItem("workPos_mark");
              var workcontent_color=localStorage.getItem("workcontent_color");
              var work_content1=localStorage.getItem("work_content1");
              var work_content2=localStorage.getItem("work_content2");
              var date_html=localStorage.getItem("date_html");
              var date_html1=localStorage.getItem("date_html1");
               if(work_html!=null){
                    $("#company_val").css("color",work_color);
                    $("#company_val").html(work_html);
                  }
                   if(workPos_html!=null){
                        $("#position_id").css("color",workPos_color);
                      $("#position_id").html(workPos_html);
                      }
                        if(workPos_mark!=null){
                      $("#position_id").attr("mark",workPos_mark);
                      }
                       if(work_content1!=null){
                    $("#work_val").css("color",workcontent_color);
                    $("#work_val").html(work_content1);
                  }
                  if(work_content2!=null){
                      $("#content").val(work_content2);
                    }
                    if(date_html!=null){
                    $("#kinerDatePickerInput1").html(date_html);
                  }
                   if(date_html1!=null){
                    $("#kinerDatePickerInput2").html(date_html1);
                  }
})