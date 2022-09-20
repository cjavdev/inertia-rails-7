class StaticPagesController < ApplicationController

  def root
    render inertia: 'Home'
  end
end
