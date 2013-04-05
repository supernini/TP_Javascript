function move(element, axe_ref, length_name, limit, step) {
    if (step>=0 && element.position()[axe_ref]+step+element[length_name]() <= limit) {
        element.css(axe_ref, (element.position()[axe_ref] + step) + 'px');
        element.removeClass('choc');
        return true;
    } else if (step<0 && element.position()[axe_ref]+step >= limit) {
        element.css(axe_ref, (element.position()[axe_ref] + step) + 'px');
        element.removeClass('choc');
        return true;
    } else {
        if (step>=0) {
            element.css(axe_ref, (limit-element[length_name]())+'px');
        } else {
            element.css(axe_ref, limit+'px');
        }
        element.addClass('choc');
        return false;
    }
}

function move_auto(element, axe_ref, length_name, limit, step) {
    if (move(element, axe_ref, length_name, limit, step)==true) {
        var t=setTimeout(function(){move_auto(element, axe_ref, length_name, limit, step)}, 5);
    };
}

$(document).ready(function() {
    $("#square12").css("position", "absolute");
    $("#square12").css("left", "150px");
    $("#square12").css("top", "100px");
    var my_step = 10;


    $("#button1").click(function() {
        move($("#square12"), 'left', 'width', $(window).width(), my_step);
    })
    $("#button2").click(function(){
        move($("#square12"), 'left', 'width', 0, -my_step);
    });

    $("#button3").click(function(){
        move($("#square12"), 'top', 'height', 0, -my_step);
    });

    $("#button4").click(function(){
        move($("#square12"), 'top', 'height', $(window).height(), +my_step);
    });

    $("#goright").click(function(){
        move_auto($("#square12"), 'left', 'width', $(window).width(), 1);
    });

    $("#godown").click(function(){
        move_auto($("#square12"), 'top', 'height', $(window).height(), 1);
    });
});
