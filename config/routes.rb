Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'homes#index'

  resources :bands, only: [:new, :create, :edit, :update, :destroy]

  get "/bands", to: "homes#index"
  get "/bands/:id", to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :bands, only: [:index, :show]
      resources :users, only: [:index]
    end
  end
end
