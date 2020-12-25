export interface Beer {
  id: number,
  name: string,
  first_brewed: string,
  description: string,
  image_url: string,
  abv: number,
  ibu: number,
  volume: object,
  food_pairing: Array<string>,
  contributed_by: string,
}