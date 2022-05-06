@likes.each do |like|
    json.set! like.id do
        json.extract! like, :id, :video_id, :liker_id, :disliker_id, :likes_count, :dislikes_count
    end
end