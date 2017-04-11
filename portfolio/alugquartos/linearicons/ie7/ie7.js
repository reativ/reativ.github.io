/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-google': '&#xe067;',
		'icon-instagram': '&#xe057;',
		'icon-youtube': '&#xe051;',
		'icon-linkedin': '&#xe049;',
		'icon-skype': '&#xe046;',
		'icon-foursquare': '&#xe044;',
		'icon-pinterest': '&#xe043;',
		'icon-googleplus': '&#xe042;',
		'icon-facebook': '&#xe041;',
		'icon-twitter': '&#xe040;',
		'icon-mail': '&#xe01f;',
		'icon-whatsapp': '&#xe01b;',
		'icon-envolope': '&#xe086;',
		'icon-gender': '&#xe602;',
		'icon-calendar': '&#xe600;',
		'icon-briefcase': '&#xe601;',
		'icon-pointer-left': '&#xe8a9;',
		'icon-pointer-down': '&#xe8a8;',
		'icon-pointer-right': '&#xe8a7;',
		'icon-pointer-up': '&#xe8a6;',
		'icon-hand': '&#xe8a5;',
		'icon-sort-amount-asc': '&#xe8a4;',
		'icon-sort-alpha-asc': '&#xe8a3;',
		'icon-page-break': '&#xe8a2;',
		'icon-direction-rtl': '&#xe8a1;',
		'icon-direction-ltr': '&#xe8a0;',
		'icon-pilcrow': '&#xe89f;',
		'icon-indent-decrease': '&#xe89e;',
		'icon-indent-increase': '&#xe89d;',
		'icon-line-spacing': '&#xe89c;',
		'icon-text-align-justify': '&#xe89b;',
		'icon-text-align-right': '&#xe89a;',
		'icon-text-align-center': '&#xe899;',
		'icon-text-align-left': '&#xe898;',
		'icon-highlight': '&#xe897;',
		'icon-strikethrough': '&#xe896;',
		'icon-underline': '&#xe895;',
		'icon-italic': '&#xe894;',
		'icon-bold': '&#xe893;',
		'icon-text-size': '&#xe892;',
		'icon-text-format-remove': '&#xe891;',
		'icon-text-format': '&#xe890;',
		'icon-funnel': '&#xe88f;',
		'icon-layers': '&#xe88e;',
		'icon-frame-contract': '&#xe88d;',
		'icon-frame-expand': '&#xe88c;',
		'icon-crop': '&#xe88b;',
		'icon-chevron-right-circle': '&#xe88a;',
		'icon-chevron-left-circle': '&#xe889;',
		'icon-chevron-down-circle': '&#xe888;',
		'icon-chevron-up-circle': '&#xe887;',
		'icon-arrow-right-circle': '&#xe886;',
		'icon-arrow-left-circle': '&#xe885;',
		'icon-arrow-down-circle': '&#xe884;',
		'icon-arrow-up-circle': '&#xe883;',
		'icon-circle-minus': '&#xe882;',
		'icon-plus-circle': '&#xe881;',
		'icon-cross-circle': '&#xe880;',
		'icon-checkmark-circle': '&#xe87f;',
		'icon-menu-circle': '&#xe87e;',
		'icon-question-circle': '&#xe87d;',
		'icon-warning': '&#xe87c;',
		'icon-move': '&#xe87b;',
		'icon-arrow-right': '&#xe87a;',
		'icon-arrow-left': '&#xe879;',
		'icon-arrow-down': '&#xe878;',
		'icon-arrow-up': '&#xe877;',
		'icon-chevron-right': '&#xe876;',
		'icon-chevron-left': '&#xe875;',
		'icon-chevron-down': '&#xe874;',
		'icon-chevron-up': '&#xe873;',
		'icon-list': '&#xe872;',
		'icon-menu': '&#xe871;',
		'icon-cross': '&#xe870;',
		'icon-check': '&#xe607;',
		'icon-magnifier': '&#xe86f;',
		'icon-thumbs-down': '&#xe86e;',
		'icon-thumbs-up': '&#xe86d;',
		'icon-unlink': '&#xe86c;',
		'icon-link': '&#xe86b;',
		'icon-code': '&#xe86a;',
		'icon-bug': '&#xe869;',
		'icon-exit-up': '&#xe868;',
		'icon-enter-down': '&#xe867;',
		'icon-upload': '&#xe866;',
		'icon-download': '&#xe865;',
		'icon-clock': '&#xe864;',
		'icon-history': '&#xe863;',
		'icon-sync': '&#xe862;',
		'icon-redo': '&#xe861;',
		'icon-undo': '&#xe860;',
		'icon-hourglass': '&#xe85f;',
		'icon-mic': '&#xe85e;',
		'icon-volume': '&#xe85d;',
		'icon-volume-low': '&#xe85c;',
		'icon-volume-medium': '&#xe85b;',
		'icon-volume-high': '&#xe85a;',
		'icon-bullhorn': '&#xe859;',
		'icon-alarm': '&#xe858;',
		'icon-mustache': '&#xe857;',
		'icon-neutral': '&#xe856;',
		'icon-sad': '&#xe855;',
		'icon-smile': '&#xe854;',
		'icon-earth': '&#xe853;',
		'icon-select': '&#xe852;',
		'icon-wheelchair': '&#xe851;',
		'icon-bicycle': '&#xe850;',
		'icon-train': '&#xe84f;',
		'icon-car': '&#xe84e;',
		'icon-bus': '&#xe84d;',
		'icon-rocket': '&#xe84b;',
		'icon-paw': '&#xe84a;',
		'icon-leaf': '&#xe849;',
		'icon-coffee-cup': '&#xe848;',
		'icon-dinner': '&#xe847;',
		'icon-linearicons': '&#xe846;',
		'icon-diamond': '&#xe845;',
		'icon-gift': '&#xe844;',
		'icon-chart-bars': '&#xe843;',
		'icon-pie-chart': '&#xe842;',
		'icon-construction': '&#xe841;',
		'icon-heart-pulse': '&#xe840;',
		'icon-bubble': '&#xe83f;',
		'icon-power-switch': '&#xe83e;',
		'icon-laptop-phone': '&#xe83d;',
		'icon-laptop': '&#xe83c;',
		'icon-tablet': '&#xe83b;',
		'icon-smartphone': '&#xe83a;',
		'icon-screen': '&#xe839;',
		'icon-spell-check': '&#xe838;',
		'icon-keyboard': '&#xe837;',
		'icon-location': '&#xe835;',
		'icon-map': '&#xe834;',
		'icon-map-marker': '&#xe833;',
		'icon-pushpin': '&#xe832;',
		'icon-phone': '&#xe831;',
		'icon-phone-handset': '&#xe830;',
		'icon-tag': '&#xe82f;',
		'icon-cart': '&#xe82e;',
		'icon-store': '&#xe82d;',
		'icon-shirt': '&#xe82c;',
		'icon-users': '&#xe82b;',
		'icon-user': '&#xe82a;',
		'icon-bookmark': '&#xe829;',
		'icon-book': '&#xe828;',
		'icon-picture': '&#xe827;',
		'icon-camera': '&#xe826;',
		'icon-camera-video': '&#xe825;',
		'icon-film-play': '&#xe824;',
		'icon-music-note': '&#xe823;',
		'icon-license': '&#xe822;',
		'icon-graduation-hat': '&#xe821;',
		'icon-exit': '&#xe820;',
		'icon-enter': '&#xe81f;',
		'icon-file-add': '&#xe81e;',
		'icon-file-empty': '&#xe81d;',
		'icon-printer': '&#xe81c;',
		'icon-eye': '&#xe81b;',
		'icon-inbox': '&#xe81a;',
		'icon-paperclip': '&#xe819;',
		'icon-envelope': '&#xe818;',
		'icon-flag': '&#xe817;',
		'icon-star-empty': '&#xe816;',
		'icon-star-half': '&#xe815;',
		'icon-star': '&#xe814;',
		'icon-heart': '&#xe813;',
		'icon-heart-f': '&#xe608;',
		'icon-dice': '&#xe812;',
		'icon-trash': '&#xe811;',
		'icon-cog': '&#xe810;',
		'icon-lock': '&#xe80f;',
		'icon-database': '&#xe80e;',
		'icon-cloud-check': '&#xe80d;',
		'icon-cloud-sync': '&#xe80c;',
		'icon-cloud-download': '&#xe80b;',
		'icon-cloud-upload': '&#xe80a;',
		'icon-cloud': '&#xe809;',
		'icon-moon': '&#xe808;',
		'icon-sun': '&#xe807;',
		'icon-poop': '&#xe806;',
		'icon-lighter': '&#xe805;',
		'icon-drop': '&#xe804;',
		'icon-magic-wand': '&#xe803;',
		'icon-pencil': '&#xe802;',
		'icon-apartment': '&#xe801;',
		'icon-home': '&#xe800;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
