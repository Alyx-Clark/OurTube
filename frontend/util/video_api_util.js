export const fetchVideos = () => (
    $.ajax({
       method: 'GET',
       url: '/api/videos'
   })
)

export const fetchVideo = (videoId) => (
    $.ajax({
       method: 'GET',
       url: `/api/videos/${videoId}`
   })
)

export const deleteVideo = (videoId) => (
    $.ajax({
       method: 'DELETE',
       url: `/api/videos/${videoId}`
   })
)



