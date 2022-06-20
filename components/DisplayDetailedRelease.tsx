import { DetailedRelease } from '../types';
import { RenderDiscogObj, RenderExtraArtist, RenderTrack } from '.';

interface DisplayDetailedReleaseProps {
  detailedRelease: DetailedRelease
}

const DisplayDetailedRelease: React.FC<DisplayDetailedReleaseProps> = ({ detailedRelease }) => {

  const companies = detailedRelease.companies;
  const artists = detailedRelease.artist;
  const labels = detailedRelease.labels;
  const formats = detailedRelease.formats;
  const tracklist = detailedRelease.tracklist;
  const extraArtists = detailedRelease.extraartists;

  return (
    <div>
      <h4>{detailedRelease.title}</h4>
      <div>
        <ul>
          <li>Year: {detailedRelease.released}</li>
          <li>Country: {detailedRelease.country}</li>
          <li>Genres: {detailedRelease.genres}</li>
        </ul>

        <div>
          <h5>Labels:</h5>
          {
            labels && (
              labels.map(l => (
                <RenderDiscogObj obj={l} />
              ))
            )
          }
        </div>

        <div>
          <h5>Companies:</h5>
          {
            companies && (
              companies.map(c => (
                <RenderDiscogObj obj={c} />
              ))
            )
          }
        </div>

        <div>
          <h5>Additional Artists:</h5>
          {
            extraArtists && (
              extraArtists.map(a => (
                <RenderExtraArtist extraArtist={a} />
              ))
            )
          }
        </div>

        <div>
        <h5>Tracklist: </h5>
          {
            tracklist && (
              tracklist.map(t => (
                <RenderTrack track={t} />
              ))
            )
          }
        </div>
      </div>
    </div>
  )
}
export { DisplayDetailedRelease };
