import { v4 as uuidv4 } from 'uuid'

export interface IBook {
  id: string
  title: string
  description: string
  author: string
}

export default class Book {
  id: string
  constructor(
    public title: string,
    public description: string,
    public author: string,
    id = uuidv4()
  ) {
    this.id = id
  }
}
