import { DetailedRelease } from '../types';
import { RenderDiscogObj, RenderExtraArtist, RenderTrack } from '.';
import { useState, useEffect } from 'react';
import styles from '../styles/Components.module.css';

interface DisplayDetailedReleaseProps {
  detailedRelease: DetailedRelease
}

const DisplayDetailedRelease: React.FC<DisplayDetailedReleaseProps> = ({ detailedRelease }) => {

  const [release, setRelease] = useState(detailedRelease);

  const [companies, setCompanies] = useState(detailedRelease.companies);
  const [labels, setLabels] = useState(detailedRelease.labels);
  const [tracklist, setTracklist] = useState(detailedRelease.tracklist);
  const [extraArtists, setExtraArtists] = useState(detailedRelease.extraartists);


  useEffect(() => {
    setRelease(detailedRelease);
    setCompanies(detailedRelease.companies);
    setLabels(detailedRelease.labels);
    setTracklist(detailedRelease.tracklist);
    setExtraArtists(detailedRelease.extraartists);
  }, [detailedRelease])

  return (
    <div>
      <h4>{release.title}</h4>

      <div>
        <ul>
          <li>Year: {release.released}</li>
          <li>Country: {release.country}</li>
          <li>Genres: {release.genres}</li>
          <li className={styles.discoglink}>
            <a target='_blank' href={release.uri} rel="noreferrer">
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
