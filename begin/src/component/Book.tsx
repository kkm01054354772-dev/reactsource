type Book = {
  id: number;
  title: string;
  published: boolean;
  publisher: string;
};

const books: Book[] = [
  { id: 1, title: 'React basic', published: true, publisher: 'Manning' },
  { id: 2, title: 'Advanced Hooks', published: false, publisher: 'Oreilly' },
  { id: 3, title: 'JSX in Depth', published: true, publisher: 'Packt' },
];

// published: true 책만 출력 (filter)
const publisheds = books.filter((book) => book.published);
function Book() {
  return (
    <>
      {/* 제목 : Published Books (출판된 책이 1개 이상일 때만 제목 출력)*/}
      {publisheds.length > 0 && <h2>Published Books</h2>}
      {/* 출판된 책 여부에 따라 다르게 출력 */}
      {publisheds.length > 0 ? (
        publisheds.map((book) => (
          <article key={book.id}>
            <strong>{book.title}</strong>
            <em>-{book.publisher}</em>
          </article>
        ))
      ) : (
        <p>Published Books Not Found!</p>
      )}
    </>
  );
}

export default Book;
