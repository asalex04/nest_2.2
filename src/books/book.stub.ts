import { Book } from "./schemas/book.schema";

export const bookStub = (): Book => {
  return {
    title: 'test',
    author: 'alex',
    description: 'description'
  }
}
