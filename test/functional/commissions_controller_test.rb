require 'test_helper'

class CommissionsControllerTest < ActionController::TestCase
  setup do
    @commission = commissions(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:commissions)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create commission" do
    assert_difference('Commission.count') do
      post :create, commission: @commission.attributes
    end

    assert_redirected_to commission_path(assigns(:commission))
  end

  test "should show commission" do
    get :show, id: @commission.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @commission.to_param
    assert_response :success
  end

  test "should update commission" do
    put :update, id: @commission.to_param, commission: @commission.attributes
    assert_redirected_to commission_path(assigns(:commission))
  end

  test "should destroy commission" do
    assert_difference('Commission.count', -1) do
      delete :destroy, id: @commission.to_param
    end

    assert_redirected_to commissions_path
  end
end
