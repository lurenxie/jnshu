var input1Value,input2Value,sendText;
$(document).ready(function () {
    $("#submitMassege").click(function () {
        var input1Value = $("#input1").val();
        var input2Value = $("#input2").val();
        var sendText={
            "name":input1Value,
            "pwd":input2Value
        };
        $.ajax({
            url: "/carrots-admin-ajax/a/login",
            type:"POST",
            data: sendText,
            async: false,
            success:function (result) {
                var response=JSON.parse(result);
                if (response.code==0){
                    alert("1");
                    window.location.href = "http://dev.admin.carrots.ptteng.com/#/dashboard";
                }
                else if (response.code=="-5003") {
                    // alert("1");
                }
                else if (response.code=="-5004") {
                    // alert("2");
                }
            }
        });
    });
});