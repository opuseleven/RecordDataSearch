import { DiscogObj } from '../types';
import { useState, useEffect } from 'react';
import styles from '../styles/Components.module.css';

interface RenderDiscogObjProps {
  obj: DiscogObj,
  darkMode: boolean
}

const RenderDiscogObj: React.FC<RenderDiscogObjProps> = ({ obj, darkMode }) => {

  const [displayedObj, setDisplayedObj] = useState(obj);

  useEffect(() => {
    setDisplayedObj(obj);
  }, [obj])

  return (
    <div className={darkMode ? styles.objcontainerdark : styles.objcontainer}>
      <ul>
        <li>
          <h5 className={darkMode ? styles.objtextdark : styles.objtext}>
            {displayedObj.name}
          </h5>
        </li>
        <div>
          {
            displayedObj.entity_type_name && (
              <li>
                <h5 className={darkMode ? styles.objtextdark : styles.objtext}>
                  Type: {displayedObj.entity_type_name}
                </h5>
              </li>
            )
          }
        </div>
        <div>
          {
            displayedObj.role && (
              <li>
                <h5 className={darkMode ? styles.objtextdark : styles.objtext}>
                  Role: {displayedObj.role}
                </h5>
              </li>
            )
          }
        </div>
      </ul>
    </div>
  )
}
export { RenderDiscogObj };
