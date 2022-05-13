class Api::LikesController < ApplicationController
    #before_action :require_logged_in

    def index
        @likes = Like.all
        p "hellodddddddddddddd"
        #p @likes
        p "fox"
        #render :index
        render json: @Likes
    end

    def show
        @like = Like.find_by(id: params[:id])
        if @like
            render :show
        else
            render json: ["Like failed to load"], status: 422
        end
    end

    def create
        @like = Like.new(like_params)
        #p "lex"
        #p @like

        if @like.save
            render :show
        else
            render json: ["Need to be signed in to like not really"], status: 422
        end
    end

    def destroy
        @like = Like.find(params[:id])

        if @like.destroy
            render json: @like.id
        else
            render json: ["Cannot delete"], status: 403
        end
    end

    private

    def like_params
        params.require(:like).permit(:video_id, :liker_id, :disliker_id)
    end




end