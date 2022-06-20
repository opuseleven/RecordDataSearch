import { DiscogObj } from '../types';

interface RenderDiscogObjProps {
  obj: DiscogObj
}

const RenderDiscogObj: React.FC<RenderDiscogObjProps> = ({ obj }) => {

  return (
    <div>
      <h6>{obj.name}</h6>
      <div>
        {
          obj.entity_type_name && (
            <p>Type: {obj.entity_type_name}</p>
          )
        }
      </div>
      <div>
        {
          obj.role && (
            <p>Role: {obj.role}</p>
          )
        }
      </div>
    </div>
  )
}
export { RenderDiscogObj };
