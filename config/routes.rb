Rails.application.routes.draw do
  root "polls#index"

  get "/login", to: "sessions#new"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "polls/new", to: "polls#new"
  post "polls/new", to: "polls#create"

  get "polls/all", to: "polls#index"

  get "/signup", to: "users#new"
  post "/signup", to: "users#create"

  get "*path", to: "users#new"
end
