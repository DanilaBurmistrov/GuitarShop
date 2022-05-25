import { Link, useParams } from 'react-router-dom';
import { GUITAR_PER_PAGE } from '../../const';

type PaginationProps = {
  totalGuitarsCount: number
}

export default function Pagination({totalGuitarsCount}: PaginationProps): JSX.Element {

  const {pageNumber} = useParams();

  let pageId = pageNumber;

  const pagesCount = Math.ceil(totalGuitarsCount / GUITAR_PER_PAGE);

  if(!pageNumber) {
    pageId = '1';
  }

  return (
    <div className="pagination page-content__pagination">
      <ul className="pagination__list">
        {
          pageId !== '1' &&
            <li className="pagination__page pagination__page--prev" id="prev"><Link  to={`/catalog/page_${Number(pageId) - 1}`} className="link pagination__page-link" >Назад</Link>
            </li>
        }

        {
          Array.from({ length: pagesCount }, (v, k) => k).map((_, ind) => (
            <li key={_} className={`pagination__page ${ind + 1 === Number(pageId) && 'pagination__page--active'}`}><Link to={`/catalog/page_${ind + 1}`} className="link pagination__page-link" >{ind + 1}</Link>
            </li>
          ))
        }
        {Number(pageId) !== pagesCount &&
      <li className="pagination__page pagination__page--next" id="next"><Link  to={`/catalog/page_${Number(pageId) + 1}`} className="link pagination__page-link" >Далее</Link>
      </li>}
      </ul>
    </div>
  );

}
