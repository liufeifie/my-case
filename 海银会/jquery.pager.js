;
(function($) {
	$.fn.pager = function(options) {
		var opts = $.extend({}, $.fn.pager.defaults, options);
		return this.each(function() { // empty out the destination element and then render out the pager with the supplied options    
			$(this).empty().append(renderpager(parseInt(options.pagenumber), parseInt(options.pagecount), options.buttonClickCallback, options)); // specify correct cursor activity
			$('.pages li').mouseover(function() {
				document.body.style.cursor = "pointer";
			}).mouseout(function() {
				document.body.style.cursor = "auto";
			});
		});
	}; // render and return the pager with the supplied options

	function renderpager(pagenumber, pagecount, buttonClickCallback, preoptions) { // setup $pager to hold render     
		var $pager = $('<ul class="pages"></ul>'); // add in the previous and next buttons 
		$pager.append(renderButton('首页', pagenumber, pagecount, buttonClickCallback)).append(renderButton('&lt;', pagenumber, pagecount, buttonClickCallback)); 
		// pager currently only handles 10 viewable pages ( could be easily parameterized, maybe in next version ) so handle edge cases     
		// $pager.append(renderButton('&lt;', pagenumber, pagecount, buttonClickCallback, preoptions));
		var startPoint = 1;
		var endPoint = 4;
		var frontPoint = "<li class='thpoint'>...</li>";
		var backPoint = "<li class='thpoint'>...</li>";
		if (pagenumber >= 4) {
			startPoint = pagenumber - 2;
			endPoint = pagenumber + 2;
		}
		if (endPoint > pagecount) {
			startPoint = pagecount - 3;
			endPoint = pagecount;
		}
		if (startPoint < 1) {
			startPoint = 1;
		} // loop thru visible pages and render buttons
		var startButton = $('<li class="page-number">' + (1) + '</li>');
		1 == pagenumber ? startButton.addClass('pgCurrent') : startButton.click(function() {
			buttonClickCallback(this.firstChild.data, preoptions);
		});
		startButton.appendTo($pager);
		if (startPoint > 2) {
			$pager.append(frontPoint);
		}
		for (var page = startPoint; page <= endPoint; page++) {
			if (page == 1) continue;
			if (page == pagecount) continue;
			var currentButton = $('<li class="page-number">' + (page) + '</li>');
			page == pagenumber ? currentButton.addClass('pgCurrent') : currentButton.click(function() {
				buttonClickCallback(this.firstChild.data, preoptions);
			});
			currentButton.appendTo($pager);
		} // render in the next and last buttons before returning the whole rendered control back.
		if (endPoint <= (pagecount - 2)) {
			$pager.append(backPoint);
		}
		if (pagecount > 1) {
			var endButton = $('<li class="page-number">' + (pagecount) + '</li>');
			var last = $('<span class="last-number">共' + (pagecount) + '页</span>');
			pagecount == pagenumber ? endButton.addClass('pgCurrent') : endButton.click(function () {
				buttonClickCallback(this.firstChild.data, preoptions);
			});
			endButton.appendTo($pager);
			last.appendTo($pager);
		}
		$pager.append(renderButton('&gt;', pagenumber, pagecount, buttonClickCallback, preoptions)).append(renderButton('末页', pagenumber, pagecount, buttonClickCallback));   
		// $pager.append(renderButton('&gt;', pagenumber, pagecount, buttonClickCallback));
		return $pager;
	} // renders and returns a 'specialized' button, ie 'next', 'previous' etc. rather than a page number button

    function changepage(buttonLabel, pagecount, buttonClickCallback) {
        var $btngoto = $('<li class="pgNext">' + buttonLabel + '</li>');
        $btngoto.click(function() {
            var gotoval = $('#gotoval').val();
            var patrn = /^[1-9]{1,20}$/;
            if (!patrn.exec(gotoval)) {
                alert("请输入非零的正整数！");
                return false;
            }
            var intval = parseInt(gotoval);
            if (intval > pagecount) {
                alert("您输入的页面超过总页数 " + pagecount);
                return;
            }
            buttonClickCallback(intval);
        });
        return $btngoto;
    }

    function renderButton(buttonLabel, pagenumber, pagecount, buttonClickCallback, preoptions) {
        var $Button = $('<li class="pgNext">' + buttonLabel + '</li>');
        var destPage = 1; // work out destination page for required button type   
        switch (buttonLabel) {
            case "首页":
                destPage = 1;
                break;
            case "&lt;":
                destPage = pagenumber - 1;
                break;
            case "&gt;":
                destPage = pagenumber + 1;
                break;
            case "末页":
                destPage = pagecount;
                break;
        } // disable and 'grey' out buttons if not needed.       
        if (buttonLabel == "首页" || buttonLabel == "&lt;") {
            pagenumber <= 1 ? $Button.addClass('pgEmpty') : $Button.click(function() {
                buttonClickCallback(destPage, preoptions);
            });
        } else {
            pagenumber >= pagecount ? $Button.addClass('pgEmpty') : $Button.click(function() {
                buttonClickCallback(destPage, preoptions);
            });
        }
        return $Button;
    } // pager defaults. hardly worth bothering with in this case but used as placeholder for expansion in the next version

	$.fn.pager.defaults = {
		pagenumber: 1,
		pagecount: 1
	};
})(jQuery);