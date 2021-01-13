class CreateBallots < ActiveRecord::Migration[6.1]
  def change
    create_table :ballots do |t|
      t.references :user, null: false, foreign_key: true
      t.references :poll, null: false, foreign_key: true
      t.integer :option_id

      t.timestamps
    end
  end
end
