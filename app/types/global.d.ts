export {};

declare global {
  type AuthorType = {
    name: string;
    gender: string;
    age: number;
    books: BookType[];
  };

  type BookType = {
    name: string;
    type: string;
  };
}
