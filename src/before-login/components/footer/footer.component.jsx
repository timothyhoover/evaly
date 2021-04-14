import React from 'react';
import sprite from '../../../assets/sprite.svg';
import './footer.styles.scss';

const Footer = () => (
	<div className="footer">
		<div className="footer__item-1">
			<p> A company by Topic Talk Inglés</p>
			<p>Copyright Evaly 2021 All rights reserved</p>
		</div>

		<div className="footer__item-2">
			<p className="footer__logo"> Evaly</p>
			<svg className="icon footer__fb-icon">
				<use href={sprite + '#facebook'}></use>
			</svg>
			<svg className="icon footer__instagram-icon">
				<use href={sprite + '#instagram'}></use>
			</svg>
		</div>

		<div className="footer__item-3">
			<ul>
				<li>
					<a href="#">Terms & Conditions</a>
				</li>
				<li>
					<a href="#">Privacy Policy</a>
				</li>
			</ul>
		</div>
	</div>
);

export default Footer;
