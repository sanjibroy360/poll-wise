class BallotsController < ApplicationController
  before_action :authenticate_user, only: [:vote]
  before_action :validate, only: [:vote]

  def vote
    params[:ballot][:user_id] = current_user.id
    @ballot = Ballot.new(ballot_params)

    if @ballot.save
      @option = @poll.options.detect { |option| option.id == @ballot.option_id }
      @option.increment!(:vote_count)
      flash[:success] = "Voted successfuly!"
      render status: :ok, json: { success: "Voted successfully!" }
    else
      flash[:danger] = "Something went wrong."
      render status: :unprocessable_entity, json: { erros: @ballot.errors.full_messages }
    end
  end

  private

  def validate
    ballot = params[:ballot]
    @poll = Poll.find_by(id: ballot[:poll_id])
    already_voted = @poll.voter_ids.include?(current_user.id)

    if (@poll.nil? || already_voted)
      flash[:danger] = "You have already voted this pole."
      redirect_to root_url
    end
  end

  def ballot_params
    params.required(:ballot).permit(:poll_id, :option_id, :user_id)
  end
end
