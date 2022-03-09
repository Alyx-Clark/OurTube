@videos.each do |video|
    json.set! video.id do
        json.extract! video, :id, :title, :description
        json.uploaded_video url_for(video.uploaded_video)
        json.date time_ago_in_words(video.created_at) + " ago"
        if video.uploaded_thumbnail.attached?
            json.uploaded_thumbnail url_for(video.uploaded_thumbnail)
        else
            json.uploaded_thumbnail nil
        end
        json.user do 
            json.extract! video.user, :id, :user_name
            json.profile_pic url_for(video.user.profile_pic)
        end
        json.comments video.comments do |comment|
            json.id comment.id
            json.body comment.body
            json.date time_ago_in_words(comment.created_at) + " ago"
            json.commenter do
                json.extract! comment.commenter, :id, :user_name
                json.profile_pic url_for(comment.commenter.profile_pic)
            end
        end
    end
end