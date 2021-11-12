Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "homes#index"

  namespace :api do
    namespace :v1 do
      resources :bands, only: [:index, :show]
      resources :reviews, only: [:index, :show]
    end
  end

  resources :bands, only: [:new, :create]
end