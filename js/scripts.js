$(function() {
    $(".left.pane").resizable({

        handles: "e, w",
        create: function( event, ui ) {
            // Prefers an another cursor with two arrows
            $(".ui-resizable-e").css("cursor","col-resize");
        },
        stop: function(event, ui) {
            setWidthInPercent(ui.element);
        }
    });
    $(".right.pane").resizable({
        handles: "e, w",
        resize: function(event, ui) {
            ui.position.left = 0;
        },
        create: function( event, ui ) {
            // Prefers an another cursor with two arrows
            $(".ui-resizable-w").css("cursor","col-resize");
        },
        stop: function(event, ui) {
            setWidthInPercent(ui.element);
        }
    });
    $(".top-content").resizable({
        handles: "s",
        create: function( event, ui ) {
            // Prefers an another cursor with two arrows
            $(".ui-resizable-s").css("cursor","row-resize");
        },
        stop: function(event, ui) {
            ui.element.width("");
        }
    });
  
    function setWidthInPercent(element) {
        var percentageWidth = (element.width() / element.parent().width()) * 100;
        if (percentageWidth >= 50) percentageWidth = 48;
        else if (percentageWidth <= 5) percentageWidth = 7;
        element.width(percentageWidth + '%');
    }
  });
  