class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  validates :username, presence: true, uniqueness: true
  validates :first_name, presence: true
  
  has_many :reviews
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  def admin?
    role == "admin"
  end 

end
