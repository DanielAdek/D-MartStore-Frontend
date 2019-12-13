import React, { Fragment } from 'react';
import { Reviews } from './reviews';
import { Descriptions } from './description';

export default () => (
	<Fragment>
		<nav>
			<div class="nav nav-tabs" id="nav-tab" role="tablist">
				<a
					class="nav-item nav-link active"
					id="nav-home-tab"
					data-toggle="tab"
					href="#nav-home"
					role="tab"
					aria-controls="nav-home"
					aria-selected="true"
				>
					Description
				</a>
				<a
					class="nav-item nav-link"
					id="nav-profile-tab"
					data-toggle="tab"
					href="#nav-profile"
					role="tab"
					aria-controls="nav-profile"
					aria-selected="false"
				>
					Review
				</a>
			</div>
		</nav>
		<div class="tab-content" id="nav-tabContent">
			<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
				<Descriptions />
			</div>
			<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
				<Reviews />
			</div>
		</div>
	</Fragment>
);
