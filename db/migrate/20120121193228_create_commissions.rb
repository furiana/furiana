class CreateCommissions < ActiveRecord::Migration
  def change
    create_table :commissions do |t|
      t.string :commissioner
      t.string :commission
      t.boolean :info
      t.boolean :first_payment
      t.boolean :sketch_completed
      t.boolean :final_payment
      t.boolean :high_res_sent
      t.boolean :shipped
      t.string :est_completion

      t.timestamps
    end
  end
end
