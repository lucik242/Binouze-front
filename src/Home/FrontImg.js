import React from 'react';
import pivo from './pivo.jpg'; // Tell Webpack this JS file uses this image
console.log(pivo); // /logo.84287d09.png
function FrontImg() {
 // Import result is the URL of your image
 return <img src={pivo} alt="Logo" />;
}
export default FrontImg;