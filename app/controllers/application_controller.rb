class ApplicationController < ActionController::Base
  protect_from_forgery
  
  # put the flash hash into the response headers
  def header_flash
    response.headers["flash-messages"] = flash.to_json
    flash.each do |key, value|
      flash.delete key
    end
  end
end
