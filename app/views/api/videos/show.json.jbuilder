json.extract! @video, :id, :title, :description, :uploader_id
json.uploaded_video url_for(@video.uploaded_video)
json.date time_ago_in_words(@video.created_at) + " ago"
if video.uploaded_thumbnail.attached?
    json.uploaded_thumbnail url_for(@video.uploaded_thumbnail)
else
    json.uploaded_thumbnail nil
end
json.user do 
    json.extract! @video.user, :id, :user_name
    json.profile_pic url_for(@video.user.profile_pic)
end