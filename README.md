ExtJS 4 Theme - Bootstrap
=============

Welcome to the Bootstrap ExtJS 4 theme from Newbridge Green. Please get in touch at any time for support, questions or just to say hi!

 - Email: info@newbridgegreen.com

 - Twitter: [@newbridgegreen](https://twitter.com/#!/newbridgegreen)
 
 - Chat: https://www.hipchat.com/go83kDW6V

##How to integrate with your ExtJS 4 project

Integrating this theme with your project is easy just do the following. 

 - Copy the contents of this download into your `public/resources` folder.
 - Modify your index page to include the bootstrap.css file `<link rel="stylesheet" type="text/css" href="resources/css/bootstrap/bootstrap.css" />`.

	
Now your ExtJS application should be using the new Bootstrap theme.

Look at the example apps shipped with this project on how to integrate the theme.

 > Please email raise any issues if you have problems with integration

##Licence

This software has been released under 
##Customising the theme

If you are planning on customising this theme, you should have a basic understanding of how theming works within ExtJS.


**If you do not, please read the [ExtJS 4 Theming guide](http://docs.sencha.com/ext-js/4-1/#!/guide/theming) and understand how to customise a theme before you attempt any modifications.**


Once you have installed the custom theme [requirements](http://docs.sencha.com/ext-js/4-1/#!/guide/theming-section-2) and the [Sencha SDK](http://www.sencha.com/products/sdk-tools). You can setup [ExtJS 4](http://www.sencha.com/products/extjs) in the root directory of this project.

WARNING
=======

The following instructions are un tested as this theme was built with SenchaCMD.

####Linux/OSX
If you already have the ExtJS 4 framework installed on your machine, symlink to it in the root of this project.

	ln -s [Path to ExtJS] extjs
	
####Windows
Copy the ExtJS 4 framework into the root folder of this project

Now you should be ready to recompile this theme.

###Basic customisation

You can change basic properties of this theme by altering any of the files in the `themes/stylesheets/Bootstrap/default/variables` folder. Each file gives you a basic set of variables to alter things like font size, colour, borders etc for each of the major components. 

###Regenerate Theme

	cd [ROOT]/sass
	compass compile
	
To watch for changes on the files rather than recompiling after changes, use this.

	compass watch
	
###Regenerate images for old browsers

If you make changes to the colour scheme, you will need to reslice the theme in order to support all the browsers out there that we wish didn't exist anymore.
 
	cd [ROOT]/sass
	sencha slice theme -d ../extjs -c ../css/Bootstrap.css -o ../themes/images/default/ -v
	
This will slice up your lovely new CSS3 based theme into nice little images for older browsers.


###Add new icons

Copy any new icons to the folder `themes/images/default/icon` then run this to generate a new _icons.scss file

	cd [ROOT]/sass
	compass sprite --force "icon/*.png
	compass compile
	
This will recompile the theme to create the sprite file with the new icons. Use the @include icon-sprite([filename]) mixin to include any new icons in this theme.



