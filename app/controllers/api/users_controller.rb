class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find_by(id: params[:id])
    if(@user)
      render :show
    else
      render json: @user.errros.full_messages, status: 422
  end

  def create
    @user = User.new(user_params)
  
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:profile_pic :user_name, :password, :email, :first_name, :last_name)
  end


end

