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


});
$('[for="media_digital"]').ready(function () {
    $('[for="media_digital"]').after('\
        <label for="adults_only" class="add-work-details__media-type">\
        <input name="work[media_codes][adults_only]" type="hidden" value="0"><input id="adults_only" type="checkbox" value="1" name="work[media_codes][adults_only]"><span>Adults Only</span>\
        </label>\
')

});
$(document).ready(function(){

    $( document ).on( "click", "#all_products", function() {
        Toggle_enable($(this).is(":checked"),false);
    });
    $( document ).on( "click", "#media_children", function() {
        $("li[data-product-type='kids-clothes']").children('div').first().trigger("click");
    });
    $( document ).on( "click", "#adults_only", function() {
        Toggle_enable($(this).is(":checked"),true);
    });
    App_logic();
});

const App_logic = ()=>{
    Update_all_products_btn();
    Update_children_btn();
    Update_adults_only();
    setTimeout(App_logic,50);
}


const Toggle_enable = (val,adults) =>{
    $("li[data-product-type]").each(function(){
        if(val != $(this).hasClass("enabled")){
            $(this).children('div').first().trigger("click");
        }
    });
}
const Update_all_products_btn = ()=> {
    if($("li[data-product-type]:not(.enabled)").length == 0){
        $("#all_products").prop('checked', true);
    }else $("#all_products").removeAttr('checked');
}
const Update_children_btn = ()=> {
    if($("li[data-product-type='kids-clothes']").hasClass("enabled")){
        $("#media_children").prop('checked', true);
    }else $("#media_children").removeAttr('checked');
}
const Update_adults_only = ()=>{
    if($("li[data-product-type]:not(.enabled)").length == 1 && $("li[data-product-type='kids-clothes']").hasClass("enabled") == false){
        $("#adults_only").prop('checked', true);
    }else $("#adults_only").removeAttr('checked');
}