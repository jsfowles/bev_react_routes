class Beer < ActiveRecord::Base
  validates_presence_of :name, :style
end
