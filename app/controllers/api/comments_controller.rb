class Api::CommentsController < ApplicationController
    before_action :require_logged_in
  
    def create
      @video = Video.find(params[:video_id])
      @comment = @video.comments.new(comment_params)
  
      if @comment.save
        render :show
      else
        render json: @comment.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @comment = Comment.find(params[:id])
      
      if @comment.destroy
        render json: @comment.id
      else
        render json: @comment.errros.full_messages, status: :unprocessable_entity
      end
    end
  
    private
  
    def comment_params
      params.require(:comment).permit(:commenter_id, :body, :video_id)
    end
end