import { DiscogObj } from '../types';
import styles from '../styles/Components.module.css';

interface RenderDiscogObjProps {
  obj: DiscogObj
}

const RenderDiscogObj: React.FC<RenderDiscogObjProps> = ({ obj }) => {

  return (
    <div className={styles.objcontainer}>
      <ul>
        <li><h5>{obj.name}</h5></li>
        <div>
          {
            obj.entity_type_name && (
              <li><h5>Type: {obj.entity_type_name}</h5></li>
            )
          }
        </div>
        <div>
          {
            obj.role && (
              <li><h5>Role: {obj.role}</h5></li>
            )
          }
        </div>
      </ul>
    </div>
  )
}
export { RenderDiscogObj };
