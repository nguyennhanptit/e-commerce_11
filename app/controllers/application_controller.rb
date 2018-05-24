class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include SessionsHelper
  include ApplicationHelper
  before_action :session_cart

  def load_menu
    @categories = Category.display
  end

  def session_cart
    @cart = session[:cart] || {}
    @count_product_cart = 0
    unless @cart.empty?
      @products_cart = @cart.map {|id, quantity| [Product.find_by(id: id),quantity]}
      @count_product_cart = @cart.length
      @total = total_cart @products_cart
    end
  end
end
