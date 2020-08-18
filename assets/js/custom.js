/*
=========================================
|                                       |
|           Scroll To Top               |
|                                       |
=========================================
*/ 
$('.scrollTop').click(function() {
    $("html, body").animate({scrollTop: 0});
});


$('.navbar .dropdown.notification-dropdown > .dropdown-menu, .navbar .dropdown.message-dropdown > .dropdown-menu ').click(function(e) {
    e.stopPropagation();
});

/*
=========================================
|                                       |
|       Multi-Check checkbox            |
|                                       |
=========================================
*/

function checkall(clickchk, relChkbox) {

    var checker = $('#' + clickchk);
    var multichk = $('.' + relChkbox);


    checker.click(function () {
        multichk.prop('checked', $(this).prop('checked'));
    });    
}


/*
=========================================
|                                       |
|           MultiCheck                  |
|                                       |
=========================================
*/

/*
    This MultiCheck Function is recommanded for datatable
*/

function multiCheck(tb_var) {
    tb_var.on("change", ".chk-parent", function() {
        var e=$(this).closest("table").find("td:first-child .child-chk"), a=$(this).is(":checked");
        $(e).each(function() {
            a?($(this).prop("checked", !0), $(this).closest("tr").addClass("active")): ($(this).prop("checked", !1), $(this).closest("tr").removeClass("active"))
        })
    }),
    tb_var.on("change", "tbody tr .new-control", function() {
        $(this).parents("tr").toggleClass("active")
    })
}

/*
=========================================
|                                       |
|           MultiCheck                  |
|                                       |
=========================================
*/

function checkall(clickchk, relChkbox) {

    var checker = $('#' + clickchk);
    var multichk = $('.' + relChkbox);


    checker.click(function () {
        multichk.prop('checked', $(this).prop('checked'));
    });    
}

/*
=========================================
|                                       |
|               Tooltips                |
|                                       |
=========================================
*/

$('.bs-tooltip').tooltip();

/*
=========================================
|                                       |
|               Popovers                |
|                                       |
=========================================
*/

$('.bs-popover').popover();


/*
================================================
|                                              |
|               Rounded Tooltip                |
|                                              |
================================================
*/

$('.t-dot').tooltip({
    template: '<div class="tooltip status rounded-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
})


/*
================================================
|            IE VERSION Dector                 |
================================================
*/

function GetIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");

  // If IE, return version number.
  if (Idx > 0) 
    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));

  // If IE 11 then look for Updated user agent string.
  else if (!!navigator.userAgent.match(/Trident\/7\./)) 
    return 11;

  else
    return 0; //It is not IE
}

$(document).on("click", "#insertdata", function(e){
	  var username = $('#username');
	   var password = $('#password');
	   var details ={'username':username,'password':password};
        
		$.ajax({
                url: 'crud.php?action=insert_users',
                type: 'POST',
                data: details,
                cache: false,
                success: function(data){
                    if (data != '0'){			
                      
						window.location.href="/aaa/index.php";
						
                    } 
                }
            })
           
});

$(document).on("click", "#update_all", function(e){
	 var username = $('#username');
	   var user_id = $('#user_id');
	   var details ={'username':username,'id':user_id};
        
		$.ajax({
                url: 'crud.php?action=update_users',
                type: 'POST',
                data: details,
                cache: false,
                success: function(data){
                    if (data != '0'){			
                      
						window.location.href="/aaa/index.php";
						
                    } 
                }
            })
});



$(document).on("click", ".delete_user", function(e){
	 var user_id = $(this).data('id');
	   var details ={'username':username,'id':user_id};
        
		$.ajax({
                url: 'crud.php?action=delete_users',
                type: 'POST',
                data: details,
                cache: false,
                success: function(data){
                    if (data != '0'){			
                      
						window.location.href="/aaa/index.php";
						
                    } 
                }
            })
});
