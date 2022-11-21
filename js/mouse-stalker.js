var circle = $("#mouse-stalker");

function moveCircle(e) {
  TweenLite.to(circle, 0.7, {
    css: {
      left: e.pageX,
      top: e.pageY,
    },
  });
}

$(window).on("mousemove", moveCircle);
