console.log("Start");
$('[for="media_photography"]').ready(function() {
  $('[for="media_photography"]').before(
    '\
        <label for="all_products" class="add-work-details__media-type">\
        <input name="work[media_codes][all_products]" type="hidden" value="0"><input id="all_products" type="checkbox" value="1" name="work[media_codes][all_products]"><span>ALL PRODUCTS</span>\
        </label>\
        \
        <label for="media_children" class="add-work-details__media-type">\
        <input name="work[media_codes][children]" type="hidden" value="0"><input id="media_children" type="checkbox" value="1" name="work[media_codes][children]"><span>CHILDREN</span>\
        </label>\
        \
        <label for="media_black_background" class="add-work-details__media-type">\
        <input name="work[media_codes][black_background]" type="hidden" value="0"><input id="media_black_background" value="2"  type="radio" name="color_sel"><span>BLACK BACKGROUND</span>\
        </label>\
        \
        <label for="custom_color" class="add-work-details__media-type">\
        <input name="work[media_codes][black_background]" type="hidden" value="0"><input id="custom_color" value="3"  type="radio" name="color_sel"><span>CUSTOM COLOR</span>\
        </label>\
        \
        <label for="media_white_background" class="add-work-details__media-type">\
        <input name="work[media_codes][white_background]" type="hidden" value="0"><input id="media_white_background" value="1" checked type="radio" name="color_sel"><span>WHITE BACKGROUND</span>\
        </label>\
    '
  );
});
$('[for="media_digital"]').ready(function() {
  $('[for="media_digital"]').after(
    '\
        <label for="adults_only" class="add-work-details__media-type">\
        <input name="work[media_codes][adults_only]" type="hidden" value="0"><input id="adults_only" type="checkbox" value="1" name="work[media_codes][adults_only]"><span>Adults Only</span>\
        </label>\
'
  );
});

//

//Mouse click simulate
const mouse_action_all = (obj, evt) => {
  // console.log(obj.find("div"));
  // obj.find("div").each(function() {
    // if ($(this).attr("class") != "sp-color") {
      var e = new jQuery.Event("click");
      e.pageX = $(obj).offset().left + 100;
      e.pageY = $(obj).offset().top + 100;
      $(obj).trigger(e);
      var e = new jQuery.Event("mousedown");
      e.pageX = $(obj).offset().left + 100;
      e.pageY = $(obj).offset().top + 100;
      $(obj).trigger(e);
      var e = new jQuery.Event("mouseup");
      e.pageX = $(obj).offset().left + 100;
      e.pageY = $(obj).offset().top + 100;
      $(obj).trigger(e);
      var e = new jQuery.Event("touchstart");
      e.pageX = $(obj).offset().left + 100;
      e.pageY = $(obj).offset().top + 100;
      $(obj).trigger(e);
    // }else alert($(this).attr("class"));
  // });
};







function simulate(element, eventName)
{
    var options = extend(defaultOptions, arguments[2] || {});
    var oEvent, eventType = null;
    console.log(element,eventName,options);

    for (var name in eventMatchers)
    {
        if (eventMatchers[name].test(eventName)) { eventType = name; break; }
    }

    if (!eventType)
        throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

    if (document.createEvent)
    {
        oEvent = document.createEvent(eventType);
        if (eventType == 'HTMLEvents')
        {
            oEvent.initEvent(eventName, options.bubbles, options.cancelable);
        }
        else
        {
            oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
            options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
            options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
        }
        element.dispatchEvent(oEvent);
    }
    else
    {
        options.clientX = options.pointerX;
        options.clientY = options.pointerY;
        var evt = document.createEventObject();
        oEvent = extend(evt, options);
        element.fireEvent('on' + eventName, oEvent);
    }
    return element;
}

function extend(destination, source) {
    for (var property in source)
      destination[property] = source[property];
    return destination;
}

var eventMatchers = {
    'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
    'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
}
var defaultOptions = {
    pointerX: 0,
    pointerY: 0,
    button: 0,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    bubbles: true,
    cancelable: true
}







$(document).ready(function() {
  $(document).on("click", "#all_products", function() {
    Toggle_enable($(this).is(":checked"), false);
  });

  $(document).on("click", "#media_children", function() {
    $("li[data-product-type='kids-clothes']")
      .children("div")
      .first()
      .trigger("click");
  });

  $(document).on("click", "#adults_only", function() {
    Toggle_enable($(this).is(":checked"), true);
  });

  $(document).on("click", "#media_black_background", function(e) {
    Change_Product_color(135,138);
  });

  $(document).on("click", ".sp-color", function(e) {
    let lx = e.pageX - $(this).offset().left,
      ly = e.pageY - $(this).offset().top;
      console.log("click" + lx + ":" + ly);

  });
  $(document).on("mousedown", ".sp-color", function(e) {
    let lx = e.pageX - $(this).offset().left,
      ly = e.pageY - $(this).offset().top;
      console.log("mousedown" + lx + ":" + ly);
  });
  $(document).on("touchstart", ".sp-color", function(e) {
    let lx = e.pageX - $(this).offset().left,
      ly = e.pageY - $(this).offset().top;
      console.log("mousedown" + lx + ":" + ly);
  });
  $(document).on("touchend", ".sp-color", function(e) {
    let lx = e.pageX - $(this).offset().left,
      ly = e.pageY - $(this).offset().top;
      console.log("mousedown" + lx + ":" + ly);
  });
  $(document).on("mouseup", ".sp-color", function(e) {
    let lx = e.pageX - $(this).offset().left,
      ly = e.pageY - $(this).offset().top;
    console.log("mouseup" + lx + ":" + ly);
  });
  $(document).on("click", "#custom_color", function(e) {
    alert(e);
  });
  
  App_logic();
});

const App_logic = () => {
  Update_all_products_btn();
  Update_children_btn();
  Update_adults_only();
  setTimeout(App_logic, 50);
};

const Toggle_enable = (val, adults) => {
  $("li[data-product-type]").each(function() {
    if (adults && val) {
      if ($(this).attr("data-product-type") == "kids-clothes") {
        if ($(this).hasClass("enabled") == true)
          $(this)
            .children("div")
            .first()
            .trigger("click");
        return;
      } else if (!val) return;
    }
    if (val != $(this).hasClass("enabled")) {
      $(this)
        .children("div")
        .first()
        .trigger("click");
    }
  });
};
const Update_all_products_btn = () => {
  if ($("li[data-product-type]:not(.enabled)").length == 0) {
    $("#all_products").prop("checked", true);
  } else $("#all_products").removeAttr("checked");
};
const Update_children_btn = () => {
  if ($("li[data-product-type='kids-clothes']").hasClass("enabled")) {
    $("#media_children").prop("checked", true);
  } else $("#media_children").removeAttr("checked");
};
const Update_adults_only = () => {
  if (
    $("li[data-product-type]:not(.enabled)").length == 1 &&
    $("li[data-product-type='kids-clothes']").hasClass("enabled") == false
  ) {
    $("#adults_only").prop("checked", true);
  } else $("#adults_only").removeAttr("checked");
};

const Change_Product_color = (ent) => {
  new Promise(function(resolve, reject) {
    let cnt = 0;
    $(".sp-replacer.sp-light").each(function() {
      $(this).trigger("click"); // (*)
      cnt++;
    });
    resolve(cnt);
  })
    .then(function(result) {
      // (**)
      // 134.390625 136.125
      // alert(result); // 1    top: 4888.88px;  left: 1092.61px;
      $(".sp-color").each(function() {
        // console.log(
        //   { left: ent.pageX - 133, top: ent.pageY - 135 },
        //   this,
        //   ":",
        //   $(this)
        //     .parents(".sp-container")
        //     .eq(0).html()
        // );
        $(this)
          .parents(".sp-container")
          .eq(0)
          .css({ left:  - 1000, top:  - 1000 })
          .removeClass("sp-hidden");
        simulate(this,"mousedown",{ pointerX: $(this).offset().left + 135, pointerY: $(this).offset().top + 138 });
        simulate(this,"mouseup",{ pointerX: $(this).offset().left + 135, pointerY: $(this).offset().top + 138 });
      });
      return result * 2;
    })
    .then(function(result) {
      // (***)

      // alert(result); // 2
      return result * 2;
    })
    .then(function(result) {
      // alert(result); // 4
      return result * 2;
    });
    $(".body_color_black").each(function(){
      $(this).trigger("click");
    });
    $(".react_color_black").each(function(){
      $(this).trigger("click");
    });
};
