@videos.each do |video|
    json.set! video.id do
        json.extract! video, :id, :title, :description
        json.uploadedVid url_for(video.uploaded_video)
        if video.uploaded_thumbnail.attached?
            json.uploadedThumbnail url_for(video.uploaded_thumbnail)
        else
            json.uploadedThumbnail nil
        json.user do 
            json.extract! video.user, :id, :username
        end
    end
end


if video.thumbnail.attached?
    json.thumbnail url_for(video.thumbnail)
else
    json.thumbnail "none"
end