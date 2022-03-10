json.extract! @comment, :id, :body, :commenter_id, :video_id
json.date time_ago_in_words(@comment.created_at) + " ago"
json.commenter do 
  json.extract! @comment.commenter, :id, :user_name
  if @comment.commenter.profile_pic.attached?
    json.profile_pic url_for(@comment.commenter.profile_pic)
  else
    json.profile_pic url_for("https://ourtube-seeds.s3.us-east-2.amazonaws.com/guestuser.png")
  end
end