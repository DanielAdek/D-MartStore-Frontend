import React, { Fragment } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

export const MyMapComponent = withScriptjs(
	withGoogleMap(props => {
		return (
			<Fragment>
				<GoogleMap defaultZoom={8} defaultCenter={{ lat: 6.605874, lng: 3.349149 }}>
					{props.isMarkerShown && <Marker position={{ lat: 6.605874, lng: 3.349149 }} />}
				</GoogleMap>
			</Fragment>
		);
	})
);
