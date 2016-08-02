$(function(){
    transfer();
});

$('.unfollow-text').load(function(){
    transfer();
});

$('.following-text').load(function(){
    transfer();
});

function transfer(){
    $('.unfollow-text').each(function(i,elem) {
        if ($(elem).html().match(/解除/)) {
            $(elem).html("博士に送る");
        } else {
            $(elem).html("Transfer");
        }
    });
    $('.following-text').each(function(i,elem) {
        if ($(elem).html().match(/フォロー中/)) {
            $(elem).html("博士に送る");
        } else {
            $(elem).html("Transfer");
        }
    });
}
