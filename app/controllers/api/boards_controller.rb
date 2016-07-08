class Api::BoardsController < ApplicationController

  def index
    @boards = current_user.boards
  end

  def show
    @board = Board.find(params[:id])
  end

  def create
    @board = Board.new(board_params)
    @board.creator_id = current_user.id
    if @board.save
      team_params.each do |member_id|
        Team.create!(board_id: @board.id, team_member_id: member_id)
      end
      render :show
    else
      @errors = @errors.errors
      render json: @errors, status: 422
    end
  end

  def update
    @board = Board.find(params[:id])
    if @board
      @board.update(board_params)
      team_params.each do |member_id|
        Team.create!(board_id: @board.id, team_member_id: member_id)
      end
      render :show
    else
      @errors = @errors.errors
      render json: @errors, status: 422
    end
  end

  private
  def board_params
    params.require(:board).permit(:title, :description, :board_style, :hidden, :team)
  end
  def team_params
    params[:team][:team]
  end
end
