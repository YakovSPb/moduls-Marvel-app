import { API_URL, URL_COMICS, URL_CHARACTERS, IMG_StANDARD_XLARGE, IMG_NOT_AVAILABLE} from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';
import { ROOT_INDEX } from '../../constants/root';

import Characters from '../Characters';
import Error from '../Error';

import classes from './Comics.css';

class Comics {
	renderComics(data) {
		let htmlContent = '';

		data.forEach(({id, title, thumbnail: {extension, path }}) => {

			if (path.lastIndexOf(IMG_NOT_AVAILABLE) === -1) {
				const uri = API_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS;
				const imgSrc = path + '/' + IMG_StANDARD_XLARGE + '.' + extension;

				htmlContent += `
				<li class="comics__item ${classes.comics__item}" data-uri="${uri}">
				<span class="${classes.comics__name}">${title}</span>
				<img class="img-contain ${classes.comics__img}" src="${imgSrc}" />
				<li>
				`;
			}

		});

		const htmlWrapper = `
		<ul class="${classes.comics__container}">
		${htmlContent}
		</ul>
		`;
		
		ROOT_INDEX.innerHTML = htmlWrapper;
	}

	async render(){
		const data = await getDataApi.getData(API_URL + URL_COMICS);

		if (data) {
			this.renderComics(data);
		} else {
			Error.render();
		}
	}

	eventListener() {
		document.querySelectorAll('.comics__item').forEach(element => {
			const url = element.getAttribute('data-uri');

			element.addEventListener('click', () => {
				Characters.render(url);
			})
		})
	}
}

export default new Comics();