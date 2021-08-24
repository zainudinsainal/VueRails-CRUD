Rails.application.routes.draw do

  namespace :api, :defaults => { :format => 'json' } do
    resources :products
  end

  root to: 'users#index'
  match "*path", to: "users#index", format: false, via: :get
end

