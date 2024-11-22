interface Photo {
  alt: string
  src: string
}

declare module 'assets/images/images.json' {
  const photos: Photo[];
  export default photos;
}
