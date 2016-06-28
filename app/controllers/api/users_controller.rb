class Api::UsersController < ApplicationController

  def index
    @user = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      @errors = @user.errors
      render json: @errors, status: 422
    end
  end

  def update
    @user = current_user
    if @user.update(user_params)
      render 'api/users/show'
    else
      @errors = @user.errors
      render json: @errors, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :first_name, :last_name, :email_address, :password)
  end
end
