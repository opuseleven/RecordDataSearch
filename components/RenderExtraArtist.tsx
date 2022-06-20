import { ExtraArtist } from '../types';

interface RenderExtraArtistProps {
  extraArtist: ExtraArtist
}

const RenderExtraArtist: React.FC<RenderExtraArtistProps> = ({ extraArtist }) => {

  return (
    <div>
      <h6>{extraArtist.name}</h6>
      <h6>{extraArtist.role}</h6>
    </div>
  )
}
export { RenderExtraArtist };
