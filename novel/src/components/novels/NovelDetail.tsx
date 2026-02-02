const NovelDetail = () => {
  return (
    <>
      <section className="mt-6 flex border-t border-neutral-200 p-5">
        <div className="first:grow">
          <h2 className="mb-2.5 text-2xl"></h2>
          <p className="my-1.25">
            <strong>Author : </strong>
          </p>
          <p className="my-1.25">
            <strong>Genre : </strong>
          </p>
          <p className="my-1.25">
            <strong>Published Date :</strong>
          </p>
          <p className="my-1.25">
            <strong>Rating : </strong>
            <span className="ml-1 text-[1.1em] tracking-widest text-sky-500"></span>
          </p>
          <p className="my-1.25">
            <strong>Available : </strong>
          </p>
        </div>
        <div className="text-[8.6em]"></div>
      </section>
      <section className="text-center">
        <button
          //onClick={() => moveToEdit(id)}
          className="mx-1 my-6 rounded-[5px] bg-sky-600 px-4 py-3 text-[1.2em] text-white hover:bg-sky-900"
        >
          Edit Book
        </button>
        <button
          // onClick={handleDelete}
          className="mx-1 my-6 rounded-[5px] bg-red-600 px-4 py-3 text-[1.2em] text-white hover:bg-red-900"
        >
          Delete Book
        </button>
      </section>
    </>
  );
};

export default NovelDetail;
