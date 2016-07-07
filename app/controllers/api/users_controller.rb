class Api::UsersController < ApplicationController

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    @user.user_initials = @user.first_name[0] + @user.last_name[0]
    if @user.save
      login(@user)
      UserPreference.create!(user_id: @user.id, user_color: UserPreference.color)
      render 'api/users/show'
    else
      @errors = @user.errors
      render json: @errors, status: 422
    end
  end

  def update
    @user = current_user
    if @user.update(user_params)
      prefs = UserPreference.find(@user.id)
      prefs.update(pref_params)
      render 'api/users/show'
    else
      @errors = @user.errors
      render json: @errors, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :first_name, :last_name, :email_address, :password, :user_pic_url)
  end

  def pref_params
    params.require(:user).permit(:user_color)
  end
end
