 $(document).ready(function() {
    if (navigator.userAgent.indexOf("Firefox") !== -1) {
        $('.highlighttable').each(function(i, element) {
            var newTable = $('<div class="highlighttable">').html($(element).html());
            $(element).replaceWith(newTable);
        });
     }
 });