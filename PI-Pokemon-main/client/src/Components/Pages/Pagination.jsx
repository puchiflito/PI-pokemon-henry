import style from "./pagination.module.css";
const Pagination = ({ setPaginaActual, paginaActual, nPage }) => {
  const next = () => {
    paginaActual !== nPage
      ? setPaginaActual(paginaActual + 1)
      : alert("There are no pages to show");
  };
  const prev = () => {
    paginaActual !== 1
      ? setPaginaActual(paginaActual - 1)
      : alert("You are on the first page");
  };
  return (
    <div className={style.page}>
      <button className={style.btn} onClick={prev}>
        Prev
      </button>
      <h3>
        {paginaActual} / {nPage}
      </h3>
      <button className={style.btn} onClick={next}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
