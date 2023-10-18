import { Box } from "@mui/material";
import React from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MapComponent = withGoogleMap((selectedState) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{
      lat: selectedState.selectedState.selectedState.latitude,
      lng: selectedState.selectedState.selectedState.longitude,
    }}
  >
    <Marker
      position={{
        lat: selectedState.selectedState.selectedState.latitude,
        lng: selectedState.selectedState.selectedState.longitude,
      }}
    />
  </GoogleMap>
));

const GoogleMaps = (selectedState) => {
  return (
    <Box sx={{ height: "100vh", width: "100%"}}>
      <MapComponent
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        selectedState={selectedState}
      />
    </Box>
  );
};

export default GoogleMaps;
