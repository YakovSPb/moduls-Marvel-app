import { ROOT_MODAL } from '../../constants/root';

import imgCloseBlack from './img/close-black.svg';

import classes from './Notification.css';

class Notification {
	render() {
		const htmlWrapper = `
		<div class="${classes.notificaton__container}">
		<span>Нет контента</span>

		<button class="btn ${classes.notificaton__close}"
		onclick="modal.innerHTML = ''"
		style="background-image: url(${imgCloseBlack})"
		><button>
		</div>
		`;

		ROOT_MODAL.innerHTML = htmlWrapper;
	}
}

export default new Notification();