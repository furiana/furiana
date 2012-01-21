module ApplicationHelper

	def title
		base_title = "Furiana's Artwork"
		if @title.nil?
			base_title
		else
			"#{base_title} | #{@title}"
		end
	end
		
end
