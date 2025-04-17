export interface IProduct {
  id?: string,  // L'id peut être soit un string soit undefined
  title: string,
  price: number,
  image: string,
  description: string,
  slug: string,
  category: string
}
