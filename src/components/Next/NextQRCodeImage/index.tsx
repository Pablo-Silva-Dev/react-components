import React from 'react'
import Image from 'next/image'

interface NextQRCodeImageProps {
  qrCodeURL: string
}

export function NextQRCodeImage({ qrCodeURL }: NextQRCodeImageProps) {
  return (
    <Image
      src={`data:image/jpeg;base64,${qrCodeURL}`}
      alt="qrcode"
      width="240"
      height="240"
    />

  )
}
