import CardLayout from './CardLayout';

function ParentCardLayout() {
  return (
    <>
      <CardLayout>
        <p>Props of Components</p>
      </CardLayout>

      <CardLayout title="Details">
        <ul>
          <li>Feature A</li>
          <li>Feature B</li>
          <li>Feature C</li>
        </ul>
      </CardLayout>

      <CardLayout title={'Contact'}>
        <p>Email : example@example.com</p>
        <p>phone : 123-456-7890</p>
      </CardLayout>
    </>
  );
}

export default ParentCardLayout;
