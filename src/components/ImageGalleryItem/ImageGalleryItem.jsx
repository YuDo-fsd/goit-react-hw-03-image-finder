import React from 'react';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ imageList }) {
  return (
    <GalleryItem class="gallery-item">
      <GalleryImage src="" alt="" />
    </GalleryItem>
  );
}
