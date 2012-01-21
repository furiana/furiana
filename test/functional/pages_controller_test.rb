require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get about" do
    get :about
    assert_response :success
  end

  test "should get tos" do
    get :tos
    assert_response :success
  end

  test "should get prices" do
    get :prices
    assert_response :success
  end

  test "should get subjects" do
    get :subjects
    assert_response :success
  end

  test "should get shipping" do
    get :shipping
    assert_response :success
  end

  test "should get queue" do
    get :queue
    assert_response :success
  end

end
