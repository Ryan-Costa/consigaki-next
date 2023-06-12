import React, { useState } from 'react'
import { IconUpload } from '../../public/icons'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const DocumentDownload: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    setSelectedImage(file)

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setPreviewImage(null)
    }
  }

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (selectedImage) {
      const formData = new FormData()
      formData.append('image', selectedImage)

      try {
        fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })
          .then(() => {})
          .catch(() => {})
      } catch (error) {
        console.error('Erro ao fazer o upload da imagem')
      }
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-5 flex h-[138px] w-[150px] border-spacing-1 items-center justify-center border border-gray-200 object-cover">
        {previewImage ? (
          <Image
            src={previewImage}
            alt="Preview"
            className="object-cover"
            width={150}
            height={138}
          />
        ) : (
          <Image
            src="/images/bg-download-image.png"
            alt="bg-image-upload"
            className="object-contain"
            width={150}
            height={138}
          />
        )}
      </div>
      <div className="flex h-8 w-150 cursor-pointer items-center rounded bg-bs-teal-2">
        <div className="border-r p-2">{IconUpload}</div>
        <label
          htmlFor="file-upload"
          className={`${inter.className} cursor-pointer px-8 py-2 text-xs text-white`}
        >
          DOWNLOAD
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleImageChange}
          className="absolute opacity-0"
        />
      </div>
    </form>
  )
}

export default DocumentDownload