require 'test_helper'

class CartdetailsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @cartdetail = cartdetails(:one)
  end

  test "should get index" do
    get cartdetails_url, as: :json
    assert_response :success
  end

  test "should create cartdetail" do
    assert_difference('Cartdetail.count') do
      post cartdetails_url, params: { cartdetail: { carts_id: @cartdetail.carts_id, users_id: @cartdetail.users_id } }, as: :json
    end

    assert_response 201
  end

  test "should show cartdetail" do
    get cartdetail_url(@cartdetail), as: :json
    assert_response :success
  end

  test "should update cartdetail" do
    patch cartdetail_url(@cartdetail), params: { cartdetail: { carts_id: @cartdetail.carts_id, users_id: @cartdetail.users_id } }, as: :json
    assert_response 200
  end

  test "should destroy cartdetail" do
    assert_difference('Cartdetail.count', -1) do
      delete cartdetail_url(@cartdetail), as: :json
    end

    assert_response 204
  end
end
