import { v2 as cloudinary } from 'cloudinary';

export const configCloudinary = () => {
  cloudinary.config({
    cloud_name: "dbxig0wnv",
    api_key: "483969599793575",
    api_secret: "9zIJOsoFXDXGOAdR3bHGLh8pNA8",
  });

  return cloudinary;
};
