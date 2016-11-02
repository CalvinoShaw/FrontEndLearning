// 包装函数
module.exports = function(grunt){
	'use strict';

	// 任务配置，所有插件的配置信息
	grunt.initConfig({

		// 获取 packge.json 的信息
		pkg: grunt.file.readJSON('package.json'),

		// uglify 插件的配置信息
		uglify:{
			options:{
				stripBanners:true,
				banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build:{
				src:'src/test-uglify.js',
				dest:'build/<%=pkg.name%>-<%=pkg.version%>.js.min.js'
			},
		},

		// jshint 插件的配置信息
		jshint:{
			// “build”中描述了jshint要检查哪些js文档的语法
			build:['src/*.js'],
			test1:['Gruntfile.js'],
			// “options”中描述了要通过怎么的规则检查语法，这些规则的描述文件就保存在网站根目录下的一个叫做“.jshintrc”的文件中。
			options:{
				jshintrc:'.jshintrc'
			},
		},

		csslint: {
		  options: {
		    csslintrc: '.csslintrc'
		  },
		  strict: {
		    options: {
		      import: 2
		    },
		    src: ['src/*.css']
		  },
		  lax: {
		    options: {
		      import: false
		    },
		    src: ['src/*.css']
		  }
		},

		watch:{
			build:{
				files:['src/*.js','src/*.css'],
				tasks:['jshint','uglify'],
				options:{
					spawn: false,
				},
			},
		},

	});

	// 告诉 grunt 我们将要使用的插件
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	// 告诉 grunt 当我们在终端中输入 grunt 时需要做些什么
	grunt.registerTask('default',['uglify','jshint','watch']);
};