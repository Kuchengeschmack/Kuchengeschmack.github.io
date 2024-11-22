interface Photo {
  alt: string
  src: string
}

interface Header {
  menuItems: {
    title: string
    link: string
  }[]
  title: string
}

declare module 'assets/images/images.json' {
  const photos: Photo[];
  export default photos;
}

declare module 'assets/header.json' {
  const header: Header;
  export default header;
}
