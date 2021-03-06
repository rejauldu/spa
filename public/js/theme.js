/*Number input should take only number. mozilla fix */
(function () {
    var selectors = document.querySelectorAll('input[type="number"]');
    for (let i = 0; i < selectors.length; i++) {
        setInputFilter(selectors[i], function (value) {
            return /^\d*\.?\d*$/.test(value); /* Allow digits and '.' only, using a RegExp */
        });
    }
})();
/* Restricts input for the given textbox to the given inputFilter function. */
function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
        textbox.addEventListener(event, function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    });
}
/* Display photo after selecting */
function displayPhotoOnSelect(input, id = 'display-photo-on-select') {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#' + id).attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
/* Form validation of the form with .needs-validation */
(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                /* was-validated is a bootstrap class */
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
/* Location control */
(function () {
    locationHandle('division', 'district', 'upazila', 'union', 'region');
    locationHandle('billing-division', 'billing-district', 'billing-upazila', 'billing-union', 'billing-region');
    locationHandle('shipping-division', 'shipping-district', 'shipping-upazila', 'shipping-union', 'shipping-region');
})();
function locationHandle(division, district, upazila, union, region) {
    var division_el = document.getElementById(division);
    var district_el = document.getElementById(district);
    var upazila_el = document.getElementById(upazila);
    var union_el = document.getElementById(union);
    var region_el = document.getElementById(region);
    if (division_el && district_el)
        division_el.addEventListener('change', function () {
            locationAjaxCall(division_el, district_el);
        });
    if (district_el && upazila_el)
        district_el.addEventListener('change', function () {
            locationAjaxCall(district_el, upazila_el);
        });
    if (division_el && region_el)
        division_el.addEventListener('change', function () {
            locationAjaxCall(division_el, region_el);
        });
    if (upazila_el && union_el)
        upazila_el.addEventListener('change', function () {
            locationAjaxCall(upazila_el, union_el);
        });
    if (union_el && region_el)
        union_el.addEventListener('change', function () {
            locationAjaxCall(union_el, region_el);
        });
}
function locationAjaxCall(item, child) {
    var base_url = $("meta[name=base-url]")[0].content;
    var id = item.id;
    id = id.replace("billing-", "");
    id = id.replace("shipping-", "");
    var c_id = child.id;
    c_id = c_id.replace("billing-", "");
    c_id = c_id.replace("shipping-", "");
    $.ajax({
        url: base_url + '/' + id + 's/' + item.value,
        success: function (result) {
            var options = result[0][c_id + 's'];
            var html = '<option value="0">--Select ' + c_id + '--</option>';
            options.forEach(function (entry) {
                html += '<option value="' + entry.id + '">' + entry.name + '</option>';
            });
            child.innerHTML = html;
        }
    });
}
/* Dropdowns filtering with two classes .derive-from (parent's id) in select, .derive-parent (parent option's value) in option */
(function () {
    var derives = document.querySelectorAll('[derive-from]');
    derives.forEach(function (item, index) {
        var id = item.getAttribute('derive-from');
        var options = item.options;
        for (let i = 0; i < options.length; i++) {
            options[i].classList.add('d-none');
        }
        var parent = document.getElementById(id);
        parent.addEventListener('change', function (e) {
            for (let i = 0; i < options.length; i++) {
                var value = parent.options[parent.selectedIndex].value;
                if (options[i].getAttribute('derive-parent') != value) {
                    options[i].classList.add('d-none');
                } else {
                    options[i].classList.remove('d-none');
                }
            }
        });
    });
})();
/* Multi handle slider starts */
(function() {
    multiHandleSlider();
})();
function multiHandleSlider() {
    var slides = document.getElementsByClassName("multi-handle-slider");
    if(!slides.length)
        return false;
    var handle1Clicked = false;
    var handle2Clicked = false;

    var slide = slides[0];

    for(let i=0; i<slides.length; i++) {
        slides[i].setAttribute("data-handle-1-position", updateHandle1(slides[i]));
        slides[i].setAttribute("data-handle-2-position", updateHandle2(slides[i]));
        slides[i].querySelector(".handle-1").addEventListener('mousedown', e => {
            slide = e.target.parentElement || e.srcElement.parentElement;
            handle1Clicked = true;
        });
        slides[i].querySelector(".handle-1").addEventListener('touchstart', e => {
            slide = e.target.parentElement || e.srcElement.parentElement;
            handle1Clicked = true;
        });
        slides[i].querySelector(".handle-2").addEventListener('mousedown', e => {
            slide = e.target.parentElement || e.srcElement.parentElement;
            handle2Clicked = true;
        });
        slides[i].querySelector(".handle-2").addEventListener('touchstart', e => {
            slide = e.target.parentElement || e.srcElement.parentElement;
            handle2Clicked = true;
        });
    }
    document.addEventListener('mousemove', event => {
        event = getMouseEvent(event);
        var left = slide.getBoundingClientRect().left;

        var position = event.pageX-left-10;
        if(handle1Clicked) {
            updateHandle1(slide, position);
        } else if(handle2Clicked) {
            updateHandle2(slide, position);
        }
    });
    document.addEventListener('touchmove', event => {
        event = getMouseEvent(event);
        var x = event.changedTouches[0].pageX;
        var left = slide.getBoundingClientRect().left;

        var position = x-left-10;
        if(handle1Clicked) {
            updateHandle1(slide, position);
        } else if(handle2Clicked) {
            updateHandle2(slide, position);
        }
    });
    document.addEventListener('mouseup', e => {
        let updated = slide.getAttribute("data-updated");
        if(updated && (handle1Clicked || handle2Clicked)) {
            window[updated]();
        }
        handle1Clicked = false;
        handle2Clicked = false;
    });
    document.addEventListener('touchend', e => {
        let updated = slide.getAttribute("data-updated");
        if(updated && (handle1Clicked || handle2Clicked)) {
            window[updated]();
        }
        handle1Clicked = false;
        handle2Clicked = false;
    });
}
function getMouseEvent(event) {
    var eventDoc, doc, body;
    event = event || window.event;
    if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;
        event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
    }
    return event;
}
function updateHandle1(slide, position = null) {
    let width = slide.offsetWidth-20;
    let logarithm = slide.getAttribute("data-logarithm");
    let handle_1 = log(slide.getAttribute("data-handle-1"), logarithm);
    let handle1 = slide.querySelector(".handle-1");
    let highlight = slide.querySelector(".highlight");
    let min = log(slide.getAttribute("data-min"), logarithm);
    let max = log(slide.getAttribute("data-max"), logarithm);

    let onchange = slide.getAttribute("data-onchange");
    let handle2Position = slide.getAttribute("data-handle-2-position");
    let range = max-min;
    handle_1 = handle_1?handle_1:min;
    let unit = width/range;
    if(position == null) {
        position = (handle_1 - min) * unit;
    }
    position = position<0?0:position;
    let value = round(position/unit, logarithm);

    let handle1Position = position;
    let minimum = slide.querySelector(".minimum");
    handle1Position = handle1Position>width-handle2Position?width-handle2Position:handle1Position;
    handle1.style.transform = "translate("+handle1Position+"px, 0)";
    highlight.style.left = handle1Position+"px";
    highlight.style.width = width-handle1Position-handle2Position+2+"px";
    if(minimum) {
        minimum.value = Math.round(alog(handle1Position/unit+min, logarithm));
    }
    if(onchange)
        window[onchange](Math.round(alog(handle1Position/unit+min, logarithm)), Math.round(alog(range-handle2Position/unit+min, logarithm)));
    slide.setAttribute("data-handle-1-position", handle1Position);
    return handle1Position;
}
function updateHandle2(slide, position = null) {
    let width = slide.offsetWidth-20;
    let logarithm = slide.getAttribute("data-logarithm");
    let handle_2 = log(slide.getAttribute("data-handle-2"), logarithm);
    let handle2 = slide.querySelector(".handle-2");
    let highlight = slide.querySelector(".highlight");
    let min = log(slide.getAttribute("data-min"), logarithm);
    let max = log(slide.getAttribute("data-max"), logarithm);

    let onchange = slide.getAttribute("data-onchange");
    let handle1Position = slide.getAttribute("data-handle-1-position");
    let range = max-min;
    handle_2 = handle_2?handle_2:max;
    let unit = width/range;
    if(position == null)
        position = (handle_2 - min) * unit;
    position = position>width?width:position;
    let value = round((width-position)/unit, logarithm); /* value from reverse side */

    let handle2Position = value*unit;
    let maximum = slide.querySelector(".maximum");
    handle2Position = handle2Position>width-handle1Position?width-handle1Position:handle2Position;
    handle2.style.transform = "translate(-"+handle2Position+"px, 0)";
    highlight.style.width = width-handle1Position-handle2Position+2+"px";

    if(maximum)
        maximum.value = Math.round(alog(range-handle2Position/unit+min, logarithm));
    if(onchange)
        window[onchange](Math.round(alog(handle1Position/unit+min, logarithm)), Math.round(alog(range-handle2Position/unit+min, logarithm)));
    slide.setAttribute("data-handle-2-position", handle2Position);
    return handle2Position;
}
function round(value, logarithm = false) {
    value = parseFloat(value);
    if(logarithm)
        return value;
    return Math.round(value);
}
function log(value, logarithm = false) {
    value = parseFloat(value);
    if(logarithm) {
        value = value?value:1;
        return Math.log(value);
    }
    return value;
}
function alog(value, logarithm = false) {
    value = parseFloat(value);
    if(logarithm)
        return Math.pow(Math.E, value);
    return value;
}
/* Multi handle slider ends */
/*Fade out element */
(function() {
    fadeOut();
})();
function fadeOut() {
    var fades = document.getElementsByClassName('fade-out');
    if(fades.length>0)
        Array.prototype.forEach.call(fades, function(item) {
            item.style.opacity = '0';
            item.addEventListener('transitionend', () => { item.style.opacity = '1'; item.remove();});
        });
}

(function () {
    leftMenu();
})();

function leftMenu() {
    var left_menu_toggle = document.getElementById("left-menu-toggle");
    var left_menu = document.getElementById("left-menu");
	var closes = document.getElementsByClassName("left-menu-close");
	for(let i=0; i<closes.length; i++) {
		if (left_menu && window.innerWidth<768) {
            closes[i].addEventListener("click", function () {
                left_menu.classList.remove("left-menu-collapse");
            });
        }

	}
    if (left_menu_toggle && left_menu)
        left_menu_toggle.addEventListener("click", function () {
            left_menu.classList.toggle("left-menu-collapse");
        });
}

/* sticky-bottom */
(function () {
    var bottom = document.getElementById("sticky-bottom");
    if(bottom)
        stuckBottom(bottom);
    var top = document.getElementsByClassName('sticky-top d-none');
    if(top && top[0])
        stuckTop(top[0]);
})();
function stuckBottom(e) {
    var y = 0;
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    if(hasClass(e, 'vh-0'))
        y = 0;
    else if(hasClass(e, 'vh-0-2'))
        y=vh*0.2;
    else if(hasClass(e, 'vh-0-5'))
        y=vh*0.5;
    else if(hasClass(e, 'vh-1'))
        y=vh;
    else if(hasClass(e, 'vh-2'))
        y=vh*2;
    window.addEventListener( 'scroll', function() {
        if( window.scrollY > y) {
            e.classList.add( 'stuck-bottom' );
        } else {
            e.classList.remove( 'stuck-bottom' );
        }
    });
}
function stuckTop(e) {
    var temp = e;
    e.classList.remove('d-none');
    var h = 0;
    setTimeout(function() {
        h = temp.offsetTop;
        temp.classList.add( 'd-none' );
        window.addEventListener( 'scroll', function() {
            if( window.scrollY >= h) {
                e.classList.remove( 'd-none' );
            } else {
                e.classList.add( 'd-none' );
            }
        });
    }, 0);
}
function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}
/*Number formatting */
function integerWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function integerWithCommasIndian(x) {
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
}
