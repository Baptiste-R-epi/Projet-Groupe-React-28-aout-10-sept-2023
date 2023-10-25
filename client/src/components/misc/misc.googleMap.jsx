import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useState } from "react";

const MapComponent = ({ markerUser, markerEvent }) => {
	const { isLoaded, loadError } = useJsApiLoader({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
	});

	/**
   * {
      position: {
        lat: 47.800922357729796,
        lng: 7.3383707454598035,
      },
      text: "maison Yoann",
      label: { color: "black", text: "P2" },
      draggable: false,
    },
   */

	const initialMarkers = [
		{
			position: {
				lat: markerUser.lat,
				lng: markerUser.lng,
			},
			label: { color: "black", text: "P1" },
			text: "Position initial",
			draggable: false,
		},
	];

	const [activeInfoWindow, setActiveInfoWindow] = useState(null);
	const [markers, setMarkers] = useState(initialMarkers);

	const containerStyle = {
		width: "100%",
		height: "400px",
	};

	const center = {
		lat: markerUser.lat,
		lng: markerUser.lng,
	};

	const mapClicked = (event) => {
		localStorage.setItem("mapClickedAt", JSON.stringify(event.latLng.toJSON()));
	};

	const markerClicked = (marker, index) => {
		setActiveInfoWindow(index);
	};

	const markerDragEnd = (event, index) => {
		// console.log(event.latLng.lat(), event.latLng.lng());
	};

	if (markerEvent) initialMarkers.push(markerEvent);

	return (
		isLoaded && (
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15} onClick={mapClicked}>
				{markers.map((marker, index) => (
					<Marker
						key={index}
						position={marker.position}
						label={marker.label}
						draggable={marker.draggable}
						onDragEnd={(event) => markerDragEnd(event, index)}
						onClick={(event) => markerClicked(marker, index)}
					>
						{activeInfoWindow === index && (
							<InfoWindow position={marker.position} onCloseClick={() => setActiveInfoWindow(null)}>
								<b style={{ color: "black" }}>
									{marker.text} <br />
									{marker.position.lat}, {marker.position.lng}
								</b>
							</InfoWindow>
						)}
					</Marker>
				))}
			</GoogleMap>
		)
	);
};

export default MapComponent;
