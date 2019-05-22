import React, { Component } from 'react'

export class contact extends Component {
  render() {
    return (
      <div>
      <section class="colorlib-contact" data-section="contact">
				<div class="colorlib-narrow-content">
					<div class="row">
						<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span class="heading-meta">Get in Touch</span>
							<h2 class="colorlib-heading">Contact</h2>
						</div>
					</div>
					<div class="row">
						<div class="col-md-5">
							<div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div class="colorlib-icon">
										<i class="far fa-envelope"></i>
								</div>
								<div class="colorlib-text">
									<p><a href="mailto:chameeradulanga87@gmail.com">chameeradulanga87@gmail.com</a></p>
								</div>
							</div>

							<div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div class="colorlib-icon">
										<i class="fas fa-map-marker-alt"></i>
								</div>
								<div class="colorlib-text">
									<p>5/19, Inland Hill Road, Karapitiya, Galle</p>
								</div>
							</div>

							<div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div class="colorlib-icon">
										<i class="fas fa-phone"></i>
								</div>
								<div class="colorlib-text">
									<p><a href="tel://">+94 77 410 2800</a></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
      </div>
    )
  }
}

export default contact
