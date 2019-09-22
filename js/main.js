  
var script_url = "https://script.google.com/macros/s/AKfycbzegZl-ZdwhA52RQ44KNvCXyS8fSv6z8-J_Kd-kLQjEp6BjdI4/exec";



$("#submitIOT").click(function(event) {
    var masv =  $.trim($("#masv").val()).replace(/ /g,'');
    var lop = $.trim($("#lop").val()).replace(/ /g,'').toUpperCase();
    var email = $.trim($("#email").val()).replace(/ /g,'');
    var hovaten = $.trim($("#hovaten").val()).replace(/ /g,'');
    var url = script_url + "?callback=result&masv=" + masv + "&lop=" + lop + "&email=" + email +  "&hovaten=" + hovaten +"&action=register";
    if (masv == '' || lop == '' )
        return alert("Vui lòng điền thông tin Tên và Mã số sinh viên");
    var result = $(".input-group #email");
    result.text("");
      
    if (!validateEmail(email)) 
    {
        result.css("border-bottom", "1.5px solid red");
        result.val("");
        result.attr("placeholder","Vui lòng nhập đúng định dạng @mail.com");
        return;
    }
    document.querySelector('.is-loading').classList.remove('is-hidden');
    
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });

});
function result(e) {
    document.querySelector('.is-loading').classList.add('is-hidden');
    document.querySelector('.is-result').classList.remove('is-hidden');

    $("#text_result").html(e.result);
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}