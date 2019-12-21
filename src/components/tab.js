import React, { Fragment } from 'react';
import { Alias } from '../importer';
import { Reviews } from './reviews';
import { Descriptions } from './description';

const RC = Alias.pathToSyles('magnify-Pro');

export default props => (
	<Fragment>
		<nav>
			<RC.TabLinksWrapper className="nav nav-tabs" id="nav-tab" role="tablist">
				<RC.TabLink
					className="nav-item nav-link active"
					id="nav-home-tab"
					data-toggle="tab"
					aria-controls="nav-home"
					href="#nav-home"
					role="tab"
					aria-selected="true"
				>
					Review
				</RC.TabLink>
				<RC.TabLink
					className="nav-item nav-link"
					id="nav-profile-tab"
					data-toggle="tab"
					href="#nav-profile"
					role="tab"
					aria-controls="nav-profile"
					aria-selected="false"
				>
					Description
				</RC.TabLink>
			</RC.TabLinksWrapper>
		</nav>
		<div className="tab-content" id="nav-tabContent">
		<div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
			<Reviews product={props.product}/>
		</div>
		<div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
				<Descriptions product={props.product} />
			</div>
		</div>
	</Fragment>
);
