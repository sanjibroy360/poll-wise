class AddDefaultVoteCountToOptions < ActiveRecord::Migration[6.1]
  def change
    change_column :options, :vote_count, :integer, default: 0
  end
end
