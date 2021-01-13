class Ballot < ApplicationRecord
  belongs_to :user
  belongs_to :poll
  validates :option_id, :poll_id, presence: true
end
