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
      if tag_params
        tags = tag_params.split(", ").map(&:strip)
        tags.each do |tag|
          if Tag.find_by(tag: tag)
            tag_id = Tag.find_by(tag: tag).id
            Tagging.create(pin_id: @pin.id, tag_id: tag_id)
          else
            new_tag = Tag.create(tag: tag)
            tag_id = new_tag.id
            Tagging.create(pin_id: @pin.id, tag_id: tag_id)
          end
        end
      end

      render :show
    else
      @errors = @errors.errors
      render json: @errors, status: 422
    end
  end

  def update
    @pin = Pin.find(params[:id])
    if @pin
      @pin.update(pin_params)
      render :show
    else
      @errors = @errors.errors
      render json: @errors, status: 422
    end
  end

  def destroy
    @pin = Pin.find(params[:id])
    @pin.destroy
    render :show
  end

  private
  def pin_params
    params.require(:pin).permit(:title, :body, :pin_color, :note_color, :img_url, :board_id, :posX, :posY, :zIndex)
  end

  def tag_params
    if params[:tags]
      return params[:tags][:tags]
    else
      return nil
    end
  end

end
