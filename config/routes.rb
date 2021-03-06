Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :videos, only: [:create, :destroy, :show, :index]
    resources :comments, only: [:create, :destroy, :index]
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :likes, only: [:create, :destroy, :show, :index]
  end

  root to: "static_pages#root"
end
