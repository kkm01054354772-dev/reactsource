import type { Topic } from '../types/Topic';
import Article from './Article';
import Header from './Header';
import Nav from './Nav';

const topics: Topic[] = [
  { id: 1, title: 'html', body: 'html이란' },
  { id: 2, title: 'css', body: 'css란' },
  { id: 3, title: 'js', body: 'javascript란' },
];
function MyApp() {
  return (
    <>
      <Header title={'WEB 구성 요소'} />
      <Nav topics={topics} />
      <Article />
    </>
  );
}

export default MyApp;
