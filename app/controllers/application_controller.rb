class ApplicationController < ActionController::Base
  protect_from_forgery

  after_filter :header_flash

  # put the flash hash into the response headers
  def header_flash
    if ["text/javascript", "application/javascript", "application/x-javascript"].include? response.content_type
      response.headers["flash-messages"] = flash.to_json
      flash.each do |key, value|
        flash.delete key
      end
    end
  end
end
