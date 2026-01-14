import type { ReactNode } from 'react';
import styles from '../props/Card.module.css';

function CardLayout({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <>
      <div className="{styles.card}">
        <div>{children}</div>
      </div>
    </>
  );
}

export default CardLayout;
