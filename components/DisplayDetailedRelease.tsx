import { DetailedRelease } from '../types';
import { RenderDiscogObj, RenderExtraArtist, RenderTrack } from '.';
import { FC, useState, useEffect } from 'react';
import styles from '../styles/Components.module.css';

interface DisplayDetailedReleaseProps {
  detailedRelease: DetailedRelease,
  darkMode: boolean
}

const DisplayDetailedRelease: FC<DisplayDetailedReleaseProps> = ({ detailedRelease, darkMode }) => {

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

      <h4 className={darkMode ? styles.releasetitledark : styles.releasetitle}>
        {release.title}
      </h4>

      <div>
        <ul>
          <li className={darkMode ? styles.releaseitemdark : styles.releaseitem}>
            Year: {release.released}
          </li>

          <li className={darkMode ? styles.releaseitemdark : styles.releaseitem}>
            Country: {release.country}
          </li>

          <li className={darkMode ? styles.releaseitemdark : styles.releaseitem}>
            Genres: {release.genres}
          </li>

          <li className={darkMode ? styles.discoglinkdark : styles.discoglink}>
            <a target='_blank' href={release.uri} rel="noreferrer">
              View on Discogs
            </a>
          </li>
        </ul>

        <div className={darkMode ? styles.discogobjcontainerdark : styles.discogobjcontainer}>
          <h5 className={darkMode ? styles.discogobjlabeldark : styles.discogobjlabel}>
            Labels:
          </h5>
          {
            labels && (
              labels.map(l => (
                <div key={l.id.toString()}>
                  <RenderDiscogObj obj={l} darkMode={darkMode} />
                </div>
              ))
            )
          }
        </div>

        <div className={darkMode ? styles.discogobjcontainerdark : styles.discogobjcontainer}>
          <h5 className={darkMode ? styles.discogobjlabeldark : styles.discogobjlabel}>
            Companies:
          </h5>
          <div>
            {
              companies && (
                companies.map(c => (
                  <div key={c.id.toString()}>
                    <RenderDiscogObj obj={c} darkMode={darkMode} />
                  </div>
                ))
              )
            }
          </div>
        </div>

        <div className={darkMode ? styles.discogobjcontainerdark : styles.discogobjcontainer}>
          <h5 className={darkMode ? styles.discogobjlabeldark : styles.discogobjlabel}>
            Additional Artists:
          </h5>
          <div>
            {
              extraArtists && (
                extraArtists.map(a => (
                  <div key={a.id.toString()}>
                    <RenderExtraArtist extraArtist={a} darkMode={darkMode} />
                  </div>
                ))
              )
            }
          </div>
        </div>

        <div className={darkMode ? styles.discogobjcontainerdark : styles.discogobjcontainer}>
          <h5 className={darkMode ? styles.discogobjlabeldark : styles.discogobjlabel}>
            Tracklist:
          </h5>
          <div>
            {
              tracklist && (
                tracklist.map(t => (
                  <div key={t.position.toString()}>
                    <RenderTrack track={t} darkMode={darkMode} />
                  </div>
                ))
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export { DisplayDetailedRelease };
