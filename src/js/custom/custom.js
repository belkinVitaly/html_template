 $( function() {
    $( "#datepicker" ).datepicker({
        minDate: 0,
        changeMonth: true,
        changeYear: true
    });
     $(window).resize(function(){
         $( "#datepicker" ).datepicker('hide');
     })
  } );
$(function() {


    $.widget( "app.autocomplete", $.ui.autocomplete, {

        // Which class get's applied to matched text in the menu items.

        _renderItem: function( ul, item ) {

            // Replace the matched text with a custom span. This
            // span uses the class found in the "highlightClass" option.
            var re = new RegExp( "(" + this.term + ")", "gi" ),
                cls = this.options.highlightClass,
                template = "<span class='" + cls + "'>$1</span>",
                label = item.label.replace( re, template ),
                $li = $( "<li/>" ).appendTo( ul );

            // Create and return the custom menu item content.
            $( "<span/>" ).html( label ).appendTo( $li );

            return $li;

        }
    });



    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];

    $("#tags").autocomplete({
        source: availableTags,
        highlightClass: "auto-matches",
        appendTo: "#js-autocomplete-wrapper"
    });

});