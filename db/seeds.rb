# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'
Video.destroy_all
Comment.destroy_all
User.destroy_all

user1 = User.create(email: "user1@email.com", password: "password", user_name: "6'8 Gaming Great", first_name: "simon", last_name: "petrikov")
userpic1 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/user1pic.png")
user1.profile_pic.attach(io: userpic1, filename: "user1pic.png")

user2 = User.create(email: "user2@email.com", password: "wizardsrule", user_name: "EthopianCatepillar", first_name: "finn", last_name: "mertens")
userpic2 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/user2pic.png")
user2.profile_pic.attach(io: userpic2, filename: "user2pic.png")

user3 = User.create(email: "user3@email.com", password: "wizardsrule", user_name: "TheDoc", first_name: "jake", last_name: "thedog")
userpic3 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/user3pic.png")
user3.profile_pic.attach(io: userpic3, filename: "user3pic.png")

user4 = User.create(email: "user4@email.com", password: "wizardsrule", user_name: "SlickDaddy", first_name: "marceline", last_name: "abadeer")
userpic4 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/user4pic.png")
user4.profile_pic.attach(io: userpic4, filename: "user4pic.png")

user5 = User.create(email: "user5@email.com", password: "wizardsrule", user_name: "TheTwoTime", first_name: "bonnibel", last_name: "bubblegum")
userpic5 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/user5pic.png")
user5.profile_pic.attach(io: userpic5, filename: "user5pic.png")

user6 = User.create(email: "user6@email.com", password: "wizardsrule", user_name: "BlackSteelAKABulletProofMullet", first_name: "Be", last_name: "MOre")
userpic6 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/user6pic.png")
user6.profile_pic.attach(io: userpic6, filename: "user6pic.png")

user7 = User.create(email: "user7@email.com", password: "wizardsrule", user_name: "BestToEverDoIt", first_name: "magic", last_name: "man")
userpic7 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/user7pic.png")
user7.profile_pic.attach(io: userpic7, filename: "user7pic.png")


vid1 = Video.create(title: "Amazing home grown Basil Plants?", description: "Fresh home grown basil after only 3 weeks!", uploader_id: 1)
file1 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/basil.mp4")
vid1.uploaded_video.attach(io: file1, filename: "basil.mp4")
pic1 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/basilthumb.png")
vid1.uploaded_thumbnail.attach(io: pic1, filename: "basilthumb.png")

vid2 = Video.create(title: "Plastic 3d models printed with PLA and ABS plastics", description: "Different models made using a 3d printer!", uploader_id: 2)
file2 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/3dprints.mp4")
vid2.uploaded_video.attach(io: file2, filename: "3dprints.mp4")
pic2 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/3dprintsthumb.png")
vid2.uploaded_thumbnail.attach(io: pic2, filename: "3dprintsthumb.png")

vid3 = Video.create(title: "Another Survival - A game developed using javascript", description: "AAA Title Limited Edition Video Game Another Survival", uploader_id: 3)
file3 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/anothersurvival.mp4")
vid3.uploaded_video.attach(io: file3, filename: "anothersurvival.mp4")
pic3 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/anothersurvivalthumb.png")
vid3.uploaded_thumbnail.attach(io: pic3, filename: "anothersurvivalthumb.png")

vid4 = Video.create(title: "How to master the ancient art of pen spinning!", description: "Follow these movements to quickly master pen spinning!", uploader_id: 4)
file4 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/penspinning.mp4")
vid4.uploaded_video.attach(io: file4, filename: "penspinning.mp4")
pic4 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/penspinningthumb.png")
vid4.uploaded_thumbnail.attach(io: pic4, filename: "penspinningthumb.png")

vid5 = Video.create(title: "Minecraft speedrun world record attempt", description: "World record speedrun attempt of minecraft", uploader_id: 5)
file5 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/minecraft.mp4")
vid5.uploaded_video.attach(io: file5, filename: "minecraft.mp4")
pic5 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/minecraftthumb.png")
vid5.uploaded_thumbnail.attach(io: pic5, filename: "minecraftthumb.png")

vid6 = Video.create(title: "New first person shooter game of the year SpliteGate", description: "Amazing gameplay of the new video game Splitegate", uploader_id: 6)
file6 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/splitgate.mp4")
vid6.uploaded_video.attach(io: file6, filename: "splitgate.mp4")
pic6 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/splitgatethumb.png")
vid6.uploaded_thumbnail.attach(io: pic6, filename: "splitgatethumb.png")

vid7 = Video.create(title: "Call of Duty Warzone battle royal", description: "Amazing gameplay of the new video game Warzone", uploader_id: 7)
file7 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/warzone.mp4")
vid7.uploaded_video.attach(io: file7, filename: "warzone.mp4")
pic7 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/warzonethumb.png")
vid7.uploaded_thumbnail.attach(io: pic7, filename: "warzonethumb.png")

