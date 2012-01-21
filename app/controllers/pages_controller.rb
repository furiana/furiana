class PagesController < ApplicationController
  def home
	@title = nil
  end

  def about
	@title = "About"
  end

  def tos
	@title = "Terms of Service"
  end

  def prices
	@title = "Price Guide"
  end

  def subjects
	@title = "Subject Guide"
  end

  def shipping
	@title = "Shipping Rates"
  end

  def queue
	@title = "Queue"
  end

end
