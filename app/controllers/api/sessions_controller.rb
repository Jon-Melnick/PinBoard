class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:email_address], params[:password])
    if @user
      login(@user)
      render json: @user
    else
      render json: {message: 'Invalid Username and/or Password'}, status: 422
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: {message: 'No one is currently logged in'}, status: 404
    end
  end

end
