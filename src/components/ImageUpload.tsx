import React, { useState } from "react";
import { IconUpload } from "../../public/icons";
import { Inter } from "@next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ImageUpload: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);

      fetch("/api/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => {})
        .catch((error) => {});
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-5 mt-4 flex h-32 w-80 border-spacing-1 items-center justify-center border border-gray-200">
        {previewImage ? (
          <img
            src={previewImage}
            alt="Preview"
            style={{ maxWidth: "320px", maxHeight: "128px" }}
          />
        ) : (
          <Image
            src="/images/bg-upload-image.png"
            alt="bg-image-upload"
            width={320}
            height={128}
          />
        )}
      </div>
      <div className="flex h-8 w-150 cursor-pointer items-center rounded bg-bs-teal-2">
        <div className="border-r p-2">{IconUpload}</div>
        <label
          htmlFor="file-upload"
          className={`${inter.className} cursor-pointer px-8 py-2 text-xs text-white`}
        >
          UPLOAD
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleImageChange}
          className="absolute opacity-0"
        />
      </div>
    </form>
  );
};

export default ImageUpload;