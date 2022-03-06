class Api::VideosController < ApplicationController

    def show
        @video = Video.find_by(id: params[:id])
        if @video
            render :show
        else
            render json: ["Video failed to load"], status: 422
        end
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
        params.require(:video).permit( :uploaded_video, :uploaded_thumbnail, :title, :description, :uploader_id)
    end
end