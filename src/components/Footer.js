import React from "react";
import "./Footer.css";
import {BiGlobe} from "react-icons/bi";
import {RxCaretUp} from "react-icons/rx";

function Footer() {
	return (
		<div className="footer">
			<div className="footer--left">
				<p>© 2023 Airbnb, Inc.</p>
				<p>·</p>
				<p className="footer-link">Terms</p>
				<p>·</p>
				<p className="footer-link">Sitemap</p>
				<p>·</p>
				<p className="footer-link">Privacy</p>
				<p>·</p>
				<p className="footer-link">Your Privacy Choices</p>
				<p>·</p>
				<p className="footer-link">Destinations</p>
			</div>
			<div className="footer--right">
				<div className="footer--language">
					<BiGlobe className="footer--globeIcon" />
					<p className="footer-link">English (US)</p>
				</div>
				<p className="footer-link">RON</p>
				<div className="footer--support">
					<p className="footer-link">Support & resources</p>
					<RxCaretUp className="footer-caretIcon" />
				</div>
			</div>
		</div>
	);
}

export default Footer;
