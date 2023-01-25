import React from 'react';
import GoogleMapReact from 'google-map-react';

export type MapProps = {
    lat: number;
    lng: number;
    defaultZoom: number;
    defaultCenter: {
        lat: number;
        lng: number;
    };
};

export function Map(props: MapProps) {
    const { lat, lng, defaultZoom, defaultCenter } = props;

    const Marker = (props: any) => {
        return <div className='SuperAwesomePin'>{props.text}</div>;
    };

    return (
        <GoogleMapReact
            bootstrapURLKeys={{
                key: '',
            }}
            defaultCenter={defaultCenter}
            defaultZoom={defaultZoom}
        >
            <Marker lat={lat} lng={lng} text='Current Location' />
        </GoogleMapReact>
    );
}

export default Map;
