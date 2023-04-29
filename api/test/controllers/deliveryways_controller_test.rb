require 'test_helper'

class DeliverywaysControllerTest < ActionDispatch::IntegrationTest
  setup do
    @deliveryway = deliveryways(:one)
  end

  test "should get index" do
    get deliveryways_url, as: :json
    assert_response :success
  end

  test "should create deliveryway" do
    assert_difference('Deliveryway.count') do
      post deliveryways_url, params: { deliveryway: { deliveryname: @deliveryway.deliveryname } }, as: :json
    end

    assert_response 201
  end

  test "should show deliveryway" do
    get deliveryway_url(@deliveryway), as: :json
    assert_response :success
  end

  test "should update deliveryway" do
    patch deliveryway_url(@deliveryway), params: { deliveryway: { deliveryname: @deliveryway.deliveryname } }, as: :json
    assert_response 200
  end

  test "should destroy deliveryway" do
    assert_difference('Deliveryway.count', -1) do
      delete deliveryway_url(@deliveryway), as: :json
    end

    assert_response 204
  end
end
