# Attributes that I added:
# commissioner:string
# commission:string
# info:boolean
# first_payment:boolean
# sketch_completed:boolean
# final_payment:boolean
# high_res_sent:boolean
# shipped:boolean
# est_completion:string

class Commission < ActiveRecord::Base
	attr_accessible :commissioner, :commission, :info, :first_payment, :sketch_completed, :final_payment, :high_res_sent, :shipped, :est_completion
end
