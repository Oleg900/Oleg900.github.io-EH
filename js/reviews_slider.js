$(document).ready(function() {
	$(".reviews").each(function () { // обрабатываем каждый слайдер
		var obj = $(this);
		$(obj).append("<div class='switch'></div>");
		$(obj).find(".slide").each(function () {
			$(obj).find(".switch").append("<button rel='"+$(this).index()+"'></button>"); // добавляем блок навигации
			$(this).addClass("reviews"+$(this).index());
		});
		$(obj).find("button").first().addClass("active"); // делаем активным первый элемент меню
	});
});
function sliderJS (obj, sl) { // slider function
	var ul = $(sl).find(".slider"); // находим блок
	var bl = $(sl).find(".slide.reviews"+obj); // находим любой из элементов блока
	var step = $(bl).width(); // ширина объекта
	$(ul).animate({marginLeft: "-"+step*obj}, 300); // 500 это скорость перемотки
}
$(document).on("click", ".reviews .switch button", function() { // slider click navigate
	var sl = $(this).closest(".reviews"); // находим, в каком блоке был клик
	$(sl).find("button").removeClass("active"); // убираем активный элемент
	$(this).addClass("active"); // делаем активным текущий
	var obj = $(this).attr("rel"); // узнаем его номер
	sliderJS(obj, sl); // слайдим
	return false;
});
