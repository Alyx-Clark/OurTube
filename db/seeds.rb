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

user8 = User.create(email: "user8@email.com", password: "wizardsrule", user_name: "BlockBuster93Champ", first_name: "cinna", last_name: "bun")
userpic8 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/user8pic.png")
user8.profile_pic.attach(io: userpic8, filename: "user8pic.png")

user9 = User.create(email: "user9@email.com", password: "wizardsrule", user_name: "BlockBuster94Champ", first_name: "crun", last_name: "chy")
userpic9 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/user9pic.png")
user9.profile_pic.attach(io: userpic9, filename: "user9pic.png")

user10 = User.create(email: "user10@email.com", password: "wizardsrule", user_name: "37''VerticalLeap", first_name: "NEP", last_name: "TR")
userpic10 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/user10pic.png")
user10.profile_pic.attach(io: userpic10, filename: "user10pic.png")

user11 = User.create(email: "user11@email.com", password: "wizardsrule", user_name: "LamborghiniDiabloVT", first_name: "Earl", last_name: "Lemongrab")
userpic11 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/user11pic.png")
user11.profile_pic.attach(io: userpic11, filename: "user11pic.png")

demo1 = User.create(email: "demo@email.com", password: "password", user_name: "docterdemo", first_name: "tree", last_name: "trunks")
demopic1 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/finaldoc.png")
demo1.profile_pic.attach(io: demopic1, filename: "finaldoc.png")


vid1 = Video.create(title: "THIS HAPPENED...(not clickbait)", description: "Wow this was one of the most surprising things!", uploader_id: 1)
file1 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/rocket.mp4")
vid1.uploaded_video.attach(io: file1, filename: "rocket.mp4")
pic1 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/rocketthumb.png")
vid1.uploaded_thumbnail.attach(io: pic1, filename: "rocketthumb.png")

vid2 = Video.create(title: "Amazing home grown Basil Plants?", description: "Fresh home grown basil after only 3 weeks!", uploader_id: 2)
file2 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/basil.mp4")
vid2.uploaded_video.attach(io: file2, filename: "basil.mp4")
pic2 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/basilthumb.png")
vid2.uploaded_thumbnail.attach(io: pic2, filename: "basilthumb.png")

vid3 = Video.create(title: "Plastic 3d models printed with PLA and ABS plastics", description: "Different models made using a 3d printer!", uploader_id: 3)
file3 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/3dprints.mp4")
vid3.uploaded_video.attach(io: file3, filename: "3dprints.mp4")
pic3 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/3dprintsthumb.png")
vid3.uploaded_thumbnail.attach(io: pic3, filename: "3dprintsthumb.png")

vid4 = Video.create(title: "Another Survival - A game developed using javascript", description: "AAA Title Limited Edition Video Game Another Survival", uploader_id: 4)
file4 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/anothersurvival.mp4")
vid4.uploaded_video.attach(io: file4, filename: "anothersurvival.mp4")
pic4 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/anothersurvivalthumb.png")
vid4.uploaded_thumbnail.attach(io: pic4, filename: "anothersurvivalthumb.png")

vid5 = Video.create(title: "How to master the ancient art of pen spinning!", description: "Follow these movements to quickly master pen spinning!", uploader_id: 5)
file5 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/penspinning.mp4")
vid5.uploaded_video.attach(io: file5, filename: "penspinning.mp4")
pic5 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/penspinningthumb.png")
vid5.uploaded_thumbnail.attach(io: pic5, filename: "penspinningthumb.png")

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

vid8 = Video.create(title: "Minecraft speedrun world record attempt", description: "World record speedrun attempt of minecraft", uploader_id: 8)
file8 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/minecraft.mp4")
vid8.uploaded_video.attach(io: file8, filename: "minecraft.mp4")
pic8 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/minecraftthumb.png")
vid8.uploaded_thumbnail.attach(io: pic8, filename: "minecraftthumb.png")

vid9 = Video.create(title: "Halo EAZY double (laugh)", description: "Highly skilled mlg player getting a double kill on opponents", uploader_id: 9)
file9 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/halo.mp4")
vid9.uploaded_video.attach(io: file9, filename: "halo.mp4")
pic9 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/halothumb.png")
vid9.uploaded_thumbnail.attach(io: pic9, filename: "halothumb.png")

vid10 = Video.create(title: "Greatest Rocket League moment of all time?", description: "Hitting eazy clips with other gamers online", uploader_id: 10)
file10 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/rocketlge.mp4")
vid10.uploaded_video.attach(io: file10, filename: "rocketlge.mp4")
pic10 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/rocketlgethumb.png")
vid10.uploaded_thumbnail.attach(io: pic10, filename: "rocketlgethumb.png")

vid11 = Video.create(title: "Secret LEDGE in new PortalWars completely broken!!!!", description: "This is the new over powered ledge in the fps PortalWars", uploader_id: 11)
file11 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/portalwars.mp4")
vid11.uploaded_video.attach(io: file11, filename: "portalwars.mp4")
pic11 = URI.open("https://ourtube-seeds.s3.us-east-2.amazonaws.com/portalwarsthumb.png")
vid11.uploaded_thumbnail.attach(io: pic11, filename: "portalwarsthumb.png")


com1 = Comment.create(body: "You are truly amazing, I have never seen something so hard be made to look so easy! You will go pro one day, maybe.", commenter_id: 1, video_id: 5)
com2 = Comment.create(body: "I'm here to check the views, who else? Anyone?", commenter_id: 2, video_id: 7)
com3 = Comment.create(body: "Is time-travelling legal?", commenter_id: 3, video_id: 4)
com4 = Comment.create(body: "Haters gonna hate", commenter_id: 4, video_id: 1)
com5 = Comment.create(body: "Somehow, I end up here every single day", commenter_id: 5, video_id: 11)
com6 = Comment.create(body: "Riverdale brought me here", commenter_id: 6, video_id: 8)
com7 = Comment.create(body: "I have nothing to do with this video. It's just a promotion", commenter_id: 7, video_id: 5)
com8 = Comment.create(body: "Please, like my comment, or this cat won't like me", commenter_id: 8, video_id: 2)
com9 = Comment.create(body: "I'm in the weird part of OurTube again", commenter_id: 9, video_id: 9)
com10 = Comment.create(body: "What did I just watch", commenter_id: 10, video_id: 6)
com11 = Comment.create(body: "Let's be honest, this wasn't in your recommendations you search for it", commenter_id: 11, video_id: 3)
com12 = Comment.create(body: "OurTube deserves better", commenter_id: 1, video_id: 11)
com13 = Comment.create(body: "Literally to the 1% who's reading this, have a great day!", commenter_id: 2, video_id: 9)
com14 = Comment.create(body: "My nieghbours loved this video so much, they invited me over to watch it with them", commenter_id: 3, video_id: 7)
com15 = Comment.create(body: "The funniest part of this video was the unfunny thing", commenter_id: 4, video_id: 10)
com16 = Comment.create(body: "Wow! I actually legit never saw that coming", commenter_id: 5, video_id: 3)
com17 = Comment.create(body: "This was such a great idea, I am now inspired", commenter_id: 6, video_id: 1)
com18 = Comment.create(body: "Congrats on the channel! Can't wait to see it grow!", commenter_id: 7, video_id: 10)
com19 = Comment.create(body: "This channel really is going to be huge one day", commenter_id: 8, video_id: 8)
com20 = Comment.create(body: "This guy is like the Mr. Beast of OurTube", commenter_id: 9, video_id: 6)
com21 = Comment.create(body: "lololollolololoololollololololol", commenter_id: 10, video_id: 4)
com22 = Comment.create(body: "hahahahhahhahahahahahhahaha", commenter_id: 11, video_id: 2)
com23 = Comment.create(body: "Whos still here in 2022?", commenter_id: 1, video_id: 10)
com24 = Comment.create(body: "I found this channel randomly, it really produces great content", commenter_id: 2, video_id: 8)
com25 = Comment.create(body: "I've spent my entire lock down watch videos on OurTube", commenter_id: 3, video_id: 6)
com26 = Comment.create(body: "I've been wanting to get my little brother a christmas present, I might get him this", commenter_id: 4, video_id: 4)
com27 = Comment.create(body: "Having the opportunity to do something great in life is all it takes", commenter_id: 5, video_id: 2)
com28 = Comment.create(body: "Good friends are a blessing, but bad company corrupts good character", commenter_id: 6, video_id: 11)
com29 = Comment.create(body: "First! oh wait......", commenter_id: 7, video_id: 9)
com30 = Comment.create(body: "Oh now I get it! ha!", commenter_id: 8, video_id: 7)
com31 = Comment.create(body: "( ͡° ͜ʖ ͡°)", commenter_id: 9, video_id: 5)
com32 = Comment.create(body: "(づ｡ ◕‿‿◕｡) づ", commenter_id: 10, video_id: 3)
com33 = Comment.create(body: "( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°) ʕ•ᴥ•ʔ", commenter_id: 11, video_id: 1)