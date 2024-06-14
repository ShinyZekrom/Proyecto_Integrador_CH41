//funciones de cloudinary para el funcionamiento de la API para obtener el url de imágenes

// Import the Cloudinary class.
import { Cloudinary } from "@cloudinary/url-gen";

// Import any actions and qualifiers required for transformations.
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'dtlbnmahy'
  }
});

// Instantiate a CloudinaryImage object for the image with the public ID, 'front_face'.
const myImage = cld.image('front_face');

// Apply the transformation.
myImage
  .resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face())))  // Crop the image, focusing on the face.
  .roundCorners(byRadius(20));    // Round the corners.

// Render the image in an 'img' element.
const imgElement = document.createElement('img');
document.body.appendChild(imgElement);
imgElement.src = myImage.toURL();


import {v2 as cloudinary} from 'cloudinary';
(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: "dtlbnmahy", 
        api_key: "999862157736225", 
        api_secret: "oQ2PICSivprPl5agc3RdXTI16q0" // Click 'View Credentials' below to copy your API secret
    });
    
    // Upload an image
    const uploadResult = await cloudinary.uploader.upload("https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg", {
        public_id: "shoes"
    }).catch((error)=>{console.log(error)});
    
    console.log(uploadResult);
    
    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url("shoes", {
        fetch_format: 'auto',
        quality: 'auto'
    });
    
    console.log(optimizeUrl);
    
    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url("shoes", {
        crop: 'auto',
        gravity: 'auto',
        width: 500,
        height: 500,
    });
    
    console.log(autoCropUrl);    
})();