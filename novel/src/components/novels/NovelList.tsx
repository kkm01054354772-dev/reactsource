import Error from "../common/Error";
import Loading from "../common/Loading";

const NovelList = () => {
  const loading = false;
  const error = false;

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <section className="p-0">
        <article className="mb-2.5 flex items-center rounded-[5px] border-2 border-stone-200 bg-white p-4">
          <div className="pr-4 first:text-5xl"></div>
          <div className="grow">
            <h3></h3>
            <p></p>
            <p className="text-2xl text-sky-400"></p>
          </div>
          <div className="flex flex-col text-[0.9em]">
            <button className={`m-1 w-25 rounded-[3px] bg-sky-500 py-2.5 text-center text-white hover:bg-sky-700`}>Available</button>
            <a href="" className="m-1 w-25 rounded-[3px] bg-stone-100 px-1.5 py-3 text-center">
              Details
            </a>
          </div>
        </article>
      </section>
    </>
  );
};

export default NovelList;
