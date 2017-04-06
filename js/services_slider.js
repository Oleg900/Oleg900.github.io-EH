$(document).ready(function() {
	$(".services").each(function () { // обрабатываем каждый слайдер
		var obj = $(this);
		$(obj).append("<div class='switch'></div>");
		$(obj).find(".slide").each(function () {
			$(obj).find(".switch").append("<button rel='"+$(this).index()+"'></button>"); // добавляем блок навигации
			$(this).addClass("services"+$(this).index());
		});
		$(obj).find("button").first().addClass("active"); // делаем активным первый элемент меню
	});
});
function slider (obj, sl) { // slider function
	var ul = $(sl).find(".slider"); // находим блок
	var bl = $(sl).find(".slide.services"+obj); // находим любой из элементов блока
	var step = $(bl).width(); // ширина объекта
	$(ul).animate({marginLeft: "-"+step*obj}, 300); // 500 это скорость перемотки
}
$(document).on("click", ".services .switch button", function() { // slider click navigate
	var sl = $(this).closest(".services"); // находим, в каком блоке был клик
	$(sl).find("button").removeClass("active"); // убираем активный элемент
	$(this).addClass("active"); // делаем активным текущий
	var obj = $(this).attr("rel"); // узнаем его номер
	slider(obj, sl); // слайдим
	return false;
});