class PollsController < ApplicationController
  before_action :authenticate_user, except: [:index]

  def index
    @polls = Poll.all
    @current_user = current_user
  end

  def new
  end

  def create
    params[:poll][:user_id] = current_user.id
    @poll = Poll.new(poll_params)

    if @poll.save
      render json: { success: "Poll Successfully created ", poll: @poll }, status: :ok
    else
      render json: { errors: @poll.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def poll_params
    params.required(:poll).permit(:title, :user_id, options_attributes: [:name])
  end
end
