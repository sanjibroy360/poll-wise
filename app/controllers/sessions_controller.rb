class SessionsController < ApplicationController
  before_action :authenticate, only: [:delete]

  def new
  end

  def create
    @user = User.find_by(email: params[:session][:email])
    if (@user && @user.authenticate(params[:session][:password]))
      reset_session
      log_in @user
      render json: { success: "Welcome, #{@user.name}!" }, status: :ok
    else
      render json: { errors: ["Invalid email/password combination."] }, status: 401
    end
  end

  def destroy
    log_out
    reset_session
    render json: { success: "Logged out successfuly." }, status: :ok
  end
end
