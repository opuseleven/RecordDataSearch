import { ExtraArtist } from '../types';

interface RenderExtraArtistProps {
  extraArtist: ExtraArtist
}

const RenderExtraArtist: React.FC<RenderExtraArtistProps> = ({ extraArtist }) => {

  return (
    <div>
      <ul>
        <li><h6>{extraArtist.role} - {extraArtist.name}</h6></li>
      </ul>
    </div>
  )
}
export { RenderExtraArtist };
