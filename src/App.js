// Setup vars
const books = [
    {
        id: 1,
        img:
            'https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL._AC_UL200_SR200,200_.jpg',
        title: '1984 (Signet Classics)',
        author: 'George Orwell',
    },
    {
        id: 2,
        img:
            'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
        title: 'I Love You to the Moon and Back',
        author: 'Amelia Hepworth',
    },
];

function BookList() {
    return (
        <section>
            {books.map((book) => {
                return <Book key={book.id} {...book}></Book>;
            })}
        </section>
    );
}

const Book = (props) => {
    const { img, title, author } = props;
    return (
        <article>
            <img src={img} alt='' />
            <h2>{title}</h2>
            <p>{author}</p>
        </article>
    );
};

export default BookList;
