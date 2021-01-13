class Poll < ApplicationRecord
  has_many :options, dependent: :destroy
  has_many :ballots, dependent: :destroy
  has_many :voters, through: :ballots, source: :user
  accepts_nested_attributes_for :options, allow_destroy: true
  validates :title, presence: true, length: { maximum: 300}
end
