"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _Promise = typeof Promise === 'undefined' ? require('es6-promise').Promise : Promise;

if (!window.utils) {
    window.utils = {};
}
window.utils.isPc = function () {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
};

var Popup = function () {
    function Popup(ele) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'show';
        var confObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, Popup);

        this.ele = ele;
        this.type = type;
        this.$ele = $(this.ele);
        this.$html = $('html');
        this.$body = $('body');
        this.$win = $(window);
        this.$doc = $(document);
        this.$mask = $('.popup-mask');
        this.globalClose = confObj.globalClose || false;
        this.scrollTop = 0;
        this.window = window;
        this.isPc = this.window.utils.isPc();
        // Options for the observer (which mutations to observe)
        this.observerConfig = { attributes: false, childList: true, subtree: true };

        this.init();

        return this[this.type]();
    }

    _createClass(Popup, [{
        key: "init",
        value: function init() {
            this.existScrollBar = this.hasScrollBar();
            this.scrollBarWidth = this.getScrollWidth();

            this.bindWindowResize();
            this.setMutationObserver();
            this.bindCloseEvent();
        }
    }, {
        key: "setMutationObserver",
        value: function setMutationObserver() {
            var that = this;
            this.observer = new MutationObserver(function (mutationsList, observer) {
                that.resetPopupWrapperHeight();
            });

            // Start observing the target node for configured mutations
            this.observer.observe(this.$ele.get(0), this.observerConfig);
        }
    }, {
        key: "bindWindowResize",
        value: function bindWindowResize() {
            var _this = this;

            this.$win.on('resize', function () {
                _this.resetPopupWrapperHeight();
            });
        }
    }, {
        key: "bindCloseEvent",
        value: function bindCloseEvent() {
            var that = this;

            //消失的时候不必绑定事件
            if (this[this.type] === 'hide') {
                return false;
            }

            if (this.globalClose) {
                this.$mask.one('click', function () {
                    that.hide();
                });
                window.onkeydown = function (e) {
                    if (e.keyCode === 27) {
                        that.hide();
                    }
                };
            }
        }
    }, {
        key: "show",
        value: function show() {
            var _this2 = this;

            this.scrollTop = this.getScrollTop();
            this.$html.data('scroll-top', this.scrollTop);
            this.hideScrollBar();
            this.$mask.removeClass('hidden');
            this.$ele.removeClass('hidden');

            return new _Promise(function (resolve) {

                _this2.$mask.addClass('active');

                _this2.resetPopupWrapperHeight();
                setTimeout(function () {
                    _this2.$ele.addClass('active').one('transitionend', function () {
                        resolve();
                    });
                });
            });
        }
    }, {
        key: "getPopupWrapperHeight",
        value: function getPopupWrapperHeight() {
            var height = Math.ceil(Number(this.$ele.outerHeight()));
            return height % 2 === 0 ? height : ++height;
        }
    }, {
        key: "resetPopupWrapperHeight",
        value: function resetPopupWrapperHeight() {
            this.$ele.css({
                'min-height': 'auto'
            });
            var height = this.getPopupWrapperHeight();
            this.$ele.css({
                'min-height': height
            });
        }
    }, {
        key: "getWinSize",
        value: function getWinSize() {
            return {
                width: this.$win.width(),
                height: this.$win.height()
            };
        }
    }, {
        key: "hide",
        value: function hide() {
            var _this3 = this;

            this.$mask.removeClass('active');
            return new _Promise(function (resolve) {
                _this3.$ele.removeClass('active').one('transitionend', function () {
                    // Later, you can stop observing
                    _this3.observer.disconnect();

                    resolve();
                });
            }).then(function () {
                _this3.showScrollBar();
                _this3.$mask.addClass('hidden');
                _this3.$ele.addClass('hidden');
                window.scrollTo(0, _this3.$html.data('scroll-top'));
            });
        }
    }, {
        key: "hideScrollBar",
        value: function hideScrollBar() {
            this.$body.addClass('over-hidden');
            if (this.isPc) {
                this.$html.css({
                    overflowY: 'hidden'
                });
            } else {
                this.$body.css({
                    marginTop: -this.getScrollTop()
                }).addClass('offcanvas');
                this.$html.addClass('offcanvas');
            }

            if (this.existScrollBar) {
                this.$html.css({
                    'border-right': this.scrollBarWidth + 'px solid #fff'
                }).data('hide-scrollbar', true);
            }
        }
    }, {
        key: "showScrollBar",
        value: function showScrollBar() {
            this.$body.removeClass('over-hidden');
            if (this.$html.data('hide-scrollbar')) {
                this.$html.css({
                    'border-right': 0,
                    overflowY: 'auto'
                });
            }
            if (this.isPc) {} else {
                this.$html.removeClass('offcanvas');
                this.$body.css({
                    marginTop: 0
                }).removeClass('offcanvas');
            }
        }

        //基类

    }, {
        key: "getScrollTop",
        value: function getScrollTop() {
            return parseInt(this.$doc.scrollTop(), 10);
        }
    }, {
        key: "hasScrollBar",
        value: function hasScrollBar() {
            var winHeight = this.$win.innerHeight();
            var documentHeight = this.$doc.height();
            return documentHeight > winHeight;
        }
    }, {
        key: "getScrollWidth",
        value: function getScrollWidth() {
            if (!window.scrollBarWidth) {
                if (this.existScrollBar) {
                    window.scrollBarWidth = window.innerWidth - this.$html.width();
                }
            }
            return window.scrollBarWidth;
        }
    }]);

    return Popup;
}();

//自动初始化


$(function () {
    var $body = $('body');

    //自动初始化
    $body.on('click', '[data-popup]', function () {
        var $this = $(this);
        showMask($this);
    });

    //自动关闭
    $body.on('click', '.icon-close,.close-mask', function () {
        var $this = $(this);
        hideMask($this);
    });

    function showMask($this) {
        var targetPopup = $this.data('popup');
        new Popup('#' + targetPopup, 'show').then(function () {});
    }

    function hideMask($this) {
        var $currentPopup = $this.parents('.popup-wrapper');
        new Popup('#' + $currentPopup.attr('id'), 'hide').then(function () {});
    }
});
//# sourceMappingURL=popup.js.map
