import BasicLayout from '../../layouts/BasicLayout';
import { genres } from '../../utils/novelUtil';
import NovelList from './NovelList';

const Home = () => {
  return (
    <BasicLayout>
      <header className="mb-6 flex">
        <h1 className="grow text-[32px]">Book List</h1>
        <div>
          <input
            type="text"
            placeholder="Search by title or author"
            className="w-50 rounded-sm border-2 border-gray-300 p-2 text-[.9em] leading-tight outline-0"
          />
          <select
            name="genre"
            className="ml-2 rounded-sm border-2 border-gray-300 p-2 text-[.9em] leading-tight outline-0"
          >
            <option value="">All Genres</option>
            {genres.map((genre, idx) => (
              <option key={idx} value={idx + 1}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </header>
      <NovelList />
    </BasicLayout>
  );
};

export default Home;
