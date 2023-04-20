import React from 'react'
import { FC } from 'react';
import { IVideoPlayer } from './video.interface';
import styles from './VideoPlayer.module.scss'
import { useVideo } from './useVideo';
import { useAuth } from '@/hooks/useAuth';
import cn from 'classnames';
import AuthPlaceHolder from './AuthPlaceHolder/AuthPlaceHolder';
import { MaterialIcon } from '@/components/ui/icons/MaterialIcon';
const VideoPlayer: FC<IVideoPlayer> = ({ slug, videoSource }) => {
  const { actions, video, videoRef } = useVideo()
  const { user } = useAuth()
  return (
    <div className={cn(styles.wrapper, {
      'h-96': !user
    })}>
      {user
        ? <>
          <video ref={videoRef} src={`${videoSource}#t=4`} className={styles.video} preload='metadata' />
          <div className={styles.progressBarContainer}>
            <div style={{ width: `${video.progress}%` }} className={styles.progressBar}></div>
          </div>
          <div className={styles.controls}>
            <div>
              <button onClick={actions.revert}>
                <MaterialIcon name='MdHistory' />
              </button>
              <button className={styles.playButton} onClick={actions.toggleVideo}>
                <MaterialIcon name={video.isPlaying ? 'MdPause' : 'MdPlayArrow'} />
              </button>
              <button onClick={actions.forward}>
                <MaterialIcon name='MdUpdate' />
              </button>

              <div className={styles.timeControls}>
                <p className={styles.controlsTime}>
                  {Math.floor(video.currentTime / 60) +
                    ':' +
                    ('0' + Math.floor(video.currentTime % 60)).slice(-2)}
                </p>
                <p> / </p>
                <p className={styles.controlsTime}>
                  {Math.floor(video.videoTime / 60) +
                    ':' +
                    ('0' + Math.floor(video.videoTime % 60)).slice(-2)}
                </p>
              </div>
            </div>
            <div>
              <button onClick={actions.fullScreen}>
                <MaterialIcon name='MdFullscreen' />
              </button>
            </div>
          </div>
        </>
        : <AuthPlaceHolder slug={slug} />
      }
    </div>
  )
}

export default VideoPlayer