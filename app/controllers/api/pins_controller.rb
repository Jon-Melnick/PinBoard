class Api::PinsController < ApplicationController
  def index

    @pins = Pin.all.where(board_id: params[:board_id])
  end

  def show
    @pin = Pin.find(params[:id])
  end

  def create
    @pin = Pin.new(pin_params)
    @pin.user_id = current_user.id
    if @pin.save
      render json: @pin
    else
      @errors = @errors.errors
      render json: @errors, status: 422
    end
  end

  def update
    @pin = Pin.find(params[:id])
    if @pin
      @pin.update(pin_params)
      render json: @pin
    else
      @errors = @errors.errors
      render json: @errors, status: 422
    end
  end

  private
  def pin_params
    params.require(:pin).permit(:title, :body, :board_id, :posX, :posY, :zIndex)
  end
end
