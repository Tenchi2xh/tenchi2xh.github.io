$(document).ready(function() {
    $('body').append('<canvas id="zodiac" class="particleground">');
    new Zodiac('zodiac', {
        direction: [0, 1],
        bounce: [true, true],
        parallax: 0,
        density: 10000,
        proximity: 150,
        velocity: [[0.05, 0.1], [0.05, 0.1]],
        dotRadius: [0, 0],
        lineColor: '#f0f0f0',
        lineWidth: 1
    });
    if (navigator.userAgent.indexOf("Firefox") !== -1) {
        $('.highlighttable').each(function(i, element) {
            var newTable = $('<div class="highlighttable">').html($(element).html());
            $(element).replaceWith(newTable);
        });
    }
});