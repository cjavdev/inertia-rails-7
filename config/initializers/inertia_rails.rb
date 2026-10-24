# frozen_string_literal: true

InertiaRails.configure do |config|
  config.version = ViteRuby.digest
  config.always_include_errors_hash = true
  # Inertia 3's client reads the initial page from a <script> element.
  config.use_script_element_for_initial_page = true
  config.use_data_inertia_head_attribute = true
end
