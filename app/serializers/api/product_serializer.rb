class Api::ProductSerializer < ApplicationSerializer

  attributes :id, :name, :price, :description, :errors

end
