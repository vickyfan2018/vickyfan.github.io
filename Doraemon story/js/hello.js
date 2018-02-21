$(document).ready(function() {
			$('#fullpage').fullpage({
				sectionsColor: ['white', 'white', '#03A6D7', '#03A6D7', '#ccddff'],
				anchors: ['1st', '2nd', '3rd', '4th', '5th'],
				menu: '#menu',
				scrollingSpeed: 1000,
				'navigation': true,
				'navigationPosition': 'right',
				'navigationTooltips': ['', '', '', '', 'lastPage'],
			});
		});