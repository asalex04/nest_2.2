import { Test, TestingModule } from '@nestjs/testing';
import { bookStub } from './book.stub';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { CreateBookDto } from './interfaces/dto/createBook.dto';
import { Book } from './schemas/book.schema';

describe('BooksController', () => {
  let booksController: BooksController;
  let booksService: BooksService

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [
        {
          provide: BooksService,
          useValue: {
            getAllBooks: jest.fn(),
            createBooks: jest.fn(),
          },
        },
      ]
    }).compile();

    booksService = moduleRef.get<BooksService>(BooksService)
    booksController = moduleRef.get<BooksController>(BooksController);
  });

  describe('getAllBooks', () => {
    it('should return an array of books', async () => {
      const result = [bookStub()]
      jest.spyOn(booksService, 'getAllBooks').mockResolvedValue(result);
      expect(await booksController.getAllBooks()).toBe(result);
    });
  });

  // describe('createBook', () => {
  //   describe('when createBook is called', () => {
  //     let book: Book
  //     let createBookDto: CreateBookDto
  //     beforeEach(async () => {
  //       createBookDto = {
  //         title: bookStub().title,
  //         author: bookStub().author,
  //         description: bookStub().description
  //       }
  //       book = await booksController.createBook(createBookDto);
  //       console.log(book)
  //     })

      // it('then it should call booksService', () => {
      //   const {title, author, description} = createBookDto
      //   expect(booksService.createBook).toHaveBeenCalledWith(title, author, description);
      // })

      // test('then it should return a book', async () => {
      //   expect(book).toEqual(bookStub())
      // })
  //   })
  // })
});
