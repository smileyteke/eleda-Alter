import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    
    faFacebook
   
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">     
      <a href="https://facebook.com/eledaalterations" target='blank'
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>

    </div>
  );
}