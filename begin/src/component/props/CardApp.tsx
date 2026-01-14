import InfoCard, { type Card } from './InfoCard';

const cards: Card[] = [
  {
    title: 'Props in React',
    content: 'Props pass data from one component to another.',
    author: 'Alice',
  },
  {
    title: 'React Composition',
    content: 'Props pass data from one component to another.',
    author: 'Charlie',
  },
  {
    content: 'Props pass data from one component to another.',
  },
];

function CardApp() {
  return (
    <>
      {cards.map((card) => (
        <InfoCard
          title={card.title}
          content={card.content}
          author={card.author}
        />
      ))}
    </>
  );
}

export default CardApp;
