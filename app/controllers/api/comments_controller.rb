class Api::CommentsController < ApplicationController
    before_action :require_logged_in
  
    def create
      @comment = current_user.comments.new(comment_params)
  
      if @comment.save
        render :show
      else
        render json: @comment, status: :unprocessable_entity
      end
    end
  
    private
  
    def comment_params
      params.require(:comment).permit(:user_id, :body, :video_id)
    end
end