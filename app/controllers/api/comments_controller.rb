class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :show
    else
      @errors = @comment.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])

    if @comment.destroy
      render :show
    else
      @errors = @comment.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :post_id, :user_id);
  end
end
