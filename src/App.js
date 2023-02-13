import React from "react";
import "./styles.css";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Popup,
  LayerGroup,
  FeatureGroup,
  Rectangle,
  Circle
} from "react-leaflet";
import LayerControl, { GroupedLayer } from "./LayerControl";
export default function App() {
  const position = [51.505, -0.09];
  const rectangle = [[51.49, -0.08], [51.5, -0.06]];
  return (
    <div className="App">
      <MapContainer
        whenCreated={() => console.log("map loaded")}
        className="Map"
        center={position}
        zoom={13}
        scrollWheelZoom={true}
      >
        <LayerControl position="topright">
          <GroupedLayer checked name="OpenStreetMap" group="Base Layers">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </GroupedLayer>

          <GroupedLayer name="OpenStreetMap B&W" group="Base Layers">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            />
          </GroupedLayer>

          <GroupedLayer name="Layer Group with Circles" group="Layer Group">
            <LayerGroup>
              <Circle
                center={position}
                pathOptions={{ fillColor: "blue" }}
                radius={200}
              />
              <Circle
                center={position}
                pathOptions={{ fillColor: "red" }}
                radius={100}
                stroke={false}
              />
              <LayerGroup>
                <Circle
                  center={[51.51, -0.08]}
                  pathOptions={{ color: "green", fillColor: "green" }}
                  radius={100}
                />
              </LayerGroup>
            </LayerGroup>
          </GroupedLayer>

          <GroupedLayer name="Feature Group Squares" group="Layer Group">
            <FeatureGroup pathOptions={{ color: "purple" }}>
              <Popup>Popup in FeatureGroup</Popup>
              <Circle center={[51.51, -0.06]} radius={200} />
              <Rectangle bounds={rectangle} />
            </FeatureGroup>{" "}
          </GroupedLayer>
        </LayerControl>
      </MapContainer>
    </div>
  );
}
