@users.each do |user|
    json.set! user.id do   
        json.extract! user, :id, :user_name, :first_name, :last_name, :email
        if user.profile_pic.attached?
            json.profile_pic url_for(user.profile_pic)
        else
            json.profile_pic url_for("https://ourtube-seeds.s3.us-east-2.amazonaws.com/thedoc.png")
        end
    end
end