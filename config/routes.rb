Rails.application.routes.draw do
  resources :things
  get 'main/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "main#index"
end
