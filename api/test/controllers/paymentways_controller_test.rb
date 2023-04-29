require 'test_helper'

class PaymentwaysControllerTest < ActionDispatch::IntegrationTest
  setup do
    @paymentway = paymentways(:one)
  end

  test "should get index" do
    get paymentways_url, as: :json
    assert_response :success
  end

  test "should create paymentway" do
    assert_difference('Paymentway.count') do
      post paymentways_url, params: { paymentway: { paymentname: @paymentway.paymentname } }, as: :json
    end

    assert_response 201
  end

  test "should show paymentway" do
    get paymentway_url(@paymentway), as: :json
    assert_response :success
  end

  test "should update paymentway" do
    patch paymentway_url(@paymentway), params: { paymentway: { paymentname: @paymentway.paymentname } }, as: :json
    assert_response 200
  end

  test "should destroy paymentway" do
    assert_difference('Paymentway.count', -1) do
      delete paymentway_url(@paymentway), as: :json
    end

    assert_response 204
  end
end
