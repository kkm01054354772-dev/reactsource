import { genres } from '../../utils/novelUtil';

const NovelForm = () => {
  return (
    <form className="mt-6 flex flex-col gap-3">
      <input
        name="title"
        placeholder="Title"
        required
        className="rounded-xs border-2 border-stone-300 p-2"
      />
      <input
        name="author"
        placeholder="Author"
        required
        className="rounded-xs border-2 border-stone-300 p-2"
      />
      <select name="genre" className="rounded-xs border-2 border-stone-300 p-2">
        <option value="">Select Genre</option>
        {genres.map((genre, idx) => (
          <option key={idx} value={idx + 1}>
            {genre}
          </option>
        ))}
      </select>
      <input
        name="publishedDate"
        type="date"
        placeholder="Published Date"
        required
        className="rounded-xs border-2 border-stone-300 p-2"
      />
      <input
        name="rating"
        type="number"
        placeholder="Rating (1-5)"
        min="1"
        max="5"
        className="rounded-xs border-2 border-stone-300 p-2"
      />
      <label>
        <input
          name="available"
          type="checkbox"
          className="mr-1.5 rounded-xs border-2 border-stone-300 p-2"
        />
        Available
      </label>
      <div className="p-2 text-center">
        <button
          type="submit"
          className="mx-1 my-6 rounded-[3px] bg-sky-500 px-4.5 py-3 text-[1.2em] text-white hover:bg-sky-800"
        >
          Add
        </button>
        <button
          type="button"
          className="mx-1 my-6 rounded-[3px] bg-red-700 px-4.5 py-3 text-[1.2em] text-white hover:bg-red-900"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NovelForm;
