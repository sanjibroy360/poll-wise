module SessionsHelper
  def log_in(user)
    session[:user_id] = user.id
  end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end

  def logged_in?
    !current_user.nil?
  end

  def log_out
    current_user = nil
  end

  def authenticate_user
    unless logged_in?
      flash[:danger] = "You need to log in first."
      redirect_to login_url
    end
  end
end
