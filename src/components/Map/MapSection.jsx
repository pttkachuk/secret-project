import React from "react";
import {
  GoogleMap,
  GoogleMapIframe,
  StyledMapSection,
  StyledMapWrapper,
} from "./MapSectionStyled";

const MapSection = () => {
  return (
    <StyledMapSection>
      <StyledMapWrapper>
        <GoogleMap>
          <GoogleMapIframe
            title="word of faith"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d553.8689182905581!2d9.68639831157918!3d45.69673392057877!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478150e236849dd9%3A0x51b13a0ffa2b5480!2zQ2hpZXNhIEV2YW5nZWxpY2EgIlBBUk9MQSBESSBGRURFIiDQptC10YDQutCy0LAg0KXQktCEINCh0LvQvtCy0L4g0JLRltGA0LggQmVyZ2FtbyBJdGFseQ!5e0!3m2!1sit!2sit!4v1707399299947!5m2!1sit!2sit"
            width="600"
            height="300"
            style={{ border: "transparent", borderRadius: 5 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></GoogleMapIframe>
        </GoogleMap>
      </StyledMapWrapper>
    </StyledMapSection>
  );
};

export default MapSection;
