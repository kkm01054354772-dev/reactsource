type ChildProps = {
  title: string;
};

function Header({ title }: ChildProps) {
  return (
    <header>
      <h1 className="text-3xl">
        <a href="/">{title}</a>
      </h1>
    </header>
  );
}
export default Header;
