import { useState, useEffect } from 'react';
import { Pagination } from '../types';
import styles from '../styles/Components.module.css';

interface ResultsPageNavProps {
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  pagination: Pagination
}

const ResultsPageNav: React.FC<ResultsPageNavProps> = ({ page, setPage, pagination }) => {

  const [pageNumber, setPageNumber] = useState(page);
  const [lastPage, setLastPage] = useState(pagination.pages)

  useEffect(() => {
    setPageNumber(page);
  }, [page])

  useEffect(() => {
    setLastPage(pagination.pages);
  }, [pagination])

  function handleBackClick() {
    setPage(pageNumber - 1);
  }

  function handleNextClick() {
    setPage(pageNumber + 1);
  }

  return (
    <div className={styles.pagenavcontainer}>
      <div>
        {
          pageNumber > 1 && (
            <button onClick={() => handleBackClick()} className={styles.pagenavbackbutton}>
              Back page
            </button>
          )
        }
      </div>
      <div>
        <h6 className={styles.pagenumber}>{pageNumber.toString()}</h6>
      </div>
      <div>
        {
          pageNumber < lastPage && (
            <button onClick={() => handleNextClick()} className={styles.pagenavnextbutton}>
              Next page
            </button>
          )
        }
      </div>
    </div>
  )
}
export { ResultsPageNav };
