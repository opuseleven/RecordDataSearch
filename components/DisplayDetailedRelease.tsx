import { DetailedRelease } from '../types';
import { RenderDiscogObj, RenderExtraArtist, RenderTrack } from '.';
import styles from '../styles/Components.module.css';

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
          <li className={styles.discoglink}>
            <a target='_blank' href={detailedRelease.uri}>
              View on Discogs
            </a>
          </li>
        </ul>

        <div>
          <h5>Labels:</h5>
          {
            labels && (
              labels.map(l => (
                <div key={l.id.toString()}>
                  <RenderDiscogObj obj={l} />
                </div>
              ))
            )
          }
        </div>

        <div>
          <h5>Companies:</h5>
          {
            companies && (
              companies.map(c => (
                <div key={c.id.toString()}>
                  <RenderDiscogObj obj={c} />
                </div>
              ))
            )
          }
        </div>

        <div>
          <h5>Additional Artists:</h5>
          {
            extraArtists && (
              extraArtists.map(a => (
                <div key={a.id.toString()}>
                  <RenderExtraArtist extraArtist={a} />
                </div>
              ))
            )
          }
        </div>

        <div>
        <h5>Tracklist: </h5>
          {
            tracklist && (
              tracklist.map(t => (
                <div key={t.position.toString()}>
                  <RenderTrack track={t} />
                </div>
              ))
            )
          }
        </div>
      </div>
    </div>
  )
}
export { DisplayDetailedRelease };
