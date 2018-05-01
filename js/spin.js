(function($){

        $(document).ready(function() {
            $.ajax({
                type: "GET",
                url: "http://localhost/cross.php?currency=USD&value=100",
                dataType    : 'text',
                success: function(html) {
                    alert(html);
                }
            });
        });
    })(jQuery);