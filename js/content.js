console.log("Start");
$('[for="media_photography"]').ready(function () {
    $('[for="media_photography"]').before('\
        <label for="all_products" class="add-work-details__media-type">\
        <input name="work[media_codes][all_products]" type="hidden" value="0"><input id="all_products" type="checkbox" value="1" name="work[media_codes][all_products]"><span>ALL PRODUCTS</span>\
        </label>\
        \
        <label for="media_children" class="add-work-details__media-type">\
        <input name="work[media_codes][children]" type="hidden" value="0"><input id="media_children" type="checkbox" value="1" name="work[media_codes][children]"><span>CHILDREN</span>\
        </label>\
        \
        <label for="media_black_background" class="add-work-details__media-type">\
        <input name="work[media_codes][black_background]" type="hidden" value="0"><input id="media_black_background" type="checkbox" value="1" name="work[media_codes][black_background]"><span>BLACK BACKGROUND</span>\
        </label>\
        \
        <label for="media_white_background" class="add-work-details__media-type">\
        <input name="work[media_codes][white_background]" type="hidden" value="0"><input id="media_white_background" type="checkbox" value="1" name="work[media_codes][white_background]"><span>WHITE BACKGROUND</span>\
        </label>\
    ');

    console.log($('#media_wrapper').html());

});
$('[for="media_digital"]').ready(function () {
    $('[for="media_digital"]').after('\
        <label for="adults_only" class="add-work-details__media-type">\
        <input name="work[media_codes][adults_only]" type="hidden" value="0"><input id="adults_only" type="checkbox" value="1" name="work[media_codes][adults_only]"><span>Adults Only</span>\
        </label>\
')
console.log($('#media_wrapper').html());

});

$(document).ready(function(){
    $( document ).on( "change", "#all_products", function() {
        Toggle_enable($(this).is(":checked"));
    });
});

const Toggle_enable = (val) =>{
    let sel = ".rb-button.enable-all";
    if(!val) sel = ".rb-button.disable-all.green";
    $(sel).each(function(index){
        $(this).trigger("click");
    });
}