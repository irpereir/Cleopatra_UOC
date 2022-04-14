$(".imagen").mousemove(function(event) {
    var mousex = event.pageX - $(this).offset().left;
    var mousey = event.pageY - $(this).offset().top;
    var imagenx = (mousex - 300) / 40;
    var imageny = (mousey - 200) / 40;
    $(this).css("transform", "translate(" + imagenx + "px," + imageny + "px)");
});
$(".imagen").mouseout(function() {
    $(this).css("transform", "translate(0px,0px)");
});

//# sourceMappingURL=presentacion.488c51f5.js.map
