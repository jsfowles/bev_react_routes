Rails.application.routes.draw do
  root 'home#index'

  # keep this at the very bottom
  get '*unmatched_route', to: 'home#index'
end
