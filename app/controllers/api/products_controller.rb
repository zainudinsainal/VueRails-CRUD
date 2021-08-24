class Api::ProductsController < Api::ApiController
  before_action :set_product, only: [:show, :edit, :update]

  def index
    @products = Product.all
    render json: @products
  end

  def show
    render json: @product
  end

  def new
    @product = Product.new
    render json: @product
  end

  def create
    sleep 1
    @product = Product.new(product_params)

    if @product.save
      render json: @product, status: :ok
    else
      render json: @product, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    sleep 2
    if @product.update(product_params)
      render json: @product, status: :ok
    else
      render json: @product, status: :unprocessable_entity
    end
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:id, :name, :price, :description)
  end
end
