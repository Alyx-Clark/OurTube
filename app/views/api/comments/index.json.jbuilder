@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :body, :commenter_id, :video_id
        json.date time_ago_in_words(comment.created_at) + " ago"
        json.commenter do 
            json.extract! comment.commenter, :id, :username, :profile_pic
        end
    end
end