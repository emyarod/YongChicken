/* globals ripples */

$(function (){

    ripples.init(".btn:not(.btn-link), .navbar a, .nav-tabs a, .withripple");

    // Add fake-checkbox to material checkboxes
    $(".checkbox > label > input").after("<span class=check></span>");

    // Add fake-radio to material radios
    $(".radio > label > input").after("<span class=ripple></span><span class=circle></span><span class=check></span>");

    // Add elements for material inputs
    $("input.form-control, textarea.form-control, select.form-control").each( function() {
        $(this).wrap("<div class=form-control-wrapper></div>");
        $(this).after("<span class=material-input></span>");
        if ($(this).hasClass("floating-label")) {
            var placeholder = $(this).attr("placeholder");
            $(this).attr("placeholder", null).removeClass("floating-label");
            $(this).after("<div class=floating-label>" + placeholder + "</div>");
        }
        if ($(this).val() === "") {
            $(this).addClass("empty");
        }

        if ($(this).parent().next().is("[type=file]")) {
            $(this).parent().addClass("fileinput");
            var $input = $(this).parent().next().detach();
            $(this).after($input);
        }
    });

    $(document).on("keyup change", ".form-control", function() {
        if ($(this).val() !== "") {
            $(this).removeClass("empty");
        } else {
            $(this).addClass("empty");
        }
    });
    $(document).on("keydown change", ".form-control", function() {
        $(this).removeClass("empty");
    });
    $(document)
    .on("focus", ".form-control-wrapper.fileinput", function() {
        $(this).find("input").addClass("focus");
    })
    .on("blur", ".form-control-wrapper.fileinput", function() {
        $(this).find("input").removeClass("focus");
    })
    .on("change", ".form-control-wrapper.fileinput [type=file]", function() {
        var value = "";
        $.each($(this)[0].files, function(i, file) {
            console.log(file);
            value += file.name + ", ";
        });
        value = value.substring(0, value.length - 2);
        if (value) {
            $(this).prev().removeClass("empty");
        } else {
            $(this).prev().addClass("empty");
        }
        $(this).prev().val(value);
    });
});

