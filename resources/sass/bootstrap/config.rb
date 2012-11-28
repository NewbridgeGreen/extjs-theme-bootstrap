# Get the directory that this configuration file exists in
dir = File.dirname(__FILE__)
$ext_path = File.join('..', '..', '..', 'ext')

# Load the extjs framework automatically.
#load File.join($ext_path, 'resources', 'themes')

# Load the local theme
load File.join('..', '..', 'theme');

# Compass configurations
sass_path = dir
css_path = File.join("..", "..", "css", "bootstrap")
images_dir = File.join("..", "..", "theme", "images", "bootstrap")
output_style = :compressed
environment = :production
