class Api::CommentsController < ApplicationController
    before_action :require_logged_in

    def index
      @comments = Comment.all
      render :index
    end
  
    def create
      @comment = Comment.new(comment_params)
  
      if @comment.save
        render :show
      else
        render json: ["Need to be signed in to comment"], status: 422
      end
    end

    def destroy
      @comment = Comment.find(params[:id])
      
      if @comment.destroy
        render json: @comment.id
      else
        render json: ["Cannot delete"], status: 403
      end
    end
  
    private
  
    def comment_params
      params.require(:comment).permit(:commenter_id, :body, :video_id)
    end
end