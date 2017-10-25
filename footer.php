<section class="s-footer">
	<div class="container footer">
		<div class="row">
			<div class="grid-4 grid-3_m grid-6_s">
				<div class="footer__copyright">
					<p>© 2013 - 2017 Фабрика Предпринимательства</p>
					<a href="/politica.pdf" target="_blank">Политика конфиденциальности</a>
				</div>
			</div>
			<div class="grid-3 grid-2_m grid-6_s">
				<div class="footer__contact">
					<a href="tel:88007005037">8 800 700 50 37</a>
					<a href="mailto:info@bizfabrika.ru">info@bizfabrika.ru</a>
				</div>
			</div>
			<div class="grid-3 grid-4_m grid-6_s grid-12_xs">
				<div class="footer__soc">
					<a href="https://vk.com/bizfabrikakzn" target="_blank"><img src="img/footer/vk.svg" alt=""></a>
					<a href="https://www.facebook.com/bizfabrikakzn/" target="_blank"><img src="img/footer/fb.svg" alt=""></a>
					<a href="https://www.instagram.com/bizfabrika/" target="_blank"><img src="img/footer/insta.svg" alt=""></a>
					<a href="https://www.youtube.com/channel/UC_2zz0RSTRCetcMwwMkbmZA" target="_blank"><img src="img/footer/youtube.svg" alt=""></a>
				</div>
			</div>
			<div class="grid-2 grid-3_m grid-6_s grid-12_xs">
				<a href="https://penbrain.ru/" target="_blank" class="footer__studio">
					<img src="img/logo-pb-new.svg" alt="Сайт создан в Pen&Brain">
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Модальные окна -->
<div class="modals-sec">

	<div id="modal-order-1" class="modal">
		<p class="h4 purple-light">Принять участие</p>
		<p class="modal__descr">Оставьте заявку, участие бесплатное</p>
		<form class="ajax-form vertical-form">
			<input type="text" class="input-text" name="user_name" placeholder="Введите имя" data-label="Имя пользователя">
			<input type="tel" class="input-text" name="user_tel" data-label="Телефон" placeholder="Введите телефон*" data-req="true">
			<input type="email" class="input-text" name="user_email" placeholder="Введите e-mail*" data-label="Email" data-req="true">
			<input type="hidden" value="Новая заявка" name="form_subject">
			<button type="submit" class="btn" onclick="yaCounter46318980.reachGoal('LEAD');">Отправить</button>
			<label class="style-checkbox style-checkbox--red">
				<input type="checkbox" checked data-req="true" name="agree-terms" data-label="Согласен с условиями" value="Да">
				<span>Я принимаю <a href="#" class="fancy" data-src="#modal-politycs">условия передачи информации</a></span>
			</label>
		</form>
	</div>

	<div id="modal-politycs" class="modal modal--politycs">
		<div class="user-content">
			<p class="h6 purple-light">Политика конфиденциальности</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad aperiam architecto culpa dolores, dolorum enim ex iusto magni minus nihil non pariatur placeat praesentium quae repellat, tempore vero.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad aperiam architecto culpa dolores, dolorum enim ex iusto magni minus nihil non pariatur placeat praesentium quae repellat, tempore vero.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad aperiam architecto culpa dolores, dolorum enim ex iusto magni minus nihil non pariatur placeat praesentium quae repellat, tempore vero.</p>
		</div>
	</div>

	<div id="modal-thanks" class="modal">
		<p class="h3">Спасибо за заявку!</p>
	</div>

	<div id="modal-surprise" class="modal modal--surprise">
		<img src="img/facts/fact-man.png" alt="">
		<p class="h3">Участие в разборе - бесплатное!</p>
	</div>

</div>
<!-- Модальные окна -->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="js/assets.js" type="text/javascript"></script>
<script src="js/main.js" type="text/javascript"></script>


<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
	(function (d, w, c) {
		(w[c] = w[c] || []).push(function() {
			try {
				w.yaCounter46318980 = new Ya.Metrika({
					id:46318980,
					clickmap:true,
					trackLinks:true,
					accurateTrackBounce:true,
					webvisor:true
				});
			} catch(e) { }
		});

		var n = d.getElementsByTagName("script")[0],
			s = d.createElement("script"),
			f = function () { n.parentNode.insertBefore(s, n); };
		s.type = "text/javascript";
		s.async = true;
		s.src = "https://mc.yandex.ru/metrika/watch.js";

		if (w.opera == "[object Opera]") {
			d.addEventListener("DOMContentLoaded", f, false);
		} else { f(); }
	})(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/46318980" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->


	</body>
</html>
