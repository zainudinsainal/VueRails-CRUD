Rails.application.routes.draw do
  Rails.application.routes.draw do
  root to: 'users#index'
  match "*path", to: "users#index", format: false, via: :get
end
end
