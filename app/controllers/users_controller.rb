class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if (@user.save)
      render json: { success: "Account created successfuly!" }, status: :ok
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.required(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
