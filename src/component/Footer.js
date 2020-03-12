import React, {Component} from 'react';
export default class Footer extends Component {
    render(){
        return (
            <footer class="footer">
				<div class="container">
				  <div class="newsletter-block d-flex justify-content-center align-items-center flex-wrap">
					<label>SIGN UP FOR NEWSLETTER</label>
					<div class="field-block d-flex">
					  <input type="text" name="email" placeholder="Your email address" class="form-control" />
					  <input type="button" name="subscribe" value="SUBSCRIBE" class="orange-btn" />
					</div>
				  </div>
				  <div class="copyright-block d-flex justify-content-between align-items-center flex-wrap">
					<div class="copyright-col">Copyright © 2019 Sushi Pro. All rights reserved.</div>
					<div class="footer-links d-flex flex-wrap align-items-center">
					  <ul class="footer-linksListing">
						<li><a href="#!">Sitemap</a></li>
						<li><a href="#!">Privacy Policy</a></li>
						<li><a href="#!">Terms & Conditions</a></li>
					  </ul>
					  <ul class="social-links">
						<li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
						<li><a href="#!"><i class="fab fa-instagram"></i></a></li>
					  </ul>
					</div>
				  </div>
				</div>
			  </footer>
        )
    }
}