class Api::VideosController < ApplicationController

    def show
        @video = Video.find(params[:id])
        render :show
    end

    def index
        @videos = Video.all
        render :index
    end 

    def create
        @video = Video.new(video_params)

        if @video.save
            render :show
        else
            render json: @video.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        @video = Video.find(params[:id])
        if @video.destroy
            render json: @video.id
        else
            render json: @video.errors.full_messages, status: :unprocessable_entity
        end
    end



    def video_params
        params.require(:video).permit( :title, :description, :uploader_id)
    end
end