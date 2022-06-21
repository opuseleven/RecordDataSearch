import { DiscogObj } from '../types';
import { useState, useEffect } from 'react';
import styles from '../styles/Components.module.css';

interface RenderDiscogObjProps {
  obj: DiscogObj
}

const RenderDiscogObj: React.FC<RenderDiscogObjProps> = ({ obj }) => {

  const [displayedObj, setDisplayedObj] = useState(obj);

  useEffect(() => {
    setDisplayedObj(obj);
  }, [obj])

  return (
    <div className={styles.objcontainer}>
      <ul>
        <li><h5>{displayedObj.name}</h5></li>
        <div>
          {
            displayedObj.entity_type_name && (
              <li><h5>Type: {displayedObj.entity_type_name}</h5></li>
            )
          }
        </div>
        <div>
          {
            displayedObj.role && (
              <li><h5>Role: {displayedObj.role}</h5></li>
            )
          }
        </div>
      </ul>
    </div>
  )
}
export { RenderDiscogObj };
