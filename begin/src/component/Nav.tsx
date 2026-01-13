import type { Topic } from '../types/Topic';

type NavProps = {
  topics: Topic[];
};

//  <li><a href={"/read"}>title</a></li>
function Nav({ topics }: NavProps) {
  return (
    <nav>
      <ol>
        {topics.map((topic) => (
          <li>
            <a href={`/read/${topic.id}`}>{topic.title}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
export default Nav;
