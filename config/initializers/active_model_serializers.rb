# See: https://github.com/rails-api/active_model_serializers/blob/master/docs/general/configuration_options.md

ActiveModelSerializers.config.adapter = :json
ActiveModelSerializers.config.key_transform = :unaltered # for performance boost (?)
ActiveModelSerializers.config.default_includes = '**' # allow deep nesting
