Rails.application.routes.draw do
  root "users#new"
  get "/signup", to: "users#new"
  post "/signup", to: "users#create"
end