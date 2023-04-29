require 'test_helper'

class ItemlistsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @itemlist = itemlists(:one)
  end

  test "should get index" do
    get itemlists_url, as: :json
    assert_response :success
  end

  test "should create itemlist" do
    assert_difference('Itemlist.count') do
      post itemlists_url, params: { itemlist: { categories_id: @itemlist.categories_id, image: @itemlist.image, inventory: @itemlist.inventory, itemdescription: @itemlist.itemdescription, itemname: @itemlist.itemname, price: @itemlist.price } }, as: :json
    end

    assert_response 201
  end

  test "should show itemlist" do
    get itemlist_url(@itemlist), as: :json
    assert_response :success
  end

  test "should update itemlist" do
    patch itemlist_url(@itemlist), params: { itemlist: { categories_id: @itemlist.categories_id, image: @itemlist.image, inventory: @itemlist.inventory, itemdescription: @itemlist.itemdescription, itemname: @itemlist.itemname, price: @itemlist.price } }, as: :json
    assert_response 200
  end

  test "should destroy itemlist" do
    assert_difference('Itemlist.count', -1) do
      delete itemlist_url(@itemlist), as: :json
    end

    assert_response 204
  end
end
