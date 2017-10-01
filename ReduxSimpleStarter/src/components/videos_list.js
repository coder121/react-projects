import React from 'react';

import VideoListItem from './video_list_item'
const VideosList=(props)=>{
const videoItems=props.videos.map((video)=>{
return <VideoListItem key={video.etag} video={video} />

});

  return (
    <ul class name="col-md-4 list-group">
    {videoItems}
</ul>


  )

}
export default VideosList;
