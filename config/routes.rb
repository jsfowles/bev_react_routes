Rails.application.routes.draw do
  root 'home#index'
  namespace :api do
    resources :beers
  end
  # keep this at the very bottom
  get '*unmatched_route', to: 'home#index'
end
