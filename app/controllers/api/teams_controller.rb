class Api::TeamsController < ApplicationController
  def index
    @teams = Team.all
  end

  def show
    @team = Team.find(params[:id])
  end

  def create
    @team = Team.new(team_params)
    if @team.save
      render 'api/teams/show'
    else
      @errors = @team.errors
      render json: @errors, status: 422
    end
  end

  def destroy
    @team = Team.find(params[:id])
    @team.destroy!
    render json: @team
  end

  private

  def team_params
    params.require(:team).permit(:team_member_id, :board_id)
  end
end
