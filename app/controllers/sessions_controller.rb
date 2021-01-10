class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by(email: params[:session][:email])
    if (@user && @user.authenticate(params[:session][:password]))
      log_in @user
      render json: { success: "Welcome, #{@user.name}!" }, status: :ok
    else
      render json: { errors: ["Invalid email/password combination."] }, status: 401
    end
  end
end
