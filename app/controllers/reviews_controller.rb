class ReviewsController < ApplicationController
  before_action :set_list, only: [:create]

  def new
  end

  def create
    @review = Review.new(review_params)
    @review.list = @list

    if @review.save
      redirect_to list_path(@list)
    else
      @bookmark = Bookmark.new
      render "/lists/show", status: :unprocessable_entity
    end
  end

  private

  def set_list
    @list = List.find(params[:list_id])
  end

  def review_params
    params.require(:review).permit(:comment, :rating)
  end
end
