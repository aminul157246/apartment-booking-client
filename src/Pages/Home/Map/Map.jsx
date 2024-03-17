import GoogleMapReact from "google-map-react";
import { googleAPIkey } from "./MapAPIKey";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const defaultProps = {
  center: {
    lat: 23.8223,
    lng: 90.365417,
  },
  zoom: 11,
};
const Map = () => {
    return (
        <div>
            {/* google map  */}
      <div className="flex  items-center mt-8 gap-12">
        <div className="flex-1" style={{ height: "400px", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: googleAPIkey }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent lat={90.365417} lng={23.8223} text="My Marker" />
          </GoogleMapReact>
        </div>
      </div>
        </div>
    );
};

export default Map;