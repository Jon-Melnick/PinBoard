class Api::BoardsController < ApplicationController

  def index
    @boards = Board.all.where(creator_id: current_user.id)
  end

  def show
    @board = Board.find(params[:id])
  end

  def create
    @board = Board.new(board_params)
    @board.creator_id = current_user.id
    if @board.save
      render json: @board
    else
      @errors = @errors.errors
      render json: @errors, status: 422
    end
  end

  def update
    @board = Board.find(params[:id])
    if @board
      @board.update(board_params)
      render json: @board
    else
      @errors = @errors.errors
      render json: @errors, status: 422
    end
  end

  private
  def board_params
    params.require(:board).permit(:title, :description)
  end
end
