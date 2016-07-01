class Api::UserPreferencesController < ApplicationController

  def create
    @user_preferences = UserPreference.new(pref_params)
    @user_preferences.color = UserPreference.color
    if @user_preferences.save
      render json: @user_preferences
    else
      render json: {message: 'error creating preferences'}
    end
  end

  def update
    @user_preferences = UserPreference.find_by(user_id: params[:preference][:user_id])
    if @user_preferences.update_attributes(pref_params)
      render json: @user_preferences
    else
      render json: {message: "error updating preferences"}
    end
  end

  def show
    @user_preferences = UserPreference.find(params[:id])
  end

  private

  def pref_params
    params.require(:preference).permit(:user_id, :color)
  end

end
