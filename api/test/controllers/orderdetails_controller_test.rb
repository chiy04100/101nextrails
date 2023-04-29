require 'test_helper'

class OrderdetailsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @orderdetail = orderdetails(:one)
  end

  test "should get index" do
    get orderdetails_url, as: :json
    assert_response :success
  end

  test "should create orderdetail" do
    assert_difference('Orderdetail.count') do
      post orderdetails_url, params: { orderdetail: { inventory: @orderdetail.inventory, items_id: @orderdetail.items_id, orders_id: @orderdetail.orders_id } }, as: :json
    end

    assert_response 201
  end

  test "should show orderdetail" do
    get orderdetail_url(@orderdetail), as: :json
    assert_response :success
  end

  test "should update orderdetail" do
    patch orderdetail_url(@orderdetail), params: { orderdetail: { inventory: @orderdetail.inventory, items_id: @orderdetail.items_id, orders_id: @orderdetail.orders_id } }, as: :json
    assert_response 200
  end

  test "should destroy orderdetail" do
    assert_difference('Orderdetail.count', -1) do
      delete orderdetail_url(@orderdetail), as: :json
    end

    assert_response 204
  end
end
