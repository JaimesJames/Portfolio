
import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer  = ({ videoId }:any) => {
  
    // Set up event handlers
    const onReady =  (event:any) => {
      // Access the player instance
      const player = event.target;
  
      // For example, you can automatically play the video
      player.playVideo();
    };
  
    const onError = (error:any) => {
      console.error('YouTube Player Error:', error);
    };

    const opts = {
      // height: '390',
      // width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        mute:1,
        loop:1
      },
    };

  
    return (
      
      <YouTube className='flex justify-center'
        videoId={videoId}
        onReady={onReady}
        onError={onError}
        opts={opts}
        
      />
    );
  };
  
  export default YouTubePlayer;
