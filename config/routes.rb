Rails.application.routes.draw do
  root 'static_pages#root'
  resources :tweets
end
