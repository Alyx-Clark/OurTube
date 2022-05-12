@likes.each do |like|
    json.set! like.id do
        json.extract! like, :id, :video_id, :liker_id, :disliker_id
    end
end