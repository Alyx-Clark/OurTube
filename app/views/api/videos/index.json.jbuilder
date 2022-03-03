@videos.each do |video|
    json.set! video.id do
        json.extract! video, :id, :title, :description
        json.uploaded_video url_for(video.uploaded_video)
        if video.uploaded_thumbnail.attached?
            json.uploaded_thumbnail url_for(video.uploaded_thumbnail)
        else
            json.uploaded_thumbnail nil
        json.user do 
            json.extract! video.user, :id, :username
            json.profile_pic url_for(user.profile_pic)
        end
    end
end


if video.uploaded_thumbnail.attached?
    json.uploaded_thumbnail url_for(video.uploaded_thumbnail)
else
    json.uploaded_thumbnail "none"
end