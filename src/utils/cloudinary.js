import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: env.process.CLOUDINARY_API_KEY,
  api_secret: env.process.CLOUDINARY_API_SECRET, // Click 'View Credentials' below to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the file on CLoudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //file has been uploaded
    console.log("File has been uploaded on Cloudinary", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the locally saved temp file as the upload operation got failed
    return null;
  }
};

export { uploadOnCloudinary };
